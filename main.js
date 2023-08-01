console.log("hello world!");

//Dom selection 
const links = document.querySelectorAll("a")
const wheelPictureDom = document.getElementById("wheelPicture")
const projectsSectionDom = document.getElementById("projets")
const sections = document.querySelectorAll("section")
const projets = document.querySelectorAll(".projet")

console.log(projets)

projets.forEach(p => p.addEventListener("mouseover", () => projetDetails(p)));
projets.forEach(p => p.addEventListener("mouseout", () => projetDetails()));

const sectionsPos = []



sections.forEach(section => sectionsPos.push(section.offsetTop))
window.scroll({
    top:sectionsPos[1],
    behavior:"smooth"
})


window.addEventListener("scroll", () => scrolling())

function scrolling(){
    sectionsPos.map((sectionPos, i) => {
        if (scrollY + 400 > sectionPos){
            currentSection(links[i])
        }
    })
}

links.forEach(l => l.addEventListener('click', ()=> scrolling() ))

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
    "./images/github-mark-white.png",
    "./images/linkedin-xxl.png",
    "./images/pacman.png"    
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


