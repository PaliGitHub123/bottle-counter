const counterParagraph = document.getElementById('counter-value');
const increButton = document.getElementById('increment-value');
const decreButton = document.getElementById('decrement-value');

let counter = 0;

increButton.addEventListener("click", counterIncrement);
decreButton.addEventListener("click", counterDecrement);

function counterIncrement() {
    counter = Number(localStorage.getItem("counter"));
    counter++;
    localStorage.setItem("counter", counter);
    counterParagraph.textContent = counter;
}

function counterDecrement(){
    counter = Number(localStorage.getItem("counter"));
    if(counter > 0){
        counter--;
        localStorage.setItem("counter", counter);
        counterParagraph.textContent = counter;
    }
}

function showData(){
    counterParagraph.textContent = localStorage.getItem("counter");
}
showData();
