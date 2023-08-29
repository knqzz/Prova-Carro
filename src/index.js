import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import clienteController from './controller/ClienteController.js'

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(clienteController);
servidor.listen(process.env.PORT, () => console.log('A API subiu!!'));