const rgbBtn = document.querySelector(".rgbBtn");
const bodyBcg = document.querySelector('body');
const rgbSelector = document.querySelector('.rgbSelector');
rgbBtn.addEventListener('click', getRgb);

function getRgb() {
    let redCol = Math.floor(Math.random() * 256);
    let greenCol = Math.floor(Math.random() * 256);
    let blueCol = Math.floor(Math.random() * 256);
    let rgbCol = "rgb(" + redCol + "," + greenCol + "," + blueCol + ")";

    bodyBcg.style.backgroundColor = rgbCol;
    rgbSelector.innerHTML = rgbCol;
}