const knex = require('../database');

module.exports = {
    // Mostrando todos os dados
    async read(req, res) {
        const results = await knex('campeoes')
        return res.json(results);
    },

    // Criando novos dados
    async create(req, res, next) {
        try {
            const { username } = req.body
            await knex('campeoes').insert({
                username
            })

            return res.status(201).send('Campeão adicionado')
        }catch (error) {
            next(error)
        }
        
    },

    // Atualizando os dados existentes via ID
    async update(req, res, next) {
        try {
            const { username } = req.body
            const { id } = req.params

            await knex('campeoes')
            .update({ username })
            .where({ id })

            return res.send('O campeão foi atualizado');

        }catch (error) {
            next(error)
        }
    },

    // Deletando os dados existentes via ID
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('campeoes')
            .where({ id })
            .del()

            return res.send('O campeão foi deletado')

        }catch (error) {
            next(error)
        }
    }
}