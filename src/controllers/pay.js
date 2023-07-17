import axios from 'axios';
import base64 from 'base-64';
import utf8 from 'utf8';
const tossSecretKey = 'test_sk_BE92LAa5PVbJRQb0WNZV7YmpXyJj';

export const tossPaymentApproval = async (req, res) => {
  console.log(req.body);
  const { params } = req.body;
  const tossSecretKeyToBase64 = base64.encode(utf8.encode(`${tossSecretKey}:`));

  try {
    const tossRes = await axios.post('https://api.tosspayments.com/v1/payments/confirm', params, {
      headers: { Authorization: `Basic ${tossSecretKeyToBase64}` },
    });
    console.log('tossRes', tossRes);
    return res.send({ result: 'success', tossRes: tossRes.data });
  } catch (err) {
    console.log('error', err);
    const errData = err.response.data;
    return res
      .status(err.response.status)
      .send({ result: 'failed', errorCode: errData.code, errorMessage: errData.message });
  }
};
