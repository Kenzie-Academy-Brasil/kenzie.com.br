const cookies = document.querySelector(".cookies")
cookies.style.display = "none"

const accept = document.querySelector(".accept")
const notAccept = document.querySelector(".not-accept")

const acceptCookies = (e) => {
    cookies.style.display = 'none'
    localStorage.setItem('cookies', 'accept')
}

const doNotAcceptCookies = () => {
    cookies.style.display = 'none'
    localStorage.setItem('cookies', 'denied')
}

accept.addEventListener('click', acceptCookies, false)
notAccept.addEventListener('click', doNotAcceptCookies, false)

const validateSession = localStorage => {

    if (localStorage === 'denied' || localStorage === null) {
        cookies.style.display = 'flex';
    }
}




setTimeout(() => { validateSession(localStorage.getItem('cookies')) }, 3000)