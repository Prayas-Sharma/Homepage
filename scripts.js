/* Place your JavaScript in this file */

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.queryselector(tab.dataset.tabtarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
            tab.classList.remove('active')
            })
        tab.classList.add('active')
        target.classlist.add('active')
    })
})