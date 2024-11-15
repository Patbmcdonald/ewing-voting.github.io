class ElectionData {
    constructor(pKey, dataSet, candidateOptions) {
        this.pKey = pKey;
        this.dataSet = dataSet;
        this.candidateOptions = candidateOptions;
    }

    getCandidates() {
        return this.candidateOptions
    }

    getGroupedByPKey() {
        return this.dataSet.reduce((acc, curr) => {
            const county = curr[this.pKey];
            if (!acc[county]) acc[county] = [];
            acc[county].push(curr);
            return acc;
        }, {});
    }
}
