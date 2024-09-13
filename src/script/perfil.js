const user = localStorage.getItem('user')

const perfilName = document.querySelectorAll('#perfilName')
perfilName.forEach(e => {
    e.innerText = user
})

const btnHome = document.querySelector('#redirectHome')
btnHome.addEventListener('click', e => {

    window.location.href = `/src/pages/home.html`
})