"use strict";
let user = {
    name: "Sergio",
    age: 22,
    medos: true,
};
let json = JSON.stringify(user);
alert(typeof json);
const obj = JSON.parse(json);
alert(typeof obj);
for (let key in obj) {
    alert(key, obj[key]);
};