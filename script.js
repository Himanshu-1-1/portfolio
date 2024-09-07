function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

//darkmode
const btn=document.getElementById("modetoggle");
const btn2=document.getElementById("modetoggle2");
const themeIcon = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");


if (currentTheme==="dark"){
    setDarkMode();
}

btn.addEventListener("click" , function (){
    setTheme();
});
btn2.addEventListener("click" , function (){
    setTheme();
});

function setTheme(){
    let currentTheme=document.body.getAttribute("theme");
    if(currentTheme==="dark"){
        setlightMode();
    }else{
        setDarkMode();
    }
}

function setDarkMode(){
    document.body.setAttribute("theme","dark");
    localStorage.setItem("theme","dark");

    themeIcon.forEach((icon)=>{
        icon.src = icon.getAttribute("src-dark")
    })

}


function setlightMode(){
    document.body.removeAttribute("theme");
    localStorage.setItem("theme","light");

    themeIcon.forEach((icon)=>{
        icon.src = icon.getAttribute("src-light")
    })

}