// array of zodiac signs
const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpius',
    'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'];

// array of emotions
const emotions = ['Happy', 'Frustrated', 'Proud', 'Confident',
    'Sad', 'Angry', 'Disgusted', 'Indifferent',
    'Thoughtful', 'Disappointed', 'Surprised', 'Bored'];

// function for random numbers between 0 - 11
function random() {
    return Math.floor(Math.random() * 12);
};

// getting random signs and emotions
let sign = signs[random()];
let emotion = emotions[random()];

// function for loggin the phrase
function getPhrase() {
    console.log(`A ${sign} will make you ${emotion}.`);
    
    let luckNum = Math.floor(Math.random() * 1000);
    console.log('Your lucky number is: ' + luckNum);
};

getPhrase();