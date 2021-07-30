const Anchor = class {
    constructor(text) {
        this.text = text
    }

    render() {
        const a = document.createElement('A')
        a.setAttribute('href', '#')
        a.innerText = this.text
        a.style.marginRight = '50px'
        return a
    }
}
