const {chatchedAsync} = require("../utils");

module.exports = {
    getFilms: chatchedAsync(require("./getFilms")),
    createFilms: chatchedAsync (require("./createFilms"))
};