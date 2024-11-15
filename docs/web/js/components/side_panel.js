// Define a custom Leaflet control for the sidebar and legend with dynamic click handling from options
L.Control.SidebarLegend = L.Control.extend({
    options: {
        position: 'topright', // Position the control in the top-right corner
        title: 'Election Results', // Title of the sidebar/legend
        groups: [{
            label: 'Mayor Race',
            items: [{
                    label: '2022',
                    value: '2022',
                    checked: true,
                    handler: () => console.log("Displaying 2022 mayor race results")
                },
                {
                    label: '2018',
                    value: '2018',
                    checked: false,
                    handler: () => console.log("Displaying 2018 mayor race results")
                }
            ]
        }]
    },

    initialize: function (options) {
        L.setOptions(this, options);
    },

    onAdd: function (map) {
        const container = L.DomUtil.create('div', 'leaflet-top leaflet-right');
        container.innerHTML = this._createLegendHTML(this.options);

        // Add click event listener to handle dynamic item clicks
        this._addClickEvents(container);

        // Prevent click propagation to map
        L.DomEvent.disableClickPropagation(container);
        return container;
    },

    _createLegendHTML: function (options) {
        let html = `
        <div class="leaflet-panel-layers compact expanded leaflet-control leaflet-control-layers-expanded" style="width:175px" aria-haspopup="true">
          <label class="leaflet-panel-layers-title"><span>${options.title}</span></label>
          <div class="leaflet-panel-layers-separator"></div>
          <form class="leaflet-panel-layers-list" style="max-height: 374px;">
            <div class="leaflet-panel-layers-base">
      `;

        options.groups.forEach(group => {
            html += `
          <div class="leaflet-panel-layers-group">
            <label class="leaflet-panel-layers-grouplabel">
              <span class="leaflet-panel-layers-title">${group.label}</span>
            </label>
        `;

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

        return html;
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
        for (let group of this.options.groups) {
            for (let item of group.items) {
                if (item.value === value) {
                    return item;
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

