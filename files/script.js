
window.onscroll = function() {
    var header = document.querySelector("header");
    if (window.pageYOffset > 30) {
        header.style.backgroundColor = "#202d39"; 
    } else {                            
        header.style.backgroundColor = "#2C3E50"; 
    }
    if (window.pageYOffset > 1) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

