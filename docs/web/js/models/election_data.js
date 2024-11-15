class ElectionData {
    constructor(pKey, dataSet, candidateOptions) {
        this.pKey = pKey;
        this.dataSet = dataSet;
        this.candidateOptions = candidateOptions;
    }

    // Method to dynamically map candidates to the data, handling multiple candidates per party
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
