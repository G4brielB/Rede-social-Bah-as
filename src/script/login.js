// esse array é só pra poder funcionar no github mesmo

const usuarios = [{
    email: 'admin',
    senha: 'admin'
}]
const userNames = []
const campoDefault = ''


console.log(usuarios.map(e => {return e}))



const btnCriarConta = document.querySelector('#criarConta')
btnCriarConta.addEventListener('click', e => {
    const displayNovoUsuario = document.querySelector('#displayNovoUsuario')
    displayNovoUsuario.style.display = 'block'
})

const btnRecuperarSenha = document.querySelector('#esqueceuSenha')
btnRecuperarSenha.addEventListener('click', e => {
    const campoRecuperar = document.querySelector('#recuperarSenha')
    
    const mostrar = campoRecuperar.style.display
    if(mostrar == 'block') {
        campoRecuperar.style.display = 'none'
        btnRecuperarSenha.innerHTML = '<a class="esqueceu-senha">esqueceu sua senha?</a>'
    }else{
        campoRecuperar.style.display = 'block'
        btnRecuperarSenha.innerHTML = '<a class="esqueceu-senha">Recolher campo</a>'
    }
})

const btnCriar = document.querySelector('#novoUser')
btnCriar.addEventListener('click', e => {
    const campoRecuperar = document.querySelector('#displayNovoUsuario')
    const criarEmail = document.querySelector('#criarEmail')
    const criarSenha = document.querySelector('#criarSenha')
    const mostrarErro = document.querySelector('#mostrarErro')

    

    if(criarEmail.value.indexOf('@') != -1){
        usuarios.push({
            email: criarEmail.value,
            senha: criarSenha.value
        })
        alert('Usuario criado! Agora você pode entrar')
        campoRecuperar.style.display = 'none'
    }else if (criarEmail.value == ''){
        mostrarErro.innerText = 'Campo de email vazio'
    }else if(criarSenha.value == ''){
        mostrarErro.innerText = 'Campo de senha vazio'
    }else if(criarSenha.value.length < 8){
        mostrarErro.innerText = 'Insira uma senha com no minimo 8 digitos'
    }else{
        mostrarErro.innerText = 'Insira um e-mail valido'
    }

    criarEmail.value = campoDefault
    criarSenha.value = campoDefault


})


const btnEntrar = document.querySelector('#entrar')
btnEntrar.addEventListener('click', e => {
    const usuario = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    }

    const displayEntrar = document.querySelector('#displayEntrar')

    const displayUserName = document.querySelector('#displayUserName')
    const btnRedirecionar = document.querySelector('#redirecionar')
    const userName = document.querySelector('#userName')
    


    let cont = 0
    while(true){
        if(usuarios[cont] != undefined){
            if(usuario.email == usuarios[cont].email){
                if(usuario.senha == usuarios[cont].senha){
                    displayEntrar.style.display = 'none'
                    alert('você entrou')
                    displayUserName.style.display = 'flex'

                    btnRedirecionar.addEventListener('click', e => {
                        userNames.push(userName.value)

                        localStorage.setItem('user', userName.value)
                        window.location.href = './src/pages/home.html'
                    })
                    
                    break
                }else{
                    cont += 1
                }
            }else{
                cont += 1
            }
        }else{
            alert('conta não existe')

            break
        }
    }
})

// Fim Criar Conta



/*
 RESOLVER PROBLEMA COM MOSTRAR A SENHA E ESCONDER

const iconToggle = document.querySelectorAll('#iconeMostrar')
iconToggle.forEach( e => {
    e.addEventListener('click', click => {
        
        const senha = document.querySelectorAll('#senha')
        senha.forEach( e => {
            const tipoSenha = e.type
            if(tipoSenha == 'text'){
                e.type = 'password'
            } else {
                e.type = 'text'
            }
        })

        const url_atual = window.location.href
        const imageShow = `${url_atual}/images/show.png`
        const imageHide = `${url_atual}/images/hide.png`
        const icon = e.src
        if(icon == imageShow){
            e.src = imageHide
        }else {
            e.src = imageShow
        }
        
    })
})*/