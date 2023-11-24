const mysql2 = require('mysql2/promise');

const dbConfig = {
    host: 'src-database_mysql-1',
    user: 'root',
    password: '160503',
    database: 'ods'
};

exports.fetchIndicadores = async (id) => {
    const sqlQuery = `SELECT * FROM ods WHERE codigo = '${id}';`;
    console.log(sqlQuery);

    const connection = await mysql2.createConnection(dbConfig);
    const [rows] = await connection.query(sqlQuery);
    return rows;
};

exports.fetchObjetivos = async () => {
    const sqlQuery = 'SELECT * FROM objetivos;';

    const connection = await mysql2.createConnection(dbConfig);
    const [rows] = await connection.query(sqlQuery);
    return rows;
};
