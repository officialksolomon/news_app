// elements
let loadingIndicator = document.querySelector('.loading-indicator')

// animations
$('.current-tab-name').animate({ fontSize: '24' });
$('div').animate({ opacity: 1 }, '5000');

// loading  indicator
function handleLoadingIndicator() {
    setTimeout(() => {
        loadingIndicator.classList.replace('d-block', 'd-none')
        document.body.classList.remove('opacity')
    }, 2000)
}

    handleLoadingIndicator();