import { Router, Request, Response } from "express";
import pokemonRouter from "./moduleRoutes/pokemonRouter"
import filtersRouter from "./moduleRoutes/filtersRouter"

const router: Router = Router();
router.use("/pokemons", pokemonRouter)
router.use('/filters', filtersRouter)

export default router