const characters = require("./characters.json")
module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Character");
        return result.data;
    },

    create: async () => {
        throw Error("hay un error al momento de crear un personaje")
    }

}