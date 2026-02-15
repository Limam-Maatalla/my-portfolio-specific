let btn = document.querySelector('#menu-btn')
let navbar0 = document.querySelector('header nav')


btn.onclick = () =>{
    btn.classList.toggle('fa-times')
    navbar0.classList.toggle('active')
}