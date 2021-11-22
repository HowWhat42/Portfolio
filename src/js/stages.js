export default class Stages {

    constructor(observer) {
        this.observer = observer
        this.init()
    }

    init() {
        const targets = document.querySelectorAll('.q-stages__logo, .q-stages__anim h4, p');


        targets.forEach(li => {
            this.observer.observe(li)
        })
    }

}