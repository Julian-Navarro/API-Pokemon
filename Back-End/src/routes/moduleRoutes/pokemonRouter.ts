import {Router, Request, Response} from 'express';
import controllerGetPokemons from '../../controllers/controllerGetPokemons';
import controllerPostPokemon from '../../controllers/controllerPostPokemon';
import controllerGetPokemonId from '../../controllers/controllerGetPokemonId';
import controllerGetPokemonByName from '../../controllers/controllerGetPokemonByName';

const router: Router = Router();

router.get('/id', controllerGetPokemonId)
router.get('/', controllerGetPokemons)
router.post('/', controllerPostPokemon)
router.get('/name', controllerGetPokemonByName)


export default router;