const axios = require('axios');
const base64 = require('base-64');
const utf8 = require('utf8');
const tossSecretKey = 'test_sk_BE92LAa5PVbJRQb0WNZV7YmpXyJj';

const tossPaymentApproval = async (req, res) => {
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

module.exports = { tossPaymentApproval };
