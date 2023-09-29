const {chatchedAsync} = require("../utils");

module.exports = {
    getPlanets: chatchedAsync(require("./getPlanets")),
    createPlanets:chatchedAsync (require("./createPlanets"))
};