// html elements
const element = document.querySelector('.mobile-nav');
const tabs = document.querySelectorAll('.tab');
const mobileHeaderText = document.querySelector('.current-tab-name');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
const news = document.querySelectorAll('.news');
// hide mobile nav on scroll
function hideElementOnScroll(element) {
    document.body.addEventListener('scroll', () => {
        element.classList.replace('fixed-bottom', 'd-none');
        setTimeout(() => {
            element.classList.replace('d-none','fixed-bottom');

        }, 1000);
    });

}
hideElementOnScroll(element);

// handles mobile links ui feedback logic
function activateMobileLinks(element) {
    mobileLinks.forEach(link => link.classList.replace('text-white', 'text-white-50'));
    element.classList.replace('text-white-50', 'text-white');
   
}
// changes header text to current tab
function changeHeaderText(clickElement, textElement) {
    let searchValue = clickElement.dataset.tab[0];
    let replaceValue = clickElement.dataset.tab[0].toUpperCase()
    let text = clickElement.dataset.tab.replace(searchValue, replaceValue);
    textElement.innerHTML  = text;
}

// activates tab
function activateTab(tabLink) {
// first: close opened tab
tabs.forEach(tab => tab.classList.replace('d-block', 'd-none'))
let currentTabId= tabLink.dataset.tab
document.getElementById(currentTabId).classList.replace('d-none', 'd-block')

}

// Events:

// mobile links 
mobileLinks.forEach(element => {
    element.addEventListener('click', (event)=> {
        activateMobileLinks(element);
        changeHeaderText(event.target, mobileHeaderText)
        activateTab(event.target)
    })
})
// news
news.forEach(element => {
    element.addEventListener('click', (event) => {
        event.stopPropagation()
        changeHeaderText(event.target, mobileHeaderText);
        activateTab(event.target);
    });
})