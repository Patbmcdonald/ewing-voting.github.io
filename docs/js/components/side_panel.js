L.Control.SidebarLegend = L.Control.extend({
    initialize: function (options) {
        console.log("options", this.options);
        L.setOptions(this, options);
    },

    onAdd: function (map) {
        const container = L.DomUtil.create('div', 'leaflet-top leaflet-right');
        console.log("options", this.options["groupings"]);
        var html = '';

        this.options["groupings"].forEach(group => {
            html += this._createLegendHTML(group);
        });

        container.innerHTML = html;
        this._addClickEvents(container);

        L.DomEvent.disableClickPropagation(container);
        return container;
    },

    //  <label class="leaflet-panel-layers-title"><span>${options.title}</span></label>
    //             
    _createLegendHTML: function (option) {
        final_html = ``
        let html = `
            <div class="leaflet-panel-layers compact expanded leaflet-control leaflet-control-layers-expanded" style="width:175px" aria-haspopup="true">

            <form class="leaflet-panel-layers-list" style="max-height: 374px;">
                <div class="leaflet-panel-layers-base ">`;

        option.groups.forEach(group => {
            html += `
                <div class="leaflet-panel-layers-group">
                    <label class="leaflet-panel-layers-grouplabel">
                    <span class="leaflet-panel-layers-title">${group.label}</span>
                    </label>
                `;

            html += `<div class="leaflet-panel-layers-border border_bottom"> </div>`;
            console.log("group", group["items"]);
            group.items.forEach(item => {
                html += `
                    <div class="leaflet-panel-layers-item ${item.checked ? 'active' : ''}">
                    <label class="leaflet-panel-layers-title">
                        <input type="radio" class="leaflet-panel-layers-selector" name="${group.label.toLowerCase().replace(/\s+/g, '_')}[]" id="${item.value}" value="${item.value}" ${item.checked ? 'checked="true"' : ''}>
                        <span>${item.label}</span>
                    </label>
                    </div>
                `;
            });

            html += '</div>';
        });

        html += `
                    </div> <!-- Close leaflet-panel-layers-base -->
                </form>
                </div>
            `;

        final_html += html;
        return final_html;
    },

    _addClickEvents: function (container) {
        const radioButtons = container.querySelectorAll('.leaflet-panel-layers-selector');

        radioButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const selectedValue = event.target.value;
                this._onItemClick(selectedValue);
            });
        });
    },

    _onItemClick: function (value) {
        const item = this._findItemByValue(value);

        if (item && typeof item.handler === 'function') {
            item.handler();
        } else {
            console.log(`No handler defined for the selected option: ${value}`);
        }
    },

    // Find an item by its value in the options
    _findItemByValue: function (value) {
        for (let this_grouping of this.options.groupings) {
            console.log("this.options.grouping", this_grouping);
            for (let group of this_grouping.groups) {
                for (let item of group.items) {
                    if (item.value === value) {
                        return item;
                    }
                }
            }
        }
        return null;
    }
});

function addSidebarLegendToMap(map, options = {}) {
    const sidebarLegend = new L.Control.SidebarLegend(options);
    map.addControl(sidebarLegend);
    return sidebarLegend;
}