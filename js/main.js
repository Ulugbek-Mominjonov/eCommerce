let dropdownBtn = document.querySelectorAll('.dropdown__button');
let dropdownList = document.querySelectorAll('.dropdown__list');
dropdownBtn.forEach((item, i) =>{
    item.addEventListener('click', () =>{
        if(dropdownList){
            dropdownList.forEach(element =>{
                element.classList.remove('dropdown__list--open');
            })
            dropdownList[i].classList.toggle('dropdown__list--open');
        }
    })
})

window.onclick = function(event) {
    if (!event.target.matches('.dropdown__button')) {
        dropdownList.forEach(item =>{
            if(item.classList.contains('dropdown__list--open')){
                item.classList.remove('dropdown__list--open')
            }
        })
    }
  }

let togglerParent = document.querySelector('.site-header__bottom__container');

function createToggler() {
    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('nav-menu');

    togglerParent.appendChild(menuBtn);
}
createToggler()
let togglerBtn = document.querySelector('.nav-menu');
togglerBtn.addEventListener('click', () =>{
    document.querySelector('.header__bottom__list').classList.toggle('header__bottom__list--open');
})

// carousel
const config = {
    type: 'carousel',
    perView: 4,
    gap: 32,
    focusAt: '0',   
    breakpoints: {
        1200: {
        perView: 3
        },
        800: {
        perView: 2
        }
    }
}
new Glide('.glide', config).mount()