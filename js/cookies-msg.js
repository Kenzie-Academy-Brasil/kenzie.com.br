const accept = document.querySelector("accept")
const notAccept = document.querySelector("not-accept")

const acceptCookies = (e) => {
    e.target = alert('Clicou!')
}

const doNotAcceptCookies = () => {
    alert('Não aceitoooou!!!')
}

accept.addEventListener('click', acceptCookies(), false)
notAccept.addEventListener('click', doNotAcceptCookies(), false)