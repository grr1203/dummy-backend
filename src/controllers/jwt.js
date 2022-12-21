const jwt = require('jsonwebtoken');

const secretKey =
  '8MBNvWWHOqE4FBG5WN0mqzdmsdxjdgO1tZoUTYFdXXWHWhxfNylHJ9XIvSVPPtqKd8thaYs3Kx+G/VfPjR0uI5sS2keoeU9uibJVdlf8Vyj62nzKX4GgXB2OiSLqnmoGFsOCsgm8ck7DoAHWiKM1miGEHeqikKnvD1dKMXR4fTA/zdW+dlvSuch2vm0FuVM4lCEzUkwpDT5jQFW/wSlgqT6iTr/9vycO8MuZvw==%';

const getJWT = (req, res) => {
  // const token = jwt.sign({ email: 'logan@test.kr', uid: 'PIr6Vz0atjkfHRkyZCmn7', idx: 115, organization_idx: 46}, secretKey);
  const token = jwt.sign(
    { email: 'logan@test.kr', uid: 'x62QHEWUWxv7xzGU5lc7g', idx: 348, organization_idx: 198 },
    secretKey
  ); //stag
  return res.send({ token });
};

module.exports = { getJWT };
