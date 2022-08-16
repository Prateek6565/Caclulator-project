screen = document.getElementById('screen')
screenValue = ""
button = document.querySelectorAll('button')

for (items of button) {
    items.addEventListener('click', function (event) {
        buttonText = event.target.innerText
        console.log(buttonText);

        if (buttonText == "AC") {
            screenValue = ""
            screen.value = screenValue
        }

        else if (buttonText == "=") {
            screen.value = eval(screenValue)
        }

        else if (buttonText == "x") {
            buttonText = "*"
            screenValue += buttonText
            screen.value = screenValue
        }

        else {
            screenValue += buttonText
            screen.value = screenValue
        }
    })

}