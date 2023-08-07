console.log("hello world!");

//Dom selection 
const links = document.querySelectorAll("li")
const wheelPictureDom = document.getElementById("wheelPicture")
const projectsSectionDom = document.getElementById("projets")
const sections = document.querySelectorAll("section")
const projets = document.querySelectorAll(".projet")
const mobileMenuDom = document.getElementById("mobile-menu")
const headerNavDom = document.getElementById("header-nav")
const projectsTypeDom = document.querySelectorAll(".projects-type")
const webSectionDom = document.getElementById("web")
const gamingSectionDom = document.getElementById("gaming")
const mainDom = document.getElementsByTagName("main")[0]


projectsDisplay("webDisplay")
links[0].classList.add("active");

mobileMenuDom.addEventListener("click", () => mobileMenuDisplay());

projets.forEach(p => p.addEventListener("mouseover", () => projetDetails(p)));
projets.forEach(p => p.addEventListener("mouseout", () => projetDetails()));
projectsTypeDom.forEach(p => p.addEventListener("click", ()=> projectsDisplay(p.id)));

const sectionsPos = []

let navMenuDrop = false

mobileMenuDom.innerHTML = '<i class="fa-solid fa-bars"></i>'

function projectsDisplay(p){
    if (p == "webDisplay"){
        console.log("display web")
        webSectionDom.classList.remove("not-displayed")
        gamingSectionDom.classList.add("not-displayed")
    }

    if (p == "gamingDisplay"){
        console.log("display gaming")
        webSectionDom.classList.add("not-displayed")
        gamingSectionDom.classList.remove("not-displayed")
    }
}

function mobileMenuDisplay() {
    if (navMenuDrop) {
        navMenuDrop = false
        mobileMenuDom.innerHTML = '<i class="fa-solid fa-bars"></i>'
        headerNavDom.classList.remove("header-nav-dropdown")
        mainDom.style.filter = "blur(0px)";

    }else {
        navMenuDrop = true
        mobileMenuDom.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        headerNavDom.classList.add("header-nav-dropdown")
        mainDom.style.filter = "blur(5px)";

    }
}

sections.forEach(section => sectionsPos.push(section.offsetTop))

/*window.scroll({
    top:sectionsPos[1],
    behavior:"smooth"
})*/


window.addEventListener("scroll", () => scrolling())

function scrolling(){
    sectionsPos.map((sectionPos, i) => {
        if (scrollY +400 > sectionPos){
            currentSection(links[i])
        }
    })
}

links.forEach(l => l.addEventListener('click', ()=> {
    scrolling()
    if (window.innerWidth < 768){
        mobileMenuDisplay()
    }    
}))

function currentSection(l) {
    links.forEach(l => l.classList.remove('active'));
    l.classList.add("active")
}

function projetDetails(p){
    if (p){
        projets.forEach(p => p.classList.remove('details'))
        p.classList.add('details')
    }else{
        projets.forEach(p => p.classList.remove('details'))    
    }
    
}



const heroPics = [
    "./images/booki.png",
    "./images/gravitus.png",
    "./images/hrnet.png",
    "./images/kasa.png",
    "./images/learnathome.png",
    "./images/ohmyfoodmobile.png",
    "./images/pacman.png",
    "./images/spinUp.png"    
]


let wheelPictureOn = true
let heroPicsIndex = 0
wheelPictureDom.src = heroPics[heroPicsIndex]


wheelPictureDom.addEventListener("click", () => {wheelPictureOn == true? 
                                                                wheelPictureOn = false: 
                                                                wheelPictureOn = true});

window.setInterval(newHeroPics, 2000)

function newHeroPics(){
    if (wheelPictureOn == true) {
        heroPicsIndex == heroPics.length - 1 ? heroPicsIndex = 0 : heroPicsIndex += 1;
        wheelPictureDom.src = heroPics[heroPicsIndex]
    }else{
        wheelPictureDom.src = heroPics[heroPicsIndex]
    }
    
}


