export default class Skills {

    constructor(observer) {
        this.observer = observer
        this.init()
    }

    init() {
        const targets = document.querySelectorAll('.q-skills__logo');


        targets.forEach(li => {
            this.observer.observe(li)
        })
    }

}