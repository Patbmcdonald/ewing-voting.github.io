
let Utils = {
    checkAgainstMultipleKeys: function(source, dataSet, keys) {
        const valuesToCompare = keys.map(key => dataSet[key]);
        const maxValue = Math.max(...valuesToCompare);
    
        return source === maxValue;
    },
    highlightFeature: function(layer) {
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