const express = require('express');
const morgan = require('morgan');
const router = require('./routers/Router');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(morgan('dev'));

app.use(cors());

app.use('/', router);

app.listen(PORT, () => console.log(`Server listening on PORT:${PORT}✨`));
