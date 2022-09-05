    function valiadateLogin() {
        const email = document.getElementById('Email')
        const password = document.getElementById('Password')
        const ErrorMsg = document.getElementById('Error')

        var flag = false
        messages = []
        if (email.value === '' || email.value == null) {
            messages.push("<font color='red'><strong> * Name is Required.</strong></font>")
        }
        if (password.value.length <= 6) {
            messages.push("<font color='red'><strong> * Password must be longer than 6 charecters.</strong></font>")
        }
        if (password.value.length >= 20) {
            messages.push("<font color='red'><strong> * Password must be less than 20 charecters.</strong></font>")
        }
        if (password.value === 'password') {
            messages.push("<font color='red'><strong> * Password cannot be password.</strong></font>")
        }

        if (messages.length > 0) flag = true

        if (flag) {
            for (let i = 0; i < messages.length; i++) {
                ErrorMsg.innerHTML += messages[i] + "<br>";
            }
        } else
            location.href = "index.html"
    }