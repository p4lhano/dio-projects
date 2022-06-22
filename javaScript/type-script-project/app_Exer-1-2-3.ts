// let bnt = document.getElementById("btn");
// let input_1 = document.getElementById("input_1") as HTMLInputElement;
// let input_2 = document.getElementById("input_2") as HTMLInputElement;

// bnt?.addEventListener('click',() => {
//     console.log( parseInt(input_1?.value) + parseInt(input_2?.value));
// });

// Desafios

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";
// 1Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface IEmployee {
    code?: number,
    name?: string
}

let employee: IEmployee = {};

employee.code = 10;
employee.name = "John";

// 2Como podemos melhorar o esse código usando TS? 

interface IPessoa{
    nome?: string,
    idade?: number,
    profissao?: EProfissao
}

enum EProfissao{
    Padeiro,
    Atriz
}

let pessoa1: IPessoa = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = EProfissao.Atriz

let pessoa2: IPessoa = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = EProfissao.Padeiro;

let pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: EProfissao.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: EProfissao.Padeiro
};


// 3 O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = String(0);

function somarAoSaldo(soma: number = 0) {
    campoSaldo.innerHTML = String( Number(campoSaldo.innerHTML) + soma);
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo( Number( soma.value ) );
});

botaoLimpar.addEventListener('click',  () => {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */

