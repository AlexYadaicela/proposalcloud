const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]



function myFunction(x){
    x.classList.toggle("change");
    navbarLinks.classList.toggle('active');
}

function openTab(tabName){
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}