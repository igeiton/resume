import Elements from "../index.js"



export default class Page extends Elements {
    constructor() {
        super()
    }

    selectPage(page) {
        for (let i = 0; i < this.nav.length; i ++) {
            if (this.nav[i].className === page) {
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



localStorage.page
    ? new Page().selectPage(localStorage.page)
    : new Page().selectPage('contacts')