import express from 'express';
import morgan from 'morgan';
import router from './routers/Router.js';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());

app.use('/', router);

app.listen(PORT, () => console.log(`Server listening on PORT:${PORT}✨`));
