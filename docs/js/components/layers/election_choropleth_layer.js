class ElectionMarginLayer {
    constructor(electionData, options) {
        this.electionData = electionData;
        this.options = options;
    }

    getVoteKeys(dataSet, year_key) {
        return Object.keys(dataSet).filter(key => key.endsWith('_votes') && key.startsWith(year_key));
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
        var marginInfo = `${maxVoteKey.replace('_votes', '').replace(this.options.year+'_','').toUpperCase()} +${dataSet[this.options.marginValue]}`;

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

    _onEachFeature(feature, layer) {
        var dataSet = this.electionData.getGroupedByPKey()
        var key = feature.properties[this.options.pk]
        var this_data = dataSet[key][0];
        var year_key = this.options.year + "_";
        var voteKeys = this.getVoteKeys(this_data, year_key);

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
            votes: this_data[year_key + candidate.dataKey + "_votes"],
            percentage: this_data[year_key + candidate.dataKey + "_percent"],
            party: candidate.party,
            isWinner: Utils.checkAgainstMultipleKeys(this_data[year_key + candidate.dataKey + "_votes"], this_data, voteKeys),
            handler: () => alert(`Displaying details for ${candidate.name}`)
        }));

        const {
            marginInfo,
            marginInfoColor
        } = this.getMarginInfo(this_data, voteKeys);

        const columns = [{
                headerName: 'Candidate',
                key: 'name',
                className: 'candidate-name',
                post_fix: '',
            },
            {
                headerName: 'Votes',
                key: 'votes',
                className: 'vote-count',
                post_fix: '',
            },
            {
                headerName: '%',
                key: 'percentage',
                className: 'percentage',
                post_fix: '%',
            },
        ];

        const tableOptions = {
            title: `Ewing District ${feature.properties.ELECD_CODE}`,
            columns: columns,
            dynamicRows: [
                {
                    containerClass: 'results-row candidate-row',
                    customRenderer: function (field) {
                        return candidates.map((candidate, index) => `
                    <div class="${field.containerClass} ${candidate.party.toLowerCase()} ${candidate.isWinner ? 'winner' : ''}" data-index="${index}">
                    ${columns.map(column => `
                        <div class="${column.className || ''}">
                            ${candidate[column.key] + column.post_fix || ''}
                            ${column.key === 'name' && candidate.isWinner ? ' ✓' : ''}
                        </div>
                    `).join('')}
                </div>
            `).join('');
                    }
                },
                {
                    containerClass: 'results-row border_top',
                    customRenderer: function (field) {
                        return `
                    <div class="${field.containerClass}">
                        <div class="candidate-name"></div>
                        <div class="vote-count"></div>
                        <div class="margin-info ${marginInfoColor}">${marginInfo}</div>
                    </div>
                </div>`;
                    }
                },
            ],
            dynamicFields: [{
                label: 'Margin Info',
                containerClass: 'margin-info',
                customRenderer: (field) => `
                        Registered Voters: ${this_data[this.options.registered_voters]} | 
                        Casted Ballots: ${this_data[this.options.casted_ballots]} | 
                        Turnout: ${this_data[this.options.turnout_percentage]}% 
                    `,
            }],
            post_process: function (template) {
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

                return template
            }
        };

        const resultsTableHTML = Utils.createElectionResultTableHTML(tableOptions)

        layer.bindPopup(resultsTableHTML);

        layer.on("click", () => {
            // Add any additional handling on click
        });
    }

    addLayer(districtsGeoJSON, map) {
        let $this = this;
        L.geoJSON(districtsGeoJSON, {
            style: $this.defaultStyle(),
            onEachFeature: function (feature, layer) {
                $this._onEachFeature(feature, layer);
            }
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