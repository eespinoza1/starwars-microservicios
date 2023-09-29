const mongoose = require("mongoose");
const{ MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

//lo definimos directamente en la exportacion 
// const Character = conn.model("Character", require("./schemas/charactersSchema"));
// const Film = conn.model("Film", require("./schemas/filmSchema"));
// const Planet = conn.model("Planet", require("./schemas/planetSchema"));

// Character.find()
// .populate("films",["_id","title"])
// .then((res)=> console.log(res[0]));

module.exports = {
    Character: conn.model("Character", require("./schemas/charactersSchema")),
    Film: conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema")),
}