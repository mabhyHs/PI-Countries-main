const { Router } = require('express');
const { countries }  = require('./countries');
const { activities } = require('./activities');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.use('/countries', countries);
router.use('/activities', activities);
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
