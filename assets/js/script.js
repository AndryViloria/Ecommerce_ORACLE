
const formulario = document.getElementById('formulario')
const correo = document.getElementById('correo')
const password = document.getElementById('password')
const parrafo = document.getElementById('warnigs')

// VALIDACION FORMULARIO LOGIN
formulario.addEventListener("submit", e => {
    e.preventDefault()
    let warnigs = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (!regexEmail.test(correo.value)) {
        warnigs += 'El correo electrónico no es válido <br>'
        entrar = true
    }
    if (password.value.length < 6) {
        warnigs += 'La contraseña no es válida <br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnigs
    } else {
        window.location.href = './entrar.html'
    }
})
