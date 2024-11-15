class HeaderText {
    constructor() {
        this.text = ""
    }

    setText(text){
        this.text = text;
        this.render()
    }

    render() {
        var titleElement = document.getElementById('mapTitle');
        console.log("titleElement", titleElement)
        if (titleElement) 
            titleElement.textContent = this.text;
    }
}

// Usage
