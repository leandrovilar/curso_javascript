"use strict";

const container = document.querySelector(".container");

console.log(container.children);
console.log(container.childNodes);

const children = Array.from(container.children);

//console.log(children);

children.forEach((res) => {
    console.log(res);
});