const axios = require('axios');
const base64 = require('base-64');
const utf8 = require('utf8');
const tossSecretKey = 'test_sk_zXLkKEypNArWmo50nX3lmeaxYG5R';

const tossPaymentApproval = async (req, res) => {
  console.log(req.body);
  const { params } = req.body;
  const tossSecretKeyToBase64 = base64.encode(utf8.encode(`${tossSecretKey}:`));

  try {
    const tossRes = await axios.post('https://api.tosspayments.com/v1/payments/confirm', params, {
      headers: { Authorization: `Basic ${tossSecretKeyToBase64}` },
    });
    console.log(tossRes.data);
    return res.send({ result: 'success', tossRes });
  } catch (err) {
    const errData = err.response.data;
    console.log(errData)
    return res.status(err.response.status).send({ result: 'failed', errorCode: errData.code, errorMessage: errData.message });
  }
};

module.exports = { tossPaymentApproval };
