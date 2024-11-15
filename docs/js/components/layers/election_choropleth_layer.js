class ElectionMarginLayer {
    constructor(electionData, options) {
        this.electionData = electionData;
        this.options = options;
    }

    getVoteKeys(dataSet) {
        return Object.keys(dataSet).filter(key => key.endsWith('_votes'));
    }

    getMarginInfo(dataSet, voteKeys) {

        if (voteKeys.length === 0) {
            return {
                marginInfo: '',
                marginInfoColor: ''
            }; // Return empty if no vote keys
        }

        // Find the key with the highest vote count
        var maxVoteKey = voteKeys.reduce((maxKey, key) =>
            dataSet[key] > dataSet[maxKey] ? key : maxKey
        );

        // Construct the marginInfo based on the maximum vote key
        var marginInfo = `${maxVoteKey.replace('_votes', '').toUpperCase()} +${dataSet[this.options.marginValue]}`;

        var marginInfoColor = '';
        if (maxVoteKey.includes('dem')) {
            marginInfoColor = 'democrat';
        } else if (maxVoteKey.includes('rep')) {
            marginInfoColor = 'republican';
        } else {
            marginInfoColor = 'third-party'; // Assign a color for third parties if needed
        }

        return {
            marginInfo,
            marginInfoColor
        };
    }

    generateCandiateTableHTML({
        districtName,
        candidates,
        registeredVoters,
        castedBallots,
        marginInfo,
        marginInfoColor
    }) {
        const turnoutPercentage = ((castedBallots / registeredVoters) * 100).toFixed(1);

        const resultsTableHTML = `
            <div class="results-table">
              <div class="results-header">${districtName}</div>
          
              <div class="table-header">
                  <div class="candidate-name">Candidate</div>
                  <div class="vote-count">Votes</div>
                  <div class="percentage">%</div>
              </div>
          
              ${candidates.map((candidate, index) => `
                <div class="results-row candidate-row ${candidate.party.toLowerCase()} ${candidate.isWinner ? 'winner' : ''}" 
                     data-index="${index}">
                    <div class="candidate-name">${candidate.name}${candidate.isWinner ? ' ✓' : ''}</div>
                    <div class="vote-count">${candidate.votes}</div>
                    <div class="percentage">${candidate.percentage}%</div>
                </div>
              `).join('')}
                <div class="results-row border_top">
                    <div class="candidate-name"></div>
                    <div class="vote-count"></div>
                    <div class="margin-info ${marginInfoColor}">${marginInfo}</div>
                </div>
              <div class="vote-info">
                  Registered Voters: ${registeredVoters} | 
                  Casted Ballots: ${castedBallots} | 
                  Turnout: ${turnoutPercentage}% 
              </div>
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


    _onEachFeature(feature, layer) {
        var dataSet = this.electionData.getGroupedByPKey()
        var key = feature.properties[this.options.pk]

        var this_data = dataSet[key][0];

        var voteKeys = this.getVoteKeys(this_data);

        layer.setStyle({
            color: Utils.getColor(parseInt(this_data[this.options.marginValue]), Constants.marginScaleGradient),
            weight: 1,
            fillOpacity: 0.5
        });

        layer.bindTooltip(feature.properties[this.options.pk], {
            permanent: true,
            direction: "center",
            className: "my-labels"
        });

        // Dynamically create candidates based on dataSet from ElectionData
        const candidates = this.electionData.getCandidates().map(candidate => ({
            name: candidate.name,
            votes: this_data[candidate.dataKey + "_votes"],
            percentage: this_data[candidate.dataKey + "_percent"],
            party: candidate.party,
            isWinner: Utils.checkAgainstMultipleKeys(this_data[candidate.dataKey + "_votes"], this_data, voteKeys),
            handler: () => alert(`Displaying details for ${candidate.name}`)
        }));

        const {
            marginInfo,
            marginInfoColor
        } = this.getMarginInfo(this_data, voteKeys);

        const tableOptions = {
            districtName: `Ewing District ${feature.properties.ELECD_CODE}`,
            candidates,
            registeredVoters: this_data[this.options.registered_voters],
            castedBallots: this_data[this.options.casted_ballots],
            marginInfo: marginInfo,
            marginInfoColor: marginInfoColor
        };

        const resultsTableHTML = this.generateCandiateTableHTML(tableOptions);
        layer.bindPopup(resultsTableHTML);

        layer.on("click", () => {
            // Add any additional handling on click
        });
    }

    addLayer(districtsGeoJSON, map) {
        let $this = this;
        L.geoJSON(districtsGeoJSON, {
            style: $this.defaultStyle(),
            onEachFeature: function(feature, layer) { $this._onEachFeature(feature, layer);}
        }).addTo(map);
    }

    defaultStyle() {
        return {
            color: "gray",
            weight: 1,
            fillOpacity: 0.5
        };
    }
}
