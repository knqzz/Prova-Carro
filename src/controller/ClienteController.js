import { Router } from "express";
import { listarClientes} from "../repository/ClienteRepository.js";

let endpoints = Router();

endpoints.get('/listarclientes', async (req,resp) =>{
    let dados = await listarClientes();
    resp.send(dados);
});


export default endpoints