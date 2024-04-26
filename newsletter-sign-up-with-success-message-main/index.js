
const submitBtn = document.getElementById('submitBtn').addEventListener('click', (ev) => {

    ev.preventDefault()

    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    const mainBox = document.getElementById('mainBox')
    const confirmationBox = document.getElementById('confirmationBox')
    const errorText = document.getElementById('errorText')
    const confirmedEmail = document.getElementById('confirmedEmail')

    if (email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mainBox.style.display = 'none'
        confirmationBox.style.display = 'flex'
        confirmedEmail.innerText = email
        confirmedEmail.style.fontWeight = 'bold'
    } else {
        errorText.style.display = 'inline';
        emailInput.style.backgroundColor = 'hsl(3, 48%, 85%)';
        emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
    }

})

const dismissBtn = document.getElementById('dismissBtn').addEventListener('click', (ev) => {

    const confirmationBox = document.getElementById('confirmationBox').style.display = 'none'
    const thanks = document.querySelector('.thanks').style.display = 'flex'

    

})

