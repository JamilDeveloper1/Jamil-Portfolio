

window.addEventListener("scroll",()=>{
    let navbar = document.querySelector(".main-nav");
    navbar.style.backgroundColor = "#fff";
    navbar.style.transition = "0.5s";
    let openBar = document.querySelector("#open");
    openBar.style.color = "#363636";
    let closeBar = document.querySelector("#close");
    closeBar.style.color = "#363636";
   if(window.scrollY == 0){
    navbar.style.backgroundColor = "transparent";}
})



let openBar = document.querySelector("#open");
openBar.addEventListener("click",()=>{
    let sideBar = document.querySelector(".side-bar");
    sideBar.style.transform = "translateX(0)";
    sideBar.style.transition = "0.5s";
    openBar.style.display = "none";
    let closeBar = document.querySelector("#close");
    closeBar.style.display = "flex";
})


let closeBar = document.querySelector("#close");


closeBar.addEventListener("click",()=>{
    let sideBar = document.querySelector(".side-bar");
    sideBar.style.transform = "translateX(-100%)";
    let openBar = document.querySelector("#open");
    openBar.style.display = "flex";
    closeBar.style.display = "none";
})

