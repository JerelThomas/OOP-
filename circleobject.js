
const area=
{
    radius:0,

    areacircle()
    {
        const area= 22/7 * this.radius**2
        return area;
    },

    circumfrencecircle()
    {
        const circumfrence=2* 22/7 * this.radius
        return circumfrence;

    },
}

module.exports = area;