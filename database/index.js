const server = require("./src/server");

const { Character, Film } = require("./src/database");


Film.list().then((res)=>console.log(res));
// Character.get(1).then((res)=>console.log(res));

// Character.insert({
//     _id: "300",
//     name: "jorge vega",
//     birth_year: "1991",
//     unCampoCualquiera:"hola",
// }).then((res) => console.log(res))

const PORT = 8004;
server.listen(PORT, () => {
    console.log(`Databases is running on port ${PORT}`);
});