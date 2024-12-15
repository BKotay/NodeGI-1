console.log('Client side javaScript is loaded!')




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const select = document.querySelector('#unit')


// Regex for alphanumeric characters to show when user enters special characters.
weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    let regex = /^[a-zA-Z0-9, ]*$/;

    const location = search.value
messageOne.textContent ='Loading ...'
messageTwo.textContent = ''

//  fetching the user option tag for their chosen units. 
    fetch('/weather?address=' + location + '&units=' + select.options[select.selectedIndex].value).then((response) => {
        response.json().then((data) => {
            if(!regex.test(location)) {
                messageOne.textContent = 'Please enter your a valid location.'
            }
            // if(data.error) {
            //     messageOne.textContent = data.error
            // }
            if (regex.test(location)){
                    // fetch('http://localhost:3000/weather?address=' + location + '&' + select.options[select.selectedIndex].value)
                    // console.log(select.options[select.selectedIndex].value)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})

