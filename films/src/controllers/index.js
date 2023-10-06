const {chatchedAsync} = require("../utils");

module.exports = {
    getFilms: chatchedAsync(require("./getFilms")),
    getFilmById: chatchedAsync(require("./getFilmById")), 
    createFilms: chatchedAsync (require("./createFilms"))
};