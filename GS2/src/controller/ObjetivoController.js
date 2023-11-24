const repository = require('../repository/repository');

exports.get = async (req, res, next) => {
    try {
        const objetivosData = await repository.fetchObjetivos();

        res.status(200).json({ objetivos: objetivosData });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno no servidor");
    }
};
