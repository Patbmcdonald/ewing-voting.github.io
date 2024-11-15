class MainApplication {


    constructor(app_id) {
        this.container = document.getElementById(app_id);
        if (!this.container) throw new Error('There is no div with the id: "app"');
        this.map = this.build_map()
        this.osmLayer = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}');

        this.ewing_mayor_race__2022 = new MayorMarginRaceLayer(electionMayor2022Data);
        this.ewing_mayor_race__2018 = new MayorMarginRaceLayer(electionMayor2018Data);
        this.ewing_mayor_race_2018_2022_swing = new MayorSwingYoYLayer(electionMayor2022_2018_MarginSwingData);
        this.header_text = new HeaderText()
        this.current_layer = this.ewing_mayor_race__2022;
        this.init();
    }

    init() {

        this.map.addLayer(this.osmLayer);
        var $this = this;
        this.currentSideBar = addSidebarLegendToMap(this.map, {
            title: 'Elections',
            groups: [{
                label: 'Ewing Mayor Race',
                items: [{
                        label: '2022 Results',
                        value: '2022',
                        checked: true,
                        handler: () => $this.rerender($this.ewing_mayor_race__2022, 'Ewing Mayor Race - 2022 Results')
                    },
                    {
                        label: '2018 Results',
                        value: '2018',
                        checked: false,
                        handler: () => $this.rerender($this.ewing_mayor_race__2018, 'Ewing Mayor Race - 2018 Results')
                    },
                    {
                        label: '2018-2022 District Swing',
                        value: 'swing',
                        checked: false,
                        handler: () => $this.rerender($this.ewing_mayor_race_2018_2022_swing, 'Ewing Mayor Race - 2018-2022 District Swing')
                    }
                ]
            }]
        });

        new LegendControl(this.map, Constants.marginScaleThresholds).addToMap();
        this.header_text.setText('Ewing Mayor Race - 2022 Results');
        this.render_layer(this.current_layer);
    }

    rerender(new_layer, title) {
        var $this = this
        this.map.eachLayer(function (layer) {
            $this.map.removeLayer(layer);
        });
        this.map.addLayer(this.osmLayer);
        
        this.header_text.setText(title);
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


document.addEventListener("DOMContentLoaded", function() {
    main_app = new MainApplication("app");
})