function verifyPalindrome(stringRecebida){
    if(!stringRecebida) return ;
    let arrayRecebidoInvet = [] ;
    let stringInverse = '';
    arrayRecebidoInvet =  stringRecebida.split('').reverse();
    for(a of arrayRecebidoInvet){
        stringInverse += a;
    };
    return stringRecebida === stringInverse
};

function verifyPalindromeDio(stringRecebida){
    if(!stringRecebida) return ;
    return stringRecebida.split('').reverse().join('') === stringRecebida
}

function segundaSolucao(stringRecebida){
    if(!stringRecebida) return ;
    // let arrayRecebido = stringRecebida.split('') ;
    // console.log(arrayRecebido.length)
    for(let i = 0 , ii = stringRecebida.length-1 ; i < stringRecebida.length/2; i++,ii-- ){
        // console.log(arrayRecebido[i],arrayRecebido[ii]);
        // console.log(arrayRecebido[i] === arrayRecebido[ii]);
        if(!(stringRecebida[i] === stringRecebida[ii])){
            // console.log('Chegou aqui')
            return false;
        }
    };
    return true;
};

let strg = 'ovo'

console.log(verifyPalindrome(strg));
console.log(verifyPalindromeDio(strg));

console.log(segundaSolucao(strg));