const express = require('express');
const app = express();
const HOST = '0.0.0.0';
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));

const objetivo_routes = require('./routes/ObjetivoRoutes');
const indicador_routes = require('./routes/IndicadorRoutes');

app.use('/objetivos', objetivo_routes);
app.use('/indicador', indicador_routes);

app.listen(PORT, HOST);

module.exports = app;
