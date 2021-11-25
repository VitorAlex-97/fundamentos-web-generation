let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {
    let textNome = document.querySelector('#textNome')
    
    if (nome.value.length < 3 ) {
        textNome.innerHTML = 'Nome inválido'
        textNome.style.color = 'red'
        textNome.style.fontSize = '12px'
        textNome.style.display = 'block'
    } else {
        textNome.style.display = 'none'
        nomeOk = true
    }
}

function validaEmail() {
    let textEmail = document.querySelector('#textEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        textEmail.innerHTML = 'Email inválido'
        textEmail.style.color = 'red'
        textEmail.style.fontSize = '12px'
        textEmail.style.display = 'block'
    } else {
        textEmail.style.display = 'none'
        emailOk = true
    }
}

function validaAssunto() {
    let textAssunto = document.querySelector('#textAssunto')

    if (assunto.value.length >= 100) {
        textAssunto.innerHTML = 'Texto muito grande'
        textAssunto.style.color = 'red'
        textAssunto.style.fontSize = '12px'
        textAssunto.style.display = 'block'
    } else {
        textAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado!')
    } else {
        alert('Preencha o formulário corretamente')
    }
}