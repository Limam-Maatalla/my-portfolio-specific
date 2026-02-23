let btn0 = document.getElementById('menu-btn')
let navbar0 = document.querySelector('nav')


btn0.addEventListener("click", function(){
    btn0.classList.toggle('fa-bars')
    btn0.classList.toggle('fa-times')
    navbar0.classList.toggle('active')
})
    
    
