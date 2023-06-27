import { Request, Response } from "express"
import PokemonModel, { Pokemon } from "../models/Pokemon";

const controllerGetPokemons = async (_req: Request, res: Response) => {
    try {
        let pokemons: Array<Pokemon> = await PokemonModel.find();
        pokemons.length
        ? res.status(200).send(pokemons)
        : res.status(404).send([ { msg: "Error get pokemons DB" } ])
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
};

export default controllerGetPokemons;