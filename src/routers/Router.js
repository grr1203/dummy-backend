const express = require('express');
const { getJWT } = require('../controllers/jwt');
const { tossPaymentApproval } = require('../controllers/pay');

const router = express.Router();

router.get('/jwt', getJWT);
router.post('/pay/toss', tossPaymentApproval);

module.exports = router;
