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
    p.innerHTML = "Te būs laukums ar " + n * n + " lauciņiem";
    document.getElementById("dinamisks").appendChild(p);
    
    let skaitlis = 1;
    let tabula = document.createElement("TABLE");
    document.getElementById("dinamisks").appendChild(tabula);
    
    for(let i = 0; i < n; i++){
        let rinda = document.createElement("TR");
        tabula.appendChild(rinda);
        for(let j = 0; j < n; j++){
            let suna = document.createElement("TD");
            let text = document.createTextNode(skaitlis);
            suna.appendChild(text);
            rinda.appendChild(suna);
            skaitlis++;
        }
    }
    
    
}

