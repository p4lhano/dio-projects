"use strict";
var bnt = document.getElementById("btn");
var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");
bnt === null || bnt === void 0 ? void 0 : bnt.addEventListener('click', function () {
    console.log(parseInt(input_1 === null || input_1 === void 0 ? void 0 : input_1.value) + parseInt(input_2 === null || input_2 === void 0 ? void 0 : input_2.value));
});
