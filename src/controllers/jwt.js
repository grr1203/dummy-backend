const jwt = require('jsonwebtoken');

const getJWT = (req, res) => {
  const token = jwt.sign({ email: 'logan@test.kr' }, 'logan');
  return res.send(token);
};

module.exports = { getJWT };
