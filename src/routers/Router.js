const express = require('express');
const { getJWT } = require('../controllers/jwt');

const router = express.Router();

router.get('/jwt', getJWT);

module.exports = router;
