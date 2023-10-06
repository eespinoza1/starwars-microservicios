//const characters = require("./characters.json");
const axios = require('axios');
// const BASE_URL = "http://database:8004/Character";


module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Character");
        return result.data;
    },
    get: async (id) => {
        const result = await axios.get(`http://database:8004/Character${id}`);
        return result.data;
    },
    create: async () => {
        throw Error("hay un error al momento de crear un personaje")
    },

// // Función para actualizar un elemento por su ID (PUT)
//     update: async (id, newData) => {
//       const result = await axios.put(`${BASE_URL}/${id}`, newData);
//       return result.data;
//   },

// // Función para agregar un nuevo elemento (POST)
//    insertNewItem:  async (newItemData) => {
//       const result = await axios.post(BASE_URL, newItemData);
//       return result.data;
 
// },

// // Función para eliminar un elemento por su ID (DELETE)
//  delete:  async (id) => {
//     const result = await axios.delete(`${BASE_URL}/${id}`);
//     return result.data;

// },

}