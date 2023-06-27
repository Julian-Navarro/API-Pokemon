import { Router, Request, Response } from "express";
import pokemonRouter from "./moduleRoutes/pokemonRouter"

const router: Router = Router();
router.use("/pokemons", pokemonRouter)

export default router