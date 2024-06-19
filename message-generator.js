// Inspirational Message Generator

// Array containing 4 lists of 5 phrases each
// Originally it should have only 3 lists, but it was expanded to 4
// To form the message > 'Embrace ' + message[0][X] + ', ' + message[1][X] + ' and ' + message[2][X]
const message = [
    ["Accept", "Welcome", "Adopt", "Embody", "Encourage"], 
    ["challenges", "growth", "change", "uncertainty", "opportunities"], 
    ["believe in yourself", "stay positive", "persist with passion", "dream big", "celebrate your journey"], 
    ["spread kindness", "make a difference", "inspire others", "lead by example", "live with gratitude"]
];

// Random number (0-4) generator
const rnd = () => {
    return Math.floor(Math.random() * 5);
}

// Printing the inspirational message
console.log(message[0][rnd()] + ' ' + message[1][rnd()] + ', ' + message[2][rnd()] + ' and ' + message[3][rnd()]);