import { multiplicationTables() } from './Multiply.js';

export function getMultiply() {
    box = document.getElementById("box");
    box.innerHTML = multiplicationTables(10);
    return box;
   
}

