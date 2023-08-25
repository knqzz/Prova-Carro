import cors from 'cors';
import express from 'express';
import 'dotenv/config';

import clienteController from './controller/ClienteController.js';
import veiculoController from './controller/VeiculoController.js';
import tipoveiculoController from './controller/TipoVeiculoController.js';

let servidor = express();
servidor.use = (cors());
servidor.use = (express.json());

servidor.use(clienteController);
servidor.use(veiculoController);
servidor.use(tipoveiculoController);

servidor.listen(process.env.PORT, () => console.log('API Subiu!'));