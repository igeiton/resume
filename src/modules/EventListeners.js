import Page from '../modules/Page.js'
import LocalStorage from '../modules/LocalStorage.js'



export default class EventListeners {
    constructor(elements) {
        this.inputImage = elements.inputImage
        this.nav = elements.nav
    }

    inputImageEvent() {
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