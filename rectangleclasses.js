const prompt = require ("prompt-sync")();


const main=(()=>
{

const rectangle= require("./rectangle.js")


let length=parseInt( prompt("enter a length: "));

let width=parseInt( prompt("enter a width: "));

const rec1=new rectangle(length,width);
rec1.areaofrec();
rec1.perimeterpofrec();


length=parseInt( prompt("enter a length: "));

width=parseInt( prompt("enter a width: "));

const rec2=new rectangle(length,width);
rec2.areaofrec();
rec2.perimeterpofrec();


length=parseInt( prompt("enter a length: "));

width=parseInt( prompt("enter a width: "));

const rec3=new rectangle(length,width);
rec3.areaofrec();
rec3.perimeterpofrec();






})();