import './style.css';

import Test from './modules/test'
import Page from './modules/Page';
import LocalStorage from './modules/LocalStorage';
import EventListeners from './modules/EventListeners';

const elements = {
    mainImage: document.querySelector('header img'),
    inputImage: document.querySelector('header input'),
    backgroundImage: document.querySelector('header .bgc_image'),
    nav: document.querySelectorAll('nav div'),
}
export default elements

if (localStorage.page) {
    new Page(elements.nav).selectPage(localStorage.page)
}
if (localStorage.image) {
    new LocalStorage().checkLocalStorage(localStorage.getItem('image'))
    console.log(localStorage.getItem('image'));
}


elements.inputImage.addEventListener('change', (event) => {
    const url = URL.createObjectURL(event.target.files[0])
    localStorage.setItem('image', url)
    new LocalStorage().checkLocalStorage(url)
})
elements.nav.forEach((element) => element.addEventListener('click', (event) => {
    new Page(elements.nav).selectPage(event.target.className)
    new Page(elements.nav).scrollToPage()
}))