class MayorMarginRaceLayer {
    constructor(data, layer_options) {
        this.layer_options = {
            pk: "ELECD_CODE",
            registered_voters: "registered_voters",
            casted_ballots: "casted_ballots",
            marginValue: "margin_of_win",
            year: "2018",
            turnout_percentage: "turnout_percentage",
        }

        if (layer_options)
            this.layer_options = {
                ...this.layer_options,
                ...layer_options
            }

        this.dataSet = data
        this.currentLayer = new ElectionMarginLayer(this.dataSet, this.layer_options)
    }

    layer() {
        return this.currentLayer
    }

    build(geojson, map) {
        this.currentLayer.addLayer(geojson, map);
    }
}


class MayorSwingYoYLayer {
    constructor(data, layer_options) {
        this.layer_options = {
            pk: "ELECD_CODE",
            swingField: ["2018_margin_of_win","2022_margin_of_win"],
        }

        if (layer_options)
            this.layer_options = {
                ...this.layer_options,
                ...layer_options
            }

        this.dataSet = data
        this.currentLayer = new SwingArrowLayer(this.dataSet, this.layer_options);
    }

    layer() {
        return this.currentLayer
    }

    build(geojson, map) {
        this.currentLayer.addLayer(geojson, map);
    }
}
