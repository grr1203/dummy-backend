const express = require('express');
const { getJWT } = require('../controllers/jwt');
const { tossPaymentApproval } = require('../controllers/pay');
const { kafkaTest } = require('../controllers/kafka');

const router = express.Router();

router.get('/jwt', getJWT);
router.post('/pay/toss', tossPaymentApproval);
router.post('/kafka', kafkaTest);

module.exports = router;
