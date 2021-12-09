



const person=
{

    firstname:"jerry",
    middle:"TT",
    lastname:"tompson",
    yearofbirth:1989,
    gender:"male",
    isEmployed:true,


    random()
    {

        console.log(`it works`);
    },


    getfullname()
    {
         
        const fullname=`${this.firstname} ${this.middle} ${this.lastname}`
        return fullname ;

    },

    calculateage(currentyear)
    {

        return currentyear-this.yearofbirth
    },



}


//calling property from inside
console.log(person.firstname);


//calling function from inside
person.random();


//chaging values
console.log(person.isEmployed)
person.isEmployed=false
console.log(person.isEmployed)

//printing out full name
console.log(`${person.firstname} ${person.middle} ${person.lastname}`)

//or

console.log(person.getfullname());

//more

const printinfo=(p)=>
{
    console.log(`personfull name: ${p.getfullname()}`)

    console.log(`person year: ${p.yearofbirth}`)

}
//calling the function
printinfo(person);

//more functions



    console.log(`age = ${person.calculateage(2021)}`)
