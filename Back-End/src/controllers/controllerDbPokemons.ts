import { Request, Response } from "express";

const controllerDbPokemons = async (_req: Request, res: Response) => {
    try {
        res.status(200).send({msg: "controllerDbPokemons"})
    } catch (error) {
        console.log("Error on 'controllerDbPokemons'");
        console.log(error);
    }
};

export default controllerDbPokemons;