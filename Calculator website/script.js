const display = document.getElementById("display");
const delNum = document.getElementById("delete");
const result = document.getElementById("total");
const delOneNum = document.getElementById("del");

// adds values in display
function appendToDisplay(input) {         
    display.value += input;
}

// make display blank
delNum.addEventListener("click", () => {
    display.value = "";
});

// remove one value on-click
delOneNum.addEventListener("click", () => {
    if (display.value !=="") {
        let a = display.value.split("");
        a.pop();
        display.value = a.join("");
    } 
});

//returns result
result.addEventListener("click", () => {
    try {
        if (display.value !== "") {
            display.value = eval(display.value);
        } else {
            display.value = "Error";
        }
    } catch (error) {
        display.value = "Error";
    } 
})



