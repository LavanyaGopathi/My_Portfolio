const changeBtn = document.querySelector('.changeBtn');
const Bodybcg = document.querySelector('.appBackground');
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './images/1.jpg';


imgArray[1] = new Image();
imgArray[1].src = './images/2.jpg';

imgArray[2] = new Image();
imgArray[2].src = './images/3.jpg';

imgArray[3] = new Image();
imgArray[3].src = './images/4.jpg';

imgArray[4] = new Image();
imgArray[4].src = './images/5.jpg';

imgArray[5] = new Image();
imgArray[5].src = './images/6.jpg';

imgArray[6] = new Image();
imgArray[6].src = './images/7.jpg';

imgArray[7] = new Image();
imgArray[7].src = './images/8.jpg';

imgArray[8] = new Image();
imgArray[8].src = './images/9.jpg';

imgArray[9] = new Image();
imgArray[9].src = './images/10.jpg';

imgArray[10] = new Image();
imgArray[10].src = './images/11.jpg';

imgArray[11] = new Image();
imgArray[11].src = './images/12.jpg';


imgArray[12] = new Image();
imgArray[12].src = './images/13.jpg';

imgArray[13] = new Image();
imgArray[13].src = './images/14.jpg';

imgArray[14] = new Image();
imgArray[14].src = './images/15.jpg';


changeBtn.addEventListener('click', changeimage);

function changeimage() {
    // Bodybcg.style.background = "url('./images/3.jpg')";
    let random = Math.floor(Math.random() * imgArray.length)
    Bodybcg.style.background = "url('" + imgArray[random].src + "') center center no-repeat,fixed";
    Bodybcg.style.backgroundSize = "100% 100vh"
}