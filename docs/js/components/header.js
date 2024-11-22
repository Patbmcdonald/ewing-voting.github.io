class HeaderText {
    constructor() {
        this.text = ""
    }

    setText(text) {
        this.text = text;
        this.render()
    }

    render() {
        var titleElement = document.getElementById('mapTitle');
        if (titleElement)
            titleElement.textContent = this.text;
    }
}