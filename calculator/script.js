const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
const specialchars=["%" ,"*","/", "-", "+","="];
let output = "";
//Define functions to calculate based on button clicked.
 const calculate = (btnvalue) => {
    if (btnvalue === "=" && output !== ""){
        //If output has '%', raplace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));

    }else if(btnvalue === "AC"){
output = " "
    }else if(btnvalue === "DEL"){
//If DEL button is clicked ,remove the last character from the output.
 output = output.toString().slice(0, -1);


    }else{
        //If output is empty and button is specialchars then return
        if(output === "" && specialchars.includes(btnvalues)) return;
        output += btnvalue;
    }
    display.value = output;



 };

//Add event listener to buttons, call calculate( ) on click.
buttons.forEach((button) => {
     //buttons click listener calls calculate() with dayaset value at argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

