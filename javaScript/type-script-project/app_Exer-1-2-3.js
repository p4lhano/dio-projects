"use strict";
// let bnt = document.getElementById("btn");
// let input_1 = document.getElementById("input_1") as HTMLInputElement;
// let input_2 = document.getElementById("input_2") as HTMLInputElement;
var employee = {};
employee.code = 10;
employee.name = "John";
var EProfissao;
(function (EProfissao) {
    EProfissao[EProfissao["Padeiro"] = 0] = "Padeiro";
    EProfissao[EProfissao["Atriz"] = 1] = "Atriz";
})(EProfissao || (EProfissao = {}));
var pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = EProfissao.Atriz;
var pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = EProfissao.Padeiro;
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: EProfissao.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: EProfissao.Padeiro
};
// 3 O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = String(0);
function somarAoSaldo(soma) {
    if (soma === void 0) { soma = 0; }
    campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + soma);
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
