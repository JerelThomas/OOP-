const parcel=
{

    weight:0,

        weightprice(weight)
    {
        if (weight < 2.5) 
        {
            const price= weight * 3.50
            console.log(`The price of the your pracel if $${price.toFixed(2)}`)
        }

        else if (weight >= 2.5 && weight <= 5) 
        {
            const price= weight * 2.85
            console.log(`The price of the your pracel if $${price.toFixed(2)}`)
        }

        else if (weight > 5 && weight <= 7) 
        {
            const price= weight * 2.45
            console.log(`The price of the your pracel if $${price.toFixed(2)}`)
        }

        else if(weight > 7 ) 
        {
            const price= weight * 3.25
            console.log(`The price of the your pracel if $${price.toFixed(2)}`)
        }

    }

}

module.exports = parcel;  

