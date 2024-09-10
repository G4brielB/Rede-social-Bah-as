const user = localStorage.getItem('user')

const perfilName = document.querySelectorAll('#perfilName')
perfilName.forEach(e => {
    e.innerText = user
})

function criarPost() {
    const textoPostar = document.querySelector('#textoPostar')
    const sectionFeed = document.querySelector('#sectionFeed')

    const divPost = document.createElement('div')
    divPost.classList.add('post')
    const divAjustar = document.createElement('div')
    divAjustar.classList.add('ajustar')
    const divPostCabecalho = document.createElement('div')
    divPostCabecalho.classList.add('post-cabecalho')
    const divPostCorpo = document.createElement('div')
    divPostCorpo.classList.add('post-corpo')
    const pPost = document.createElement('p')
    const pName = document.createElement('p')
    
    const pUserName = document.createTextNode(`${user}`)
    const pText = document.createTextNode(`${textoPostar.value}`)
       
    const img = document.createElement('img')
    img.src = '../images/perfil-default.png'
    img.width = `${40}`

    
    divPost.appendChild(divAjustar)
    divAjustar.appendChild(divPostCabecalho)
    divPostCabecalho.appendChild(img)
    pName.appendChild(pUserName)
    divPostCabecalho.appendChild(pName)
    divAjustar.appendChild(divPostCorpo) 
    pPost.appendChild(pText)
    divPostCorpo.appendChild(pPost)
    

    sectionFeed.appendChild(divPost)


}

const btnPostar = document.querySelector('#btnPostar')
btnPostar.addEventListener('click', e => {
    console.log('bobao')
    criarPost()
})