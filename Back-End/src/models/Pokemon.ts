import mongoose, { Schema, model } from 'mongoose';


export interface Pokemon extends mongoose.Document {
    _id: Number,
    name: String,
    types: Array<String>,
    lifePoints: Number,
    attackPoints: Number,
    defensePoints: Number,
    speedPoints: Number,
    heigth: Number,
    weigth: Number,
    img: String,
    evolutionGroup: Number,
    isFromApi: Boolean,    
}
 
const PokemonSchema = new Schema({
    _id: Number,
    name: String,
    types: Array<String>,
    lifePoints: Number,
    attackPoints: Number,
    defensePoints: Number,
    speedPoints: Number,
    heigth: Number,
    weigth: Number,
    img: String,
    evolutionGroup: Number,
    isFromApi: Boolean,
});


export default model<Pokemon>("Pokemon", PokemonSchema);