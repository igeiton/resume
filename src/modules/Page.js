export default class Page {
    constructor(nav) {
        this.nav = nav
        this.pages = document.querySelectorAll('main #page')
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