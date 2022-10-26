const jwt = require('jsonwebtoken');

const secretKey =
  '8MBNvWWHOqE4FBG5WN0mqzdmsdxjdgO1tZoUTYFdXXWHWhxfNylHJ9XIvSVPPtqKd8thaYs3Kx+G/VfPjR0uI5sS2keoeU9uibJVdlf8Vyj62nzKX4GgXB2OiSLqnmoGFsOCsgm8ck7DoAHWiKM1miGEHeqikKnvD1dKMXR4fTA/zdW+dlvSuch2vm0FuVM4lCEzUkwpDT5jQFW/wSlgqT6iTr/9vycO8MuZvw==%';

const getJWT = (req, res) => {
  const token = jwt.sign({ email: 'logan@test.kr', user_uid: 'oxqwfg9gvk_S1gM-eyFTr', user_idx: 11 }, secretKey);
  return res.send({token});
};

module.exports = { getJWT };
