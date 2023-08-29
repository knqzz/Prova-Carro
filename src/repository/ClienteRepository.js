import conexao from "./connection.js";

export async function listarClientes() {
    let sql = 'Select * From tb_Cliente';

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}

export async function inserir(cliente) {
    let sql = 'insert into tb_cliente (nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh) values(?, ?, ?, ?, ?)'
    
    let resp = await conexao.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh]);
    let dados = resp[0];

    cliente.id = dados.InsertId
    return cliente;
}

export async function listarNomeCliente() {
    let sql = 'select nm_cliente as Cliente from tb_cliente where nm_cliente like ?'

    let resp = await conexao.query(sql)
    let dados = resp[0]

    return dados;
}

export async function apagar(id){
    let sql = 'delete from tb_cliente where id_cliente = ?';
    let resp = await conexao.query(sql , [id]);

    let dados = resp[0];
    return dados;
}
