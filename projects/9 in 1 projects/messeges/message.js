const sendBtn = document.querySelector("#sendBtn");
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector("#messageOut")

function sendMsg() {
    let content = messageIn.value;
    // console.log(content);
    if (content == "") {
        alert('Please Enter valid value.Current value is Empty')
    } else {
        messageOut.innerHTML = content;
        messageIn.value = ""
    }

}