export default class Project {

    constructor(observer) {
        this.observer = observer
        this.init()
    }

    init() {
        const targets = document.querySelectorAll('.q-project__anim h4, h3, p');


        targets.forEach(li => {
            this.observer.observe(li)
        })
    }

}