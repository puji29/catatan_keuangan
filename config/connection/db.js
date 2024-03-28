const { Pool } = require("pg")

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'catatan_keuangan',
    password: 'password',
    port: 5433
})

module.exports= db;