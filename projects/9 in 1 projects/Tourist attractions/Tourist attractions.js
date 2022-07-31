const quotes = [{
        name: "Taj Mahal",
        quote: "If there was just one symbol to represent all of India, it would be the Taj Mahal. The monument inspires millions of tourists to make the trip to Agra every year, waking up before dawn to see magnificent structure radiate at sunrise."
    },
    {
        name: "Humayun's Tomb",
        quote: "Despite its crowds and chaos, New Delhi offers tourists a lot to love. The colorful capital of India is the perfect marriage of heritage and modernity. Old Delhi contains some of the country's most treasured attractions, including the Jama Masjid, Red Fort, and Chandni Chowk shopping thoroughfare."
    },

    {
        name: "Varanasi",
        quote: "One of the oldest continually inhabited cities in the world, Varanasi is arguably the holiest place in India. The spiritual activities take place along the sacred Ganges River, where pilgrims bathe and mourners cremate recently deceased relatives in plain view of passersby."
    },
    {
        name: "Amritsar",
        quote: "Amritsar, the 'Jewel of Punjab,' has made its claim to fame with its remarkable Golden Temple. One of the holiest places in the world for Sikhs, the gilded structure is a sight to behold, glistening in the sun and reflecting into the large pool that surrounds it."
    },
    {
        name: "Kailasa Temple, Ellora Caves",
        quote: "Time travel isn't a reality for travelers quite yet, but you can get pretty close at the Ajanta and Ellora Caves in Maharashtra. Both UNESCO World Heritage Sites, the caves feature intricate carvings from at least 1,500 years ago."
    },
    {
        name: "Elephant in the surf on Havelock Island, Andaman Islands",
        quote: "Andaman Islands are the go-to place in India if you're looking for a classic beach vacation. They'll treat you to powder-white sand beaches flanked by coconut palms, pastel-streaked sunsets, the turquoise waters of the Andaman Sea, and dense jungle landscapes. No postcard could possibly capture the majesty of this gorgeous destination."
    },
    {
        name: "Darjeeling with snow-capped Khangchendzonga Mountain in the distance",
        quote: "Sightseeing in India doesn't get much better than what you'll discover in Darjeeling. The hill station in West Bengal is beloved for its lush green tea plantations, awe-inspiring snow-capped peaks (including Khangchendzonga, the world's third-highest mountain), and serene Buddhist monasteries. This is the perfect place to arrange a mountain trek or mountain biking adventure."
    },
    {
        name: "Palolem Beach, South Goa",
        quote: "India's not just full of big cities and holy sites it also has incredible beaches down south in Goa. Its stretches of golden sand along the Arabian Sea offer something for every type of tourist, whether you're interested in hanging out with the backpacker crowd in laid-back beach huts or having a ritzy tropical getaway at a five-star resort."
    },
    {
        name: "Abbey Falls, Kodagu",
        quote: "Take one look at Kodagu's hilly emerald landscape perpetually blanketed by a cloud of mist, and you'll instantly see why this hill station is nicknamed 'the Scotland of India."
    },

]

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "images/thajmahal.jpg";

imgArray[1] = new Image();
imgArray[1].src = 'images/2.new-delhi.jpeg';



imgArray[2] = new Image();
imgArray[2].src = 'images/india-varanasi.jpeg';

imgArray[3] = new Image();
imgArray[3].src = 'images/india-amritsar.jpeg';

imgArray[4] = new Image();
imgArray[4].src = 'images/ajanta-ellora-caves.jpeg';

imgArray[5] = new Image();
imgArray[5].src = 'images/andaman-islands-elephant-beach.jpeg';

imgArray[6] = new Image();
imgArray[6].src = 'images/darjeeling.jpeg';

imgArray[7] = new Image();
imgArray[7].src = 'images/goa.jpeg';

imgArray[8] = new Image();
imgArray[8].src = 'images/kodagu-abbey-falls.jpeg';

function displayQuote() {
    const quoteAuthor = document.querySelector("#quoteAuthor");
    const quote = document.querySelector("#quote");
    const tourImage = document.querySelector(".tourImage");

    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    tourImage.src = imgArray[number].src;
}