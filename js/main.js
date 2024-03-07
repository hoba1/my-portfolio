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
    document.documentElement.style.setProperty("--text-color", "#f4f5fc");
    document.documentElement.style.setProperty("--bg-card", "#333");
    addandremoveclass(darkandlightbtn,"fa-sun","fa-moon");
    addandremoveclass(darkandlightbtn,"light-text","dark-text");
}
function lightmode(){
    document.documentElement.style.setProperty("--background-color", "#f4f5fc");
    document.documentElement.style.setProperty("--text-color", "#141210");
    document.documentElement.style.setProperty("--bg-card", "#fff");
    addandremoveclass(darkandlightbtn,"fa-moon","fa-sun");
    addandremoveclass(darkandlightbtn,"dark-text","light-text");
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

// send mail
let fullname = document.getElementById("full_name");
let emailid = document.getElementById("email_id");
let messagebox = document.getElementById("message");

function SendMail(){
    var params = {
        from_name : fullname.value,
        email_id : emailid.value,
        message : messagebox.value
    }
    emailjs.send("service_zkkmo0v", "template_osjcx3e", params).then(function (res) {
        alert("Your Message Sent Successfully");
    }).catch((err) => console.log(err))
}

let sendbtn = document.querySelector(".send");
sendbtn.addEventListener("click", () => {
    if(fullname.value != "" && emailid.value != "" && messagebox.value != ""){
        SendMail()
        fullname.value = ""
        emailid.value = ""
        messagebox.value = ""
    } else {
        alert("The Inputs Is Required")
    }
})
