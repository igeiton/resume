import '@/style.css';

export default class Elements {
    constructor() {
        this.mainImage = document.querySelector('header img')
        this.inputImage = document.querySelector('header input')
        this.backgroundImage = document.querySelector('header .bgc_image')
        this.nav = document.querySelectorAll('nav div')
        this.pages = document.querySelectorAll('main #page')
    }
}