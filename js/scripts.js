window.onscroll = function() {stickyNavBar();};

function stickyNavBar() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function laukums(n){
    let p = document.createElement("P");
    p.innerHTML = "Te būs laukums ar " + n + " lauciņiem";
    document.getElementById("dinamisks").appendChild(p);
}

