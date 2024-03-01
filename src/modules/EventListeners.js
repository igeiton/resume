import elements from '../index.js'
import Page from '../modules/Page.js'

export default class EventListeners {
    constructor() {
        this.inputImage = elements.inputImage
        this.nav = elements.nav
    }

    InputImage() {
        this.inputImage.addEventListener('change', (event) => {
            const url = URL.createObjectURL(event.target.files[0])
            localStorage.setItem('image', url)
            new LocalStorage().checkLocalStorage(url)
        })
    }

    Nav() {
        this.nav.forEach((element) => element.addEventListener('click', (event) => {
            Page(this.nav).selectPage(event.target.className)
            Page(this.nav).scrollToPage()
        }))
    }
}