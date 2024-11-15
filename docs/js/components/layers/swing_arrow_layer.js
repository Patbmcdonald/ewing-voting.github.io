class SwingArrowLayer {
    constructor(electionData, options) {
        this.electionData = electionData;
        this.options = options;
    }

    // Method to add a layer and arrows
    addLayer(districtsGeoJSON, map) {
        let $this = this;
        L.geoJSON(districtsGeoJSON, {
            style: $this.defaultStyle(),
            onEachFeature: function (feature, layer) {
                $this._onEachFeature(feature, layer, map);
            }
        }).addTo(map);
    }

    // Default styling for the GeoJSON regions
    defaultStyle() {
        return {
            weight: 1,
            fillOpacity: 0.5
        };
    }


    generateCandiateTableHTML({
        districtName,
        candidates,
    }) {
        const resultsTableHTML = `
            <div class="results-table">
              <div class="results-header">${districtName}</div>
          
              <div class="table-header">
                  <div class="candidate-name"></div>
                  <div class="vote-count"></div>
                  <div class="percentage">Margin</div>
              </div>
          
              ${candidates.map((candidate, index) => `
                <div class="results-row candidate-row ${candidate.rowCssClass}"  
                     data-index="${index}">
                    <div class="candidate-name">${candidate.name}</div>
                    <div class="vote-count"></div>
                    <div class="percentage ${candidate.cssClass}">${candidate.percentage}</div>
                </div>
              `).join('')}
            </div>
        `;

        const template = document.createElement('div');
        template.innerHTML = resultsTableHTML;

        template.querySelectorAll('.candidate-row').forEach(row => {
            const index = row.getAttribute('data-index');
            const candidate = candidates[index];
            if (candidate && typeof candidate.handler === 'function') {
                row.addEventListener('click', (event) => {
                    event.stopPropagation();
                    candidate.handler(candidate);
                });
            }
        });

        return template.innerHTML;
    }


    // This function handles each feature (district) and adds an arrow to it
    _onEachFeature(feature, layer, map) {


        var dataSet = this.electionData.getGroupedByPKey()
        var this_data = dataSet[feature.properties[this.options.pk]][0]
        var data_set_margin = Number.parseFloat(this_data[this.options.swingField[1]] - this_data[this.options.swingField[0]]).toFixed(2);
        
        this_data["__margin__"] = data_set_margin;
        
        
        layer.bindTooltip(feature.properties[this.options.pk], {
            permanent: true,
            direction: "center",
            className: "swing-arrow-tooltip"
        });

        layer.setStyle({
            color: "black",
            weight: 1,
            fillOpacity: 0
        });

        layer.setStyle({
            color: Utils.getColor(parseInt(data_set_margin), Constants.marginScaleGradient),
            weight: 1,
            fillOpacity: 0.20
        });


        
        for (let i = 0; i < 20; i++) {
            const randomPoint = this._generateRandomPoint(feature);
            var districtSwing = parseFloat(data_set_margin) * 10;
            var angle = 45;
            if (districtSwing > 0)
                angle = 320;

            if (randomPoint) {
                const startPoint = L.latLng(randomPoint[1], randomPoint[0]);
                const endPoint = this._calculateEndPoint(startPoint, districtSwing, angle); // example with 500m length and 45° angle

                // Create the polyline and add it to the map
                const arrowLine = L.polyline([startPoint, endPoint], {
                    color: (districtSwing > 0 ? 'blue' : 'red'),
                    weight:1,
                }).addTo(map);
            }

        }

        const candidates = this.electionData.getCandidates().map(candidate => ({
            name: candidate.name,
            percentage: (this_data[candidate.dataKey] > 0.0 ? "D +"+this_data[candidate.dataKey] : "R +"+this_data[candidate.dataKey] * -1),
            party: candidate.party,
            cssClass: (candidate.dataKey == '__margin__' ? ((this_data[candidate.dataKey] > 0) ?  "democrat": "republican") : ""),
            rowCssClass : (candidate.dataKey == '__margin__' ? "winner_row": ""),
        }));

        const tableOptions = {
            districtName: `Ewing District ${feature.properties.ELECD_CODE}`,
            candidates,
        };

        const resultsTableHTML = this.generateCandiateTableHTML(tableOptions);
        layer.bindPopup(resultsTableHTML);

    }

    // Generate a random point within the GeoJSON polygon
    _generateRandomPoint(feature) {
        // 1. Calculate the center of the feature
        const center = turf.center(feature).geometry.coordinates;

        // 2. Define a smaller radius for zoom level 13 (e.g., 0.25 km)
        const radiusInKm = 0.25; // Approximate visible area radius at zoom 13, adjust as needed

        // 3. Calculate degrees from km for zoom level 13 (1 degree ≈ 111.32 km, so smaller degree range)
        const degreeRadius = radiusInKm / 111.32;

        // 4. Generate a random point within this smaller bounding box around the center
        const randomPoint = turf.randomPoint(1, {
            bbox: [
                center[0] - degreeRadius,
                center[1] - degreeRadius,
                center[0] + degreeRadius,
                center[1] + degreeRadius
            ]
        }).features[0].geometry.coordinates;

        return randomPoint;
    }
    _calculateEndPoint(startPoint, distance, angle) {
        const R = 6371e3; // Earth's radius in meters
        const φ1 = startPoint.lat * Math.PI / 180;
        const λ1 = startPoint.lng * Math.PI / 180;
        const θ = angle * Math.PI / 180;
        const δ = distance / R;

        const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
        const λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1), Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));

        return L.latLng(φ2 * 180 / Math.PI, λ2 * 180 / Math.PI);
    }
}