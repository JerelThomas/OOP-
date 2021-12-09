const prompt = require ("prompt-sync")();

const main=(()=>
{

    const area= require("./circleclass.js")

    area.radius=parseInt( prompt("enter a radius: "));



    console.log(`the area of the circle is ${area.areacircle().toFixed(2)}`)

    console.log(`the circumfrence of the circle is ${area.circumfrencecircle().toFixed(2)}`)


})();