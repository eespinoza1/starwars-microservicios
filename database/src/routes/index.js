const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares")


const router = Router();

//ruta general para listar pasando todos los modelos en un mismo metodo get
router.get("/:model", validateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
});

//ruta por id
router.get("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
});


// // Ruta para actualizar un elemento por su ID (PUT)
// router.put("/:model/:id", validateModel, async (req, res) => {
//     const { model, id } = req.params;
//     const newData = req.body; // Los nuevos datos a aplicar
//       const updatedItem = await store[model].put(id, newData);
//       res.status(200).json(updatedItem);
   
//   });
  
//   // Ruta para eliminar un elemento por su ID (DELETE)
//   router.delete("/:model/:id", validateModel, async (req, res) => {
//       const { model, id } = req.params;
//       const deletedItem = await store[model].delete(id);
//       res.status(200).json(deletedItem);
//   });

//   // Ruta para agregar un nuevo elemento (POST)
// router.post("/:model", validateModel, async (req, res) => {
//       const { model } = req.params;
//       const newItemData = req.body; // Datos del nuevo elemento a agregar
//       const newItem = await store[model].insert(newItemData);
//       res.status(201).json(newItem);
//   });
  
  






module.exports = router;
