
module.exports = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    pool: {
        min:0,
        max:5,
        acquire: 30000,
        idle: 10000,
    }
}
