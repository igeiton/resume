import elements from '../index.js'

export default class Page {

    constructor() {
        this.pages = document.querySelectorAll('main #page')
    }

    selectPage(page) {
        for (let i = 0; i < elements.nav.length; i++) {
            if (elements.nav[i].className === page) {
                this.pages[i].style.display = 'flex'
                localStorage.setItem('page', page)
            }
            else {
                this.pages[i].style.display = 'none'
            }
        }
    }

    scrollToPage() {
        document.querySelector(`main`).scrollIntoView({block: 'end', behavior: 'smooth' })
    }

}