import Page from '../modules/Page.js'
import LocalStorage from '../modules/LocalStorage.js'
import Elements from '../index.js'



export default class EventListeners extends Elements {
    constructor() {
        super()
    }

    inputImageEvent() {
        if (!localStorage.image) {
            return 0
        }
        this.inputImage.addEventListener('change', (event) => {
            const url = URL.createObjectURL(event.target.files[0])
            localStorage.setItem('image', url)
            new LocalStorage().checkLocalStorage(url)
        })
    }

    navEvent() {
        this.nav.forEach((element) => element.addEventListener('click', (event) => {
            new Page(this.nav).selectPage(event.target.className)
            new Page(this.nav).scrollToPage()
        }))
    }
}



const eventListener = new EventListeners()

eventListener.inputImageEvent()
eventListener.navEvent()