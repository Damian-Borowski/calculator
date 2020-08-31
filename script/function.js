/* Show value function */
function GetValue(value){
    document.calc.window.value = document.calc.window.value+value;
}
function equal(){
    document.calc.window.value = eval(document.calc.window.value);
}
function multiplication(){
    calc.window.value += "*";
}