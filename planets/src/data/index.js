const planets = require("./planets.json");
const axios = require("axios");

module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Planet");
        return result.data;
    },
    create: async () => {
        throw Error("hay un error al momento de crear un planeta")
    }
}