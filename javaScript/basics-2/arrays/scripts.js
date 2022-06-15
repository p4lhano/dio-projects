let arrayVitor = ['string1','string2','string3','string4','string5','string6','string7'];

console.log(arrayVitor);
arrayVitor.push('new Iten');


arrayVitor.forEach((content,i) => {
    console.log(i,content);
});

arrayVitor.pop();/* remove o ultimo indece */
arrayVitor.shift();/* remove o primeiro indece */

console.log(arrayVitor);

console.log(arrayVitor.indexOf('string3'));

arrayVitor.slice(0,10);/* Retorna um arra com bases nos indeces */

console.log(arrayVitor.slice(0,10));
console.log(arrayVitor);
arrayVitor.splice(0,2)/*Não entendi ver depois */



console.log(arrayVitor);