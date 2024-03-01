import './style.css';

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



const page = new Page(elements.nav)
const lclStrg = new LocalStorage()
const eventListener = new EventListeners(elements)



if (localStorage.image) {
    lclStrg.checkLocalStorage(localStorage.getItem('image'))
}

localStorage.page
    ? page.selectPage(localStorage.page)
    : page.selectPage('contacts')



eventListener.inputImageEvent()
eventListener.navEvent()