class HeaderText {
    constructor(map, options) {
        this.map = map;
        this.options = options;
        this.control = L.control({ position: 'topleft' });
        this.control.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const container = L.DomUtil.create('div', 'leaflet-top leaflet-right');
        container.innerHtml = this.generateHTML();
        console.log("Here", container);
        return container;
    }


    generateHTML() {
            return `
                <span>${this.options.html}</span> 
            `;
    }

    addToMap() {
        this.control.addTo(this.map);
    }
}

// Usage
