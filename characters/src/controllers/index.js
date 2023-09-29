const {chatchedAsync} = require("../utils")

module.exports = {
    getCharacters: chatchedAsync(require("./getCharacters")),
    createCharacters: chatchedAsync(require("./createCharacter"))
};