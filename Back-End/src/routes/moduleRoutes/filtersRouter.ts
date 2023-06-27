import { Router } from 'express';
import controllerDbPokemons from '../../controllers/controllerDbPokemons';

const router: Router = Router();

router.get('/dbpokemons', controllerDbPokemons)
// router.get("")

export default router;