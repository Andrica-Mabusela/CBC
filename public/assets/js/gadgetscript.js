const heartIcons = document.querySelectorAll('.card .fa-heart');
const shopIcons = document.querySelectorAll('.card .fa-cart-arrow-down');

Array.from(heartIcons).forEach((item) =>{
    item.addEventListener('mouseover', (e) => {
        e.target.style.color = 'orangered';
        e.target.className = 'fa fa-heart animated wobble';
       
    });
    item.addEventListener('mouseout', (e) => {
        e.target.style.color = 'black';
        e.target.className = 'fa fa-heart';
    });
});


Array.from(shopIcons).forEach((item) =>{
    item.addEventListener('mouseover', (e) => {
        e.target.style.color = 'orangered';
        e.target.className = 'fa fa-cart-arrow-down animated wobble';
       
    });
    item.addEventListener('mouseout', (e) => {
        e.target.style.color = 'black';
        e.target.className = 'fa fa-cart-arrow-down';
    });
});


//home page spinner
const spinnerWrapper = document.querySelector('#loader-wrapper');
const spinner = document.querySelector('loader');

function removeSpinner(){
    spinnerWrapper.style.display = 'none';
    spinner.style.display = 'none';
}

