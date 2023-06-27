import { Request, Response } from "express";
import PokemonModel from "../models/Pokemon";
import axios from "axios"
const controllerGetPokemonByName: (req: Request, res: Response) => void 
= async (req: Request, res: Response) => {
    try {
        const { name } = req.query;
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((res) => {
            return {
                _id:res.data.id,
                name:res.data.name,
                img:res.data.sprites.other.home.front_default,
                lifePoints:res.data.stats[0].base_stat,
                attackPoints:res.data.stats[1].base_stat,
                defensePoints:res.data.stats[2].base_stat,
                speedPoints:res.data.stats[5].base_stat,
                height:res.data.height,
                weight:res.data.weight,
                types:res.data.types.map((t:any)=>t.type.name),
                // evolutionGroup: ,
                isFromApi: true
            }
        
        })
        res.status(200).json(pokemon)
    } catch (error) {
        console.log("Error on 'controllerGetPokemonByName'");
        console.log(error);
        res.status(404).send(error)
    }
};

export default controllerGetPokemonByName;