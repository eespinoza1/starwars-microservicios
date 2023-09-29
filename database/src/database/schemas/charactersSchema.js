const { Schema } = require("mongoose");

const characterSchema = new Schema({
    "_id": String,
    "name": String,
    "height": String,
    "mass": String,
    "hair_color": String,
    "skin_color": String,
    "eye_color": String,
    "birth_year": String,
    "gender": String,
    "homeworld": {type:String, ref:"Planet"}, //referencia al id de  planeta
    "films": [{type:String, ref:"Film"}]//array de referencias a peliculas
});

//listar colecciones
characterSchema.statics.list = async function(){
   return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
};

//obtener un documento
characterSchema.statics.get =  async function(id){
    return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

//crecion de un documento
characterSchema.statics.insert = async function(character){
    return await this.create(character)
}

module.exports = characterSchema;
