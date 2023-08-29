import { Router } from "express";
import { listarClientes, salvar, listarNomeCliente, apagar} from "../repository/ClienteRepository.js";

let endpoints = Router();

endpoints.get('/listarclientes', async (req,resp) =>{
    let dados = await listarClientes();
    resp.send(dados);
});

endpoints.post('/salvar', async (req,resp) => {
    let cliente = req.body;
    let dados = await salvar(cliente);
    resp.send(dados)
});

endpoints.get('/listarclientes/cliente', async(req,resp) => {
    let nm = req.query.nome;
    let dados = await listarNomeCliente(nm);
    resp.send(dados)
});

endpoints.delete('/listarclientes/apagar', async(req,resp) =>{
    let id = req.query.id;
    let dados = await apagar(id)
    resp.send('cliente deletado das compras do nosso site com sucesso!!')
})



export default endpoints