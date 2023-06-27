import {Router, Request, Response} from 'express';
import controllerGetPokemons from '../../controllers/controllerGetPokemons';
import controllerPostPokemon from '../../controllers/controllerPostPokemon';

const router: Router = Router();

router.get('/', controllerGetPokemons)
router.post('/', controllerPostPokemon)


export default router;