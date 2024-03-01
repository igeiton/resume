import elements from '../index.js'

export default class LocalStorage {
    constructor() {
        this.mainImage = elements.mainImage
        this.backgroundImage = elements.backgroundImage
    }

    checkLocalStorage(url) {
        try {
            this.mainImage.src = url
            this.backgroundImage.style.backgroundImage = `url(${url})`
        } catch(e) {
            console.error(e);
        }
    }
}