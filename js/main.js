let darkandlightbtn = document.querySelector(".collapse i");
darkandlightbtn.addEventListener("click", () => {
    if(darkandlightbtn.classList.contains("fa-moon")){
        darkmode()
        localStorage.setItem("mode","dark")
    } else{
        lightmode()
        localStorage.setItem("mode","light")
    }
});
if(localStorage.getItem("mode") === "dark"){
    darkmode()
} else{
    lightmode()
}
function addclass(e, c, cr){
    e.forEach((ele) => {
        ele.classList.remove(cr)
        ele.classList.add(c);
    })
}
function addandremoveclass(e,ca,cr){
    e.classList.remove(cr)
    e.classList.add(ca)
}
function darkmode(){
    document.documentElement.style.setProperty("--background-color", "#141210");
    addandremoveclass(darkandlightbtn,"fa-sun","fa-moon");
    addandremoveclass(darkandlightbtn,"light-text","dark-text");
    addclass(document.querySelectorAll("a"),"light-text","dark-text");
    addclass(document.querySelectorAll("p"),"light-text","dark-text");
    addclass(document.querySelectorAll("i"),"light-text","dark-text");
    addclass(document.querySelectorAll("h5"),"light-text","dark-text");
    addclass(document.querySelectorAll(".card"),"bg-card-dark","bg-card-light");
}
function lightmode(){
    document.documentElement.style.setProperty("--background-color", "#f4f5fc");
    addandremoveclass(darkandlightbtn,"fa-moon","fa-sun");
    addandremoveclass(darkandlightbtn,"dark-text","light-text");
    addclass(document.querySelectorAll("a"),"dark-text","light-text");
    addclass(document.querySelectorAll("p"),"dark-text","light-text");
    addclass(document.querySelectorAll("i"),"dark-text","light-text");
    addclass(document.querySelectorAll("h5"),"dark-text","light-text");
    addclass(document.querySelectorAll(".card"),"bg-card-light","bg-card-dark");
}
var typed = new Typed('.auto-typing', {
    strings: ["Mohab Khaled", "Front End Developer"],
    typeSpeed: 80,
    backSpeed: 100,
    loop: true,
    showCursor: false
});
let arraysections = ["skills","projects","contact"];
let ullinks = document.querySelectorAll(".nav-item a");
window.onscroll = function(){
    if(window.scrollY <= 448){
        ullinks.forEach((ele)=>{
            ele.classList.remove("active");
        });
        document.querySelector(".Home-section-link").classList.add("active")
    } else{
        for(let i = 0; i < arraysections.length; i++){
            if(window.scrollY >= (document.querySelector(`.${arraysections[i]}`).offsetTop - 200)){
                ullinks.forEach((ele) => {
                    ele.classList.remove("active");
                    if(ele.classList.contains(`${arraysections[i]}-section-link`)){
                        ele.classList.add("active")
                    }
                });
            }
        }
    }
}