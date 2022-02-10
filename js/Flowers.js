window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("abajo", window.scrollY > 0)
})