const {chatchedAsync} = require("../utils");

module.exports = {
    getPlanets: chatchedAsync(require("./getPlanets")),
    getPlanetById: chatchedAsync(require("./getPlanetById")),
    createPlanets:chatchedAsync (require("./createPlanets"))
};