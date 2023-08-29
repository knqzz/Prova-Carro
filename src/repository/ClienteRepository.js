import conexao from "./connection.js";

export async function listarClientes() {
    let sql = 'Select * From tb_Cliente';

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}

export async function salvar(cliente) {
    let sql = 'insert into tb_cliente (nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh) values(?, ?, ?, ?, ?)'
    
    let resp = await conexao.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh]);
    let dados = resp[0];

    cliente.id = dados.InsertId
    return cliente;
}

export async function listarNomeCliente(nm) {
    let sql = 'select * from tb_cliente where nm_cliente like ?'

    let resp = await conexao.query(sql, ['%'+nm+'%'])
    let dados = resp[0]

    return dados;
}

export async function apagar(id){
    let sql = 'delete from tb_cliente where id_cliente like ?';
    let resp = await conexao.query(sql , ['%'+id+'%']);

    let dados = resp[0];
    return dados;
}
