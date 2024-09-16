const user = localStorage.getItem('user')

const perfilName = document.querySelectorAll('#perfilName')
perfilName.forEach(e => {
    e.innerText = user
})


const btnTrocarPerfil = document.querySelector('#trocarPerfil')
btnTrocarPerfil.addEventListener('click' , e => {
    const uploadImage = document.querySelector('#uploadImage')
    const display = document.querySelector('#sectionFeed')

    uploadImage.style.display = 'flex'
    display.style.backgroundColor = 'rgb(0, 0, 0, 0.2)'
})

const btnFecharUpload = document.querySelector('#btnFechar')
btnFecharUpload.addEventListener('click' , e => {
    const uploadImage = document.querySelector('#uploadImage')
    const display = document.querySelector('#sectionFeed')

    uploadImage.style.display = 'none'
    display.style.backgroundColor = 'white'
})