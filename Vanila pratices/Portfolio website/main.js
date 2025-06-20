let navbar = document.getElementById('nav-box');
let inital_position = 0
window.addEventListener('scroll', function () {

    let elem = document.getElementById('nav-down');
    let currnet_position = this.scrollY
    if (inital_position > currnet_position && currnet_position > 65) {
        navbar.classList.add('nav-sticky');
    }
    else if(currnet_position<65){
        navbar.classList.add('nav-sticky');
    }
     else {
        navbar.classList.remove('nav-sticky');

    }
    inital_position = currnet_position;
})

function myFunction(x) {
    let elem = document.getElementById('nav-down');
    elem.classList.toggle('nav-down');
    x.classList.toggle("change");
}