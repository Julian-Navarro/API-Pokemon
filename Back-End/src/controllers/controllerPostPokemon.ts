import { Request, Response } from "express";
import PokemonModel, { Pokemon } from "../models/Pokemon";

const controllerPostPokemon: (req:Request, res:Response) => Object = async (req, res) => {
    try {
        const { 
            name, 
            types, 
            lifePoints, 
            attackPoints, 
            defensePoints, 
            speedPoints, 
            heigth, 
            weigth, 
            img,
        } = req.body;

        if (!name ||
            !types?.length ||
            !lifePoints ||
            !attackPoints ||
            !defensePoints ||
            !speedPoints ||
            !heigth ||
            !weigth ||
            !img
            ) {
                console.log("Missing info on controllerPostPokemon");
                return res.status(404).send({msg: "Missing info to create a Pokemon"})
            } else {
                const newPokemon: Pokemon = new PokemonModel(req.body);
                await newPokemon.save()
    
                console.log("Pokemon Created - ",newPokemon);
                res.status(200).send({msg: 'Pokemon created', newPokemon})
                
        }
        
        
    } catch (error) {
        console.log("Error on 'controllerPostPokemon'");
        console.log(error);
        res.status(404).send(error)
    }
}

export default controllerPostPokemon