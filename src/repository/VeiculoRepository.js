import conexao from "./connection.js";

export async function veiculo() {
    let sql = 'select ds_modelo as Modelo, ds_marca	as Marca, nr_ano	as Ano, ds_placa as Placa, ds_tipo	as Tipo from tb_veiculo inner join tb_tipo_veiculo on tb_veiculo.id_tipo_veiculo = tb_veiculo.id_veiculo'

    let resp = await conexao.query(sql)
    let dados = resp[0]

    return dados;
}
export async function apagar(id){
    let sql = 'delete from tb_veiculo where id_veiculo = ?';
    let resp = await conexao.query(sql , [id]);

    let dados = resp[0];
    return dados
}
