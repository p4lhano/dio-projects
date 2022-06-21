import $ from 'jquery';

console.log("rodando");

$.fn.extend({
    novaFuncao(){
        console.log("Chamou função");
        
    }
});

$('body').novaFuncao();