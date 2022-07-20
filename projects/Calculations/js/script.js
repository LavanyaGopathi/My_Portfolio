function insert(num) {
    document.form.textinput.value = document.form.textinput.value + num;
}

function clean() {
    // clean input area
    document.form.textinput.value = "";
}

function back() {
    var text = document.form.textinput.value
        // remove last character from string
    document.form.textinput.value = text.substring(0, text.length - 1)
}

function calculator() {
    // eval calculation
    var text = document.form.textinput.value
    document.form.textinput.value = eval(text)
}


//mortgage calculator:-
function isNull(element) {
    return element.value == "";
}

function isNaN(val) {
    return Number.isNaN(val);
}

function isRegex(element, regex) {
    return regex.test(element.value);
}

function text2number(element) {
    return parseFloat(element.value);
}

function validateAll() {
    return showUprice() && showAmort() && showDpayr() && showInr() && showCommr();
}

function round(val, dec) {
    return Math.round(val * Math.pow(10, dec)) / Math.pow(10, dec);
}

function mouseIn(element) {
    element.bgColor = "aliceblue";
}

function mouseOut(element) {
    element.bgColor = "lightgray";
}

function showHomeValue() {
    calculate();
    var homeValue = document.getElementById("homevalue");
    var str = "";
    homeValue.className = "wrong";
    var flag = false;
    if (isNull(homeValue)) {
        str = "<font color='red'><strong> * Haven't filled in</strong></font>";

    } else if (!isRegex(homeValue, /^\d+(\.\d{1,2})?$/)) {
        str = "<font color= 'red'><strong>Keep up to two decimals</strong></font>";

    } else {
        str = "<font color='green'><strong>Valid</strong></font>";
        homeValue.className = "right";
        flag = true;
    }
    var homeValueMsg = document.getElementById("homevaluemsg");
    homeValueMsg.innerHTML = str;
    return flag;
};

function showDownPayment() {
    calculate();
    var downPayment = document.getElementById("downpayment");
    var homeValue = document.getElementById("homevalue")
    var str = "";
    var flag = false;
    downPayment.className = "wrong";
    if (isNull(downPayment)) {
        str = "<font color='red'><strong> * Haven't filled in</strong></font>";
    } else if (!isRegex(downPayment, /^\d+(\.\d{1,4})?$/)) {
        str = "<font color= 'red'><strong>Keep up to four decimals</strong></font>";
    } else if (downPayment.value > homeValue.value) {
        str = "<font color='red'><strong> * down payment can't be more than home value</strong></font>";
    } else {
        str = "<font color='green'><strong>Valid</strong></font>";
        downPayment.className = "right";
        flag = true;
    }
    var downPaymentmsg = document.getElementById("downpaymentmsg");
    downPaymentmsg.innerHTML = str;
    return flag;

}

function showLoanAmount() {
    calculate();
    var LoanAmount = document.getElementById("loanamount");
    var str = "";
    var flag = false;
    LoanAmount.className = "wrong";
    if (isNull(LoanAmount)) {
        str = "<font color='red'><strong> * Haven't filled in</strong></font>";
    } else if (LoanAmount.value < 0) {
        str = "<font color='red'><strong> * Can't be less than zero</strong></font>";
    } else {
        str = "<font color='green'><strong>Valid</strong></font>";
        LoanAmount.className = "right";
        flag = true;
    }
    var LoanAmountMsg = document.getElementById("loanamountmsg");
    LoanAmountMsg.innerHTML = str;
    return flag;
}

function showInterestRate() {
    calculate();
    var interestRate = document.getElementById("interestrate");
    var str = "";
    var flag = false;
    interestRate.className = "wrong";
    if (isNull(interestRate)) {
        str = "<font color='red'><strong> * Haven't filled in</strong></font>";

    } else if (!isRegex(interestRate, /^\d+(\.\d{1,4})?$/)) {
        str = "<font color= 'red'><strong>Keep up to four decimals</strong></font>";

    } else if (interestRate > 100) {
        str = "<font color='red'><strong> * Percentage can't be more than 100</strong></font>";
    } else {
        str = "<font color='green'><strong>Valid</strong></font>";
        interestRate.className = "right";
        flag = true;
    }

    var interestRateMsg = document.getElementById("interestratemsg");
    interestRateMsg.innerHTML = str;
    return flag;
}

function showLoanDuration() {
    calculate();
    var loanDuration = document.getElementById("loanduration");
    var str = "";
    var flag = false;
    loanDuration.className = "wrong";
    if (isNull(loanDuration)) {
        str = "<font color='red'><strong>* Haven't filled in</strong></font>";
    } else {
        str = "<font color='green'><strong>Valid</strong></font>";
        loanDuration.className = "right";
        flag = true;
    }

    var loanDurationMsg = document.getElementById("loandurationmsg");
    loanDurationMsg.innerHTML = str;
    return flag;
}

function calculate() {
    var homeValue = text2number(document.getElementById('homevalue'));
    var downPayment = text2number(document.getElementById('downpayment'));
    var dpaypercent = document.getElementById('dpaypercent');
    var loanAmountObj = document.getElementById('loanamount');
    var interestRate = text2number(document.getElementById("interestrate")) / 100;
    var loanDuration = text2number(document.getElementById('loanduration'));

    var dpay, hprice, mapy, tin, tpay, dPercent;

    if (!isNull(homeValue) && !isNull(downPayment)) {
        dpay = round(downPayment, 2);

        if (isNaN(dpay)) {
            dpay = "<font color='red'><strong>Unable to calculate</strong></font>";

        }
        var dpayMsg = document.getElementById("dpayMsg");

        dpayMsg.innerHTML = "<strong>£&nbsp;" + dpay + "</strong>";
    }
    if (!isNull(homeValue)) {
        hprice = round(homeValue, 2);
        if (isNaN(hprice)) {
            hprice = "<font color='red'><strong>Unable to calculate</strong></font>";
        }
        var hpriceMsg = document.getElementById("hpriceMsg");
        hpriceMsg.innerHTML = "<strong>£&nbsp;" + hprice + "</strong>";
    }
    if (!isNull(homeValue) && !isNull(downPayment)) {
        loanAmountObj.value = round(hprice - dpay, 2);
        dPercent = round((dpay / hprice) * 100, 2);
        dpaypercent.innerHTML = dPercent;
    }
    var loanAmount = text2number(document.getElementById('loanamount'));
    if (!isNull(homeValue) && !isNull(downPayment) && loanAmount >= 0 && !isNull(interestRate) && !isNull(loanDuration)) {
        mpay = round(((interestRate / 12) * loanAmount) /
            (1 - Math.pow(1 + (interestRate / 12), -(loanDuration * 12))), 2);

        if (isNaN(mpay)) {
            mpay = "<font color='red'><strong>Unable to calculate</strong></font>";
        }
        var mpayMsg = document.getElementById("mpayMsg");
        mpayMsg.innerHTML = "<strong>£&nbsp;" + mpay + "</strong>";
    } else {
        mpay = "<font color='red'><strong>Unable to calculate</strong></font>";
        var mpayMsg = document.getElementById("mpayMsg");
        mpayMsg.innerHTML = "<strong>£&nbsp;" + mpay + "</strong>";
        var LoanAmountMsg = document.getElementById("loanamountmsg");
        LoanAmountMsg.innerHTML = "<font color='red'><strong> * Can't be less than zero</strong></font>";
    }
    if (!isNull(homeValue) && !isNull(interestRate) && !isNull(loanDuration)) {
        tpay = round(mpay * loanDuration * 12, 2);
        if (isNaN(tpay)) {
            tpay = "<font color='red'><strong>Unable to calculate</strong></font>";
        }
        var tpayMsg = document.getElementById("tpayMsg");
        tpayMsg.innerHTML = "<strong>£&nbsp;" + tpay + "</strong>";
    }
    if (!isNull(homeValue) && !isNull(downPayment) && !isNull(interestRate) && !isNull(loanDuration)) {
        tin = round(tpay - (hprice - dpay), 2);

        if (isNaN(tin)) {
            tin = "<font color='red'><strong>Unable to calculate</strong></font>";
        }
        var tinMsg = document.getElementById("tinMsg");
        tinMsg.innerHTML = "<strong>£&nbsp;" + tin + "</strong>";
    };
};
// Age Calculator:-

function ageCalculate() {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth, birthDate, birthYear;

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth &&
            birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails
            .month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born yet");
        displayResult("-", "-", "-");
        return;
    }
    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }
    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthYear, birthMonth, birthDate)
}

function displayResult(bYear, bMonth, bDate) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}


function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }

}