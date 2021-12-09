const prompt = require ("prompt-sync")();
const main= (()=>
{


    const parcel= require("./parcelclass.js")

    parcel.weight= parseFloat( prompt("Enter the weight of your parcel: "));
    
    parcel.weightprice(parcel.weight);



})();
