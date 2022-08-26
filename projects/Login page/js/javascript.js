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
        }
        return flag
    }


    // function showHomeValue() {
    //     calculate();
    //     var homeValue = document.getElementById("homevalue");
    //     var str = "";
    //     homeValue.className = "wrong";
    //     var flag = false;
    //     if (isNull(homeValue)) {
    //         str = "<font color='red'><strong> * Haven't filled in</strong></font>";

    //     } else if (!isRegex(homeValue, /^\d+(\.\d{1,2})?$/)) {
    //         str = "<font color= 'red'><strong>Keep up to two decimals</strong></font>";

    //     } else {
    //         str = "<font color='green'><strong>Valid</strong></font>";
    //         homeValue.className = "right";
    //         flag = true;
    //     }
    //     var homeValueMsg = document.getElementById("homevaluemsg");
    //     homeValueMsg.innerHTML = str;
    //     return flag;
    // };