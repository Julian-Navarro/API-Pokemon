import { Request, Response } from "express"
import PokemonModel, { Pokemon } from "../models/Pokemon";

const controllerGetPokemonId: (req: Request, res: Response) => void 
    = async (req: Request, res: Response) => {
    try {
        let { id, evolutionGroup } = req.query;
        
        let pokemons = await PokemonModel.find().where({ evolutionGroup })
        if(pokemons[0] != null) {
            let newPokemon: any = pokemons.find((poke) => poke.id == id);
            let newObj = {...newPokemon.toObject(), chain: pokemons}
            console.log("newArr: ", newObj);
            res.status(200).send(newObj)
        } else {
            res.status(404).send({msg: "Error: Pokemon by Id was not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
};

export default controllerGetPokemonId