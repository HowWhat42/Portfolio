export default class Options {

    constructor(observer) {
        this.observer = observer
        this.init()
    }

    init() {
        const targets = document.querySelectorAll('.q-options__anim h3, p');


        targets.forEach(li => {
            this.observer.observe(li)
        })
    }

}