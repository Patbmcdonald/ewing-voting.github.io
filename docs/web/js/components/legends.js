class LegendControl {
    constructor(map, thresholds) {
        this.map = map;
        this.thresholds = thresholds;
        this.control = L.control({ position: 'bottomright' });
        this.control.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = this.generateLegendHTML();
        return div;
    }

    generateLegendHTML() {
        return this.thresholds.map((threshold, index) => {
            const color = Utils.getColor(threshold + 1, Constants.marginScaleGradient);
            const nextThreshold = this.thresholds[index + 1];
            return `
                <i style="background:${color}"></i> 
                ${threshold}${nextThreshold ? `<br>` : ''}
            `;
        }).join('');
    }

    addToMap() {
        this.control.addTo(this.map);
    }
}

// Usage
