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


const uploadPefil = document.querySelector('#uploadPerfil')
const fotoPerfil = document.querySelectorAll('#fotoPerfil')

const btnFotoPerfil = document.querySelector('#btnFotoPerfil')
/*btnFotoPerfil.addEventListener('click', e => {
    const file = uploadPefil.files;

    if (file) {
        const reader = new FileReader();

        reader.onload = e => {
            fotoPerfil.src = e.target.result
        }
    }


})*/
