const topBar = document.querySelector('.topbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
        topBar.classList.add('transparent')
    }
    else{
        topBar.classList.remove('transparent')
    }
})
 
// nueva variable para almacenar altura del topbar

let topbarHeight = topBar.offsetHeight; 

// añadimos un padding basado en la altura al main-content o el contenido principal

const mainContent = document.querySelector(".main-content")
mainContent.style.paddingTop = `${topbarHeight + 20}px`
