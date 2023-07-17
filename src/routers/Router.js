import express from 'express';
import { getJWT } from '../controllers/jwt.js';
import { tossPaymentApproval } from '../controllers/pay.js';
import { kafkaTest } from '../controllers/kafka.js';
import { webpushTest } from '../controllers/webpush.js';

const router = express.Router();

router.get('/jwt', getJWT);
router.post('/pay/toss', tossPaymentApproval);
router.post('/kafka', kafkaTest);
router.post('/webpush', webpushTest);

export default router;
