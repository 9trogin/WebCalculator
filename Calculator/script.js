let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.innerHTML === '=') {
            try {
                // Replace 'X' with '*' before using eval
                const sanitizedString = string.replace(/X/g, '*');
                string = eval(sanitizedString);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (e.target.innerHTML === 'AC') {
            string = '';
            input.value = string;
        } else if (e.target.innerHTML === 'Del') {
            if (string.length > 0) {
                string = string.slice(0, -1);
                input.value = string;
            }
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
