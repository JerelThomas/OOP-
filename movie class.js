
class movie
{
    title;
    description;
    rating;
    agelimit;

    constructor(t,des,r,al)
    {
        this.title=t;
        this.description=des;
        this.rating=r;
        this.agelimit=al;
    }

    showresults()
    {
        console.log(`******Show******`)
        console.log(`Title: ${this.title}`)
        console.log(`Description: ${this.description}`)
        console.log(`rating: ${this.rating}`)
        console.log(`Age: ${this.agelimit}`)

    }


}  

module.exports = movie;
