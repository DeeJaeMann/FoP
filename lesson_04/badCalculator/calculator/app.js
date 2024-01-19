/* This needs a lot of work!
    The numbers aren't maintaining state and the second number
    never gets picked up.  I'll have to return to this later
    Possibly re-think how I'm going to do the functions.
    appendText has become very large.  it should be broken
    down into simple components
*/

let intTotal = 0;
let strDisplay = "";
let intFirstNum = null;
let intSecondNum = null;


// Helper functions
function appendText(strInput, strThisDisplay) {
    if (Number.isInteger(strInput)) {
        return(strThisDisplay.concat(strInput));
    } else {
        if(strInput === "=") {
                // append output number
                // if(intSecondNum === null) {
                //     return(strThisDisplay.concat(`${strInput} ${intTotal}`));
                // } else {
                    let strMyDisplay = strThisDisplay.replace(/\s+/g,'');
                    intSecondNum = strMyDisplay.match(/.+\d+$/);
                    intFirstNum = strMyDisplay.match(/^\d+/);
                    document.querySelector('.debugText').innerText = toString(intSecondNum);
                // if(strThisDisplay.match(/[-+*/]/) == "+") {
                //     strInput = "Add!";
                // }
                let strThisMatch = strThisDisplay.match(/[-+*/]/)[0]; 
                //switch (strThisDisplay.match(/[-+*/]/)) {
                switch(strThisMatch) {
                        case "+":
                            intTotal = intFirstNum + intSecondNum;
                            break;
                        case "-":
                            intTotal = intFirstNum - intSecondNum;
                            break;
                        case "*":
                            intTotal = intFirstNum * intSecondNum;
                            break;
                        case "/":
                            intTotal = intFirstNum / intSecondNum;
                        default:
                            intTotal = "Something is wrong!";
                    }
                    intFirstNum = null;
                    intSecondNum = null;
                    return(strThisDisplay.concat(`${strInput} ${intTotal} ${typeof(strThisDisplay.match(/[-+*/]/))} ${strThisMatch}`));
                //}
        } else {
            //strInput;
            if(intFirstNum === null) {
                let strMyDisplay = strThisDisplay.replace(/\s+/g,'');
                intFirstNum = strMyDisplay.match(/^\d+/g);
                document.querySelector('.debugText').innerHTML = toString(intFirstNum);
            } else {
                let strMyDisplay = strThisDisplay.replace(/\s+/g,'');
                intSecondNum = strMyDisplay.match(/.+\d+$/g);

                document.querySelector('.debugText').innerText = intSecondNum;
                // calculate number
                switch (strInput) {
                    case "+":
                        intTotal = intFirstNum + intSecondNum;
                        break;
                    case "-":
                        intTotal = intFirstNum - intSecondNum;
                        break;
                    case "*":
                        intTotal = intFirstNum * intSecondNum;
                        break;
                    case "/":
                        intTotal = intFirstNum / intSecondNum;
                    default:
                        intTotal = "Something happened earlier";
                }
                intFirstNum = null;
                intSecondNum = null;
            }

            return(strThisDisplay.concat(` ${strInput} FirstNum->[${intFirstNum}] SecondNum->[${intSecondNum}] ||`));
        }
    }
}

function displayResult(strThisDisplay) {
    document.querySelector('.displayText').innerText = strThisDisplay;
}

// End Helper Functions

function pressClear() {
    strDisplay = "";
    intTotal = 0;
    displayResult(strDisplay);
}

function pressOne() {
    strDisplay = appendText("1", strDisplay);
    displayResult(strDisplay);
}

function pressTwo() {
    strDisplay = appendText("2", strDisplay);
    displayResult(strDisplay);
}

function pressThree() {
    strDisplay = appendText("3", strDisplay);
    displayResult(strDisplay);
}

function pressFour() {
    strDisplay = appendText("4", strDisplay);
    displayResult(strDisplay);
}
function pressFive() {
    strDisplay = appendText("5", strDisplay);
    displayResult(strDisplay);
}

function pressSix() {
    strDisplay = appendText("6", strDisplay);
    displayResult(strDisplay);
}

function pressSeven() {
    strDisplay = appendText("7", strDisplay);
    displayResult(strDisplay);
}

function pressEight() {
    strDisplay = appendText("8", strDisplay);
    displayResult(strDisplay);
}
function pressNine() {
    strDisplay = appendText("9", strDisplay);
    displayResult(strDisplay);
}

function pressZero() {
    strDisplay = appendText("0", strDisplay);
    displayResult(strDisplay);
}


function pressAdd() {
    strDisplay = appendText("+", strDisplay);
    displayResult(strDisplay);
}

function pressSub() {
    strDisplay = appendText("-", strDisplay);
    displayResult(strDisplay);
}
function pressMult() {
    strDisplay = appendText("*", strDisplay);
    displayResult(strDisplay);
}
function pressDiv() {
    strDisplay = appendText("/", strDisplay);
    displayResult(strDisplay);
}

function pressEq() {
    strDisplay = appendText("=", strDisplay);
    displayResult(strDisplay);
}

document.querySelector('.clearButton').addEventListener('click', pressClear);
document.querySelector('.buttonOne').addEventListener('click', pressOne);
document.querySelector('.buttonTwo').addEventListener('click', pressTwo);
document.querySelector('.buttonThree').addEventListener('click', pressThree);
document.querySelector('.buttonFour').addEventListener('click', pressFour);
document.querySelector('.buttonFive').addEventListener('click', pressFive);
document.querySelector('.buttonSix').addEventListener('click', pressSix);
document.querySelector('.buttonSeven').addEventListener('click', pressSeven);
document.querySelector('.buttonEight').addEventListener('click', pressEight);
document.querySelector('.buttonNine').addEventListener('click', pressNine);
document.querySelector('.buttonZero').addEventListener('click', pressZero);

document.querySelector('.addButton').addEventListener('click', pressAdd);
document.querySelector('.subButton').addEventListener('click', pressSub);
document.querySelector('.multButton').addEventListener('click', pressMult);
document.querySelector('.divButton').addEventListener('click', pressDiv);

document.querySelector('.eqButton').addEventListener('click', pressEq);