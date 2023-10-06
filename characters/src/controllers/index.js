const {chatchedAsync} = require("../utils")

module.exports = {
    getCharacters: chatchedAsync(require("./getCharacters")),
    getCharacterById: chatchedAsync(require("./getCharacterById")),
    createCharacters: chatchedAsync(require("./createCharacter"))
};