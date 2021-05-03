const { Router } = require('express');
const router = Router();

const { welcome, getPersonajes } = require('../controllers/controller.js')

router.get('/', welcome);
router.get('/personajes', getPersonajes);

module.exports = router;