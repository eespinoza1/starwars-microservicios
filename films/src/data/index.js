const films = require("./films.json")
module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Film");
        return result.data;
    },
    create: async ()=>{
        throw Error("hay un error al momento de crear una pelicula")
    }
}