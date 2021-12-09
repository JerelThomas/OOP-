class rectangle
{
    length;
    width;

    constructor(l,w)
    {
        this.length=l;
        this.width=w;
    }

    areaofrec()
    {
        const area= this.length * this.width
        console.log(`The area of the rectangle is ${area}`)
    };

    perimeterpofrec()
    {
        const perimeter= 2 * (this.length + this.width)
        console.log(`The perimeter of the rectangle is ${perimeter}`)

    };
}

module.exports = rectangle;  