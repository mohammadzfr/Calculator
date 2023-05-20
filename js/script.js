// Algorithm

let numberTrack;
console.log(numberTrack);
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
const mainScreen = screen.children[1];
const history = screen.children[0];

buttons.forEach(button => {
    button.addEventListener("click", buttonClicked)
    
});

console.log(buttons);
console.log(screen);
function buttonClicked() {
    button = arguments[0].target;
    switch(button.classList[1]) {
        case "number":
            numberClicked(button);
            break;
        case "operand":
            operandClicked(button);
            break;
        case "misc":
            miscClicked(button);
            break;
        default:
            switch(button.classList[0]) {
                case "sign":
                    signClicked(button);
                    break;
                case "decimal":
                    decimalClicked(button);
                    break;
                case "equal":
                    equalClicked(button);
                    break;
                default:
                    console.log("ERROR! BUTTON NOT RECOGNISED");
                    break;
            }
    }
}
function operandClicked(operand) {
    if (numberTrack == null)
        return;
    history.textContent += `${numberTrack} ${operand.textContent} `
    numberTrack = null;
    console.log("operand");
}

function numberClicked(number) {
    console.log("number");
    if (!numberTrack)
        numberTrack = number.textContent;
    else
        numberTrack += number.textContent;
    mainScreen.textContent = numberTrack;

}

function miscClicked(misc) {
    console.log("misc");
}

function signClicked(sign) {
    console.log("sign");
}

function decimalClicked(decimal) {
    
    console.log("decimal");
}

function equalClicked(equal) {
    console.log("equal");
}