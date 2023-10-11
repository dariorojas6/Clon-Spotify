const topBar = document.querySelector('.topbar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topBar.classList.add('transparent')
    }
    else {
        topBar.classList.remove('transparent')
    }
})

// nueva variable para almacenar altura del topbar

let topbarHeight = topBar.offsetHeight;

// añadimos un padding basado en la altura al main-content o el contenido principal

const mainContent = document.querySelector(".main-content")
mainContent.style.paddingTop = `${topbarHeight + 20}px`

// BOTON PLAY

const containerConcentracion = document.querySelectorAll(".card-concentracion")
const containerSpotifyPlaylists = document.querySelectorAll(".card-spotify-playlists")

// Funciion que se va a repetir

const createButton = card => {
    // crear el boton
    const button = document.createElement("button")
    button.innerHTML = '<i class="fa-solid fa-play"></i>'

    // Agregar el boton al elemento hijo

    card.appendChild(button)

    // Ocultar el boton al inicio

    button.style.display = "none"
    button.classList.add ("btn-play")

    // Agreamos un elemento de hover a este elemento
    // Se necesita cuando el mouse entra y sale

    card.addEventListener("mouseover", () =>{
        button.style.display = "block"

    })

    card.addEventListener("mouseout", () =>{
        button.style.display = "none"
        
    })

}

// Usamos la funcion en las dos filas de contenedores
containerConcentracion.forEach(card =>{
    createButton(card)
})

containerSpotifyPlaylists.forEach(card =>{
    createButton(card)
})
