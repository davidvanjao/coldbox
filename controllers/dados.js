const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listar(request, response) {
        try {
            // instruções SQL
            const sql = `select a.dados_id, c.loc_id, c.loc_razaoSocial, a.equip_id, b.equip_nome,  a.dados_temp, a.dados_umid, a.dados_data
                from 
                    dados a, 
                    equipamento b,
                    localizacao c
                where 
                    a.equip_id = b.equip_id
                and b.loc_id = c.loc_id;`; 

            //executa instruções SQL e armazena o resultado na variável usuários
            const dadosEquipamento = await db.query(sql); 
            const nItens = dadosEquipamento[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Dados por equipamento.', 
                dados: dadosEquipamento[0], 
                nItens                 
            });

        } catch (error) {
            //console.log(error);
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    },
}

