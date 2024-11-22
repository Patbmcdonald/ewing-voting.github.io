class MainApplication {


    constructor(app_id) {
        this.container = document.getElementById(app_id);
        if (!this.container) throw new Error('There is no div with the id: "app"');
        this.map = this.build_map()
        this.osmLayer = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}');

        this.ewing_mayor_race__2022 = new MayorMarginRaceLayer(electionMayorData, {
            registered_voters: "2022_registered_voters",
            casted_ballots: "2022_casted_ballots",
            marginValue: "2022_margin_of_win",
            turnout_percentage: "2022_turnout",
            year: "2022"
        });
        this.ewing_mayor_race__2018 = new MayorMarginRaceLayer(electionMayorData, {
            registered_voters: "2018_registered",
            casted_ballots: "2018_casted",
            marginValue: "2018_margin_of_win",
            turnout_percentage: "2018_turnout",
            year: "2018"
        });
        this.ewing_mayor_race_2018_2022_swing = new MayorSwingYoYLayer(electionMayor2022_2018_MarginSwingData);
        this.current_layer = this.ewing_mayor_race__2022;
        this.init();
    }

    init() {

        this.map.addLayer(this.osmLayer);
        var $this = this;
        addSidebarLegendToMap(this.map, {
            groupings: [{
                    title: 'Elections',
                    groups: [{
                        label: 'Local Election Results',
                        items: [{
                                label: '2022 Ewing Mayor Race',
                                value: '2022',
                                checked: true,
                                handler: () => $this.rerender($this.ewing_mayor_race__2022)
                            },
                            {
                                label: '2018 Ewing Mayor Race',
                                value: '2018',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race__2018)
                            }
                        ]
                    }]
                },
                {
                    title: 'Elections',
                    groups: [{
                        label: 'National Election Results',
                        items: [{
                                label: '2024 Presidental Race',
                                value: '2024_presidental',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race__2022)
                            },
                            {
                                label: '2020 Presidental Race',
                                value: '2020_presidental',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race__2018)
                            },
                            {
                                label: '2016 Presidental Race',
                                value: '2016_presidental',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race__2018)
                            }
                        ]
                    }]
                },
                {
                    title: 'Elections',
                    groups: [{
                        label: 'Voter Turnout',
                        items: [{
                                label: '2024 Elections',
                                value: '2024_turnout',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race__2022)
                            },
                            {
                                label: '2022 Elections',
                                value: '2022_turnout',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race__2018)
                            },
                            {
                                label: '2020 Elections',
                                value: '2020_turnout',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race_2018_2022_swing)
                            }
                        ]
                    }]
                },
                {
                    title: 'Elections',
                    groups: [{
                        label: 'Voter Registrations',
                        items: [{
                                label: '2024 Elections',
                                value: '2024_turnout',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race__2022)
                            },
                            {
                                label: '2022 Elections',
                                value: '2022_turnout',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race__2018)
                            },
                            {
                                label: '2020 Elections',
                                value: '2020_turnout',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race_2018_2022_swing)
                            }
                        ]
                    }]
                },
                {
                    title: 'Elections',
                    groups: [{
                        label: 'Election Swings',
                        items: [{
                                label: '2024 Elections',
                                value: '2024_election_swings',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race_2018_2022_swing)
                            },
                            {
                                label: '2022 Elections',
                                value: '2022_election_swings',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race_2018_2022_swing)
                            },
                            {
                                label: '2020 Elections',
                                value: '2020_election_swings',
                                checked: false,
                                handler: () => $this.rerender($this.ewing_mayor_race_2018_2022_swing)
                            }
                        ]
                    }]
                }
            ]
        });


        addChartScaleLegendToMap(this.map, Constants.marginScaleThresholds)
        this.render_layer(this.current_layer);
    }

    rerender(new_layer) {
        var $this = this
        this.map.eachLayer(function (layer) {
            $this.map.removeLayer(layer);
        });
        this.map.addLayer(this.osmLayer);
        this.render_layer(new_layer);

    }
    render_layer(new_layer) {
        this.current_layer = new_layer;
        new_layer.build(districts, this.map);
    }

    build_map() {
        return L.map(this.container, {
            center: Constants.ewing_center_coords,
            zoom: 13,
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    main_app = new MainApplication("app");
})