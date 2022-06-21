let bnt = document.getElementById("btn");
let input_1 = document.getElementById("input_1") as HTMLInputElement;
let input_2 = document.getElementById("input_2") as HTMLInputElement;

bnt?.addEventListener('click',() => {
    console.log( parseInt(input_1?.value) + parseInt(input_2?.value));
});