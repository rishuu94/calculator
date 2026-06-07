let string = "";
let buttons = document.querySelectorAll('.button');
let display = document.querySelector('input');

function scrollToRight() {
    display.scrollLeft = display.scrollWidth;
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                let result = eval(string);
                if (typeof result === "number" && !Number.isInteger(result)) {
                    result = parseFloat(result.toFixed(10));
                }
                string = result.toString();
            }
            catch {
                string = "ERROR";
            }
            display.value = string;
        } 
        else if (e.target.innerHTML == 'AC') {
            string = "0";
            display.value = string;
        } 
        else if (e.target.innerHTML.trim().toUpperCase() == 'DEL') {
            if (string !== "0" && string !== "Error" && string !== "ERROR") {
                string = string.slice(0, -1);
                if (string == "") {
                    string = "0";
                }
            } 
            else {
                string = "0";
            }
            display.value = string;
        } 
        else { 
            if (e.target.innerHTML == 'X') {
                string += '*';
            } 
            else {
                if (string === "0" || string === "Error" || string === "ERROR") {
                    string = e.target.innerHTML;
                    if (string == "0") {
                        return;
                    }
                } 
                else {
                    string += e.target.innerHTML;
                }
            }
            display.value = string;
        }
        scrollToRight();
    });
});
