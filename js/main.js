// function dropdown(index){
//     var dropdowns=document.getElementsByClassName("product-list");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//     var s=index+"";
//     document.getElementById(s).classList.toggle("show");
//   }
//   window.onclick = function(event) {
//     if (!event.target.matches('.nav-button')) {
//       var dropdowns = document.getElementsByClassName("product-list");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
let togglerParent = document.querySelector('.site-header__bottom__container')

function createToggler() {
    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('menu');

    togglerParent.appendChild(menuBtn);
}
createToggler()
let togglerBtn = document.querySelector('.menu');
togglerBtn.addEventListener('click', () =>{
    document.querySelector('.header__bottom__list').classList.toggle('header__bottom__list--open');
})