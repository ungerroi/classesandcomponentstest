const NavBar = class {
    constructor (items) {
        this.items = items;
    }

    render () {
        const div = document.createElement('DIV')
        this.items.map( item => {
            const a = new Anchor(item)
            div.append(a.render())
        })

        return div
    }
}
