//get all the elements
const num = document.querySelector('h1');
const input = document.querySelector('input');
const minusValue = document.querySelector('.minus');
const addValue = document.querySelector('.plus');


//get the displayed value
let h1value = parseInt(num.textContent);

//get the values of the input
let value = input.value;
const userInput = (e) => {
    value = parseInt(e.target.value);
    console.log(e)
    console.log(typeof value)
}
input.onchange = userInput;


//add value
const plus = () => {
    h1value += parseInt(value);
    num.innerText = h1value
    if(h1value < 0){
        num.style.color = 'red'
    }else{
        num.style.color = 'black'
    }
}


//minus value
const minus = () => {
    h1value -= parseInt(value);
    num.innerText = h1value
    
    if(h1value < 0){
        num.style.color = 'red'
    }else{
        num.style.color = 'black'
    }
}



// //set event listeners on the buttons
minusValue.onclick = minus;
addValue.onclick = plus;
