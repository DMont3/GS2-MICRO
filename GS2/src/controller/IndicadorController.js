const repository = require('../repository/repository');

exports.get = async (req, res, next) => {
    const indicadorId = req.params.id;
    const indicadoresData = await repository.fetchIndicadores(indicadorId);

    if (!indicadoresData.length) {
        res.status(204).send("Nenhum indicador encontrado");
        return;
    }

    res.status(200).json({ indicadores: indicadoresData });
};
