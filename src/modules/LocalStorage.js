import Elements from '../index.js'



export default class LocalStorage extends Elements {
    constructor() {
        super()
    }

    checkLocalStorage(url) {
        try {
            this.mainImage.src = url
            this.backgroundImage.style.backgroundImage = `url(${url})`
        } catch(e) {
            console.error(e);
        }
    }
};



if (localStorage.image) {
    new LocalStorage().checkLocalStorage(localStorage.getItem('image'))
}