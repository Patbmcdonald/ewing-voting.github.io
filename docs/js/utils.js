let Utils = {
    createElectionResultTableHTML({
        title,
        columns,
        dynamicRows,
        dynamicFields,
        post_process
    }) {
        // Generate the table header dynamically
        const headerHTML = `
            <div class="table-header">
                ${columns.map(column => `
                    <div class="${column.className || ''}">${column.headerName}</div>
                `).join('')}
            </div>
        `;

        // Generate the candidate rows dynamically
        const rowsHTML = dynamicRows.map(field => {
            if (field.customRenderer && typeof field.customRenderer === 'function')
                return field.customRenderer(field);
            return '';
        }).join('');


        const dynamicFieldsHTML = dynamicFields.map(field => {
            if (field.customRenderer && typeof field.customRenderer === 'function')
                return field.customRenderer(field);

            // Default rendering
            return `
                <div class="${field.containerClass || 'dynamic-field'}">
                    ${field.label ? `${field.label}: ` : ''}
                    <span class="${field.valueClass || ''}">${field.value}</span>
                </div>
            `;
        }).join('');

        // Combine all parts into the full table HTML
        const resultsTableHTML = `
            <div class="results-table">
                <div class="results-header">${title}</div>
                ${headerHTML}
                ${rowsHTML}
                <div class="vote-info">
                    ${dynamicFieldsHTML}
                </div>
            </div>
        `;

        // Create a template and attach event listeners dynamically
        var template = document.createElement('div');
        template.innerHTML = resultsTableHTML;

        if(post_process)
            template = post_process(template)

        return template.innerHTML;
    },
    checkAgainstMultipleKeys: function (source, dataSet, keys) {
        const valuesToCompare = keys.map(key => dataSet[key]);
        const maxValue = Math.max(...valuesToCompare);

        return source === maxValue;
    },
    highlightFeature: function (layer) {
        layer.setStyle(Constants.highlightStyle);
    },
    getColor(value, gradient) {
        for (let i = 0; i < Constants.marginScaleThresholds.length; i++) {
            if (value >= Constants.marginScaleThresholds[i])
                return gradient[Constants.marginScaleThresholds[i]];
        }
        return gradient["-100"]; // Default if value doesn't match any range
    },
    calculateEndPoint(startPoint, distance, angle) {
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