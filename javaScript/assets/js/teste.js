var numeroAtualWrapper = document.getElementById('numeroAtual');
var numeroAtualWrapper2 = document.getElementById('numeroAtual2');
var numeroAtual = 0;

var numeroAtual2 = 0;

var btnAddWrapper = document.getElementById('add');
btnAddWrapper.addEventListener("click",increment2);

function increment(){
    numeroAtual++;
    numeroAtualWrapper.innerHTML = numeroAtual;
}

function increment2(){
    console.log("increment2 chamado")
    numeroAtual2++;
    document.getElementById('numeroAtual2').innerHTML = numeroAtual2;
}

function decrement(){
    numeroAtual--;
    numeroAtualWrapper.innerHTML = numeroAtual;
}

