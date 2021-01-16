// Get all the elements 
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const Uppercase = document.getElementById('includeUppercase');
const Numbers = document.getElementById('includeNumbers');
const Symbols = document.getElementById('includeSymbols');
const form = document.getElementById('passwordGenerator'); 
const UPPERCASE_CODES = arrayFromLowToHigh(65,90);
const LOWERCASE_CODES = arrayFromLowToHigh(97,122);
const NUMBERS_CODES = arrayFromLowToHigh(48,57);
const SYMBOLS_CODES = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));
const passwordHach = document.getElementById('password');




characterAmountNumber.addEventListener('input',synchCharacterAmount);
characterAmountRange.addEventListener('input',synchCharacterAmount);

//Get the number and the range to have the same value
function synchCharacterAmount(e){
    const value = e.target.value;
    characterAmountNumber.value =value;
    characterAmountRange.value = value;
}

form.addEventListener('submit',generatePassword);

//Display the Password once the form is submitted
function generatePassword(e){
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = Uppercase.checked;
    const includeNumbers = Numbers.checked;
    const includeSymbols = Symbols.checked;

    const password = makePassword(characterAmount, includeUppercase,includeNumbers,includeSymbols);
    passwordHach.innerText = password;

}
// Make the password and return it based of selected options 
function makePassword(characterAmount, includeUppercase,includeNumbers,includeSymbols){
    console.log(includeUppercase)
    const password = [];
    let CHAR_CODES = LOWERCASE_CODES;
    if(includeUppercase){
        CHAR_CODES = CHAR_CODES.concat(UPPERCASE_CODES);
    }
    if(includeNumbers){
        CHAR_CODES = CHAR_CODES.concat(NUMBERS_CODES);
    }
    if(includeSymbols){
        CHAR_CODES = CHAR_CODES.concat(SYMBOLS_CODES);
    } 
    for(let i=0 ; i< characterAmount; i++){
        const randomChar = CHAR_CODES[Math.floor(Math.random()*CHAR_CODES.length)];
        password.push(String.fromCharCode(randomChar));
    }
    console.log(password);

    return password.join('');
}

// Add values to an array and return it 
function arrayFromLowToHigh(low,high){
    const array = [];
    for(let i=low; i<high;i++){
        array.push(i);
    }
    return array;
}