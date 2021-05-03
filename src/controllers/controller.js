const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://pbsizztakvcvmc:a820ad6cff2592315d7c1f37272f0dad32b9210ec1396e076669944a6becd99c@ec2-18-215-111-67.compute-1.amazonaws.com:5432/d9r7r70kms8gd8';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido putito'
    });
}

const getPersonajes = async (req, res) =>{
    const response = await pool.query('SELECT * FROM personajes;');
    res.status(200).json(response.rows);
}

module.exports = {
    welcome,
    getPersonajes
};