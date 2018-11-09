"use strict";
let garden = new Garden();
setInterval(function() {
    garden.passDay();
}, 5000);
console.log(garden.trees);
