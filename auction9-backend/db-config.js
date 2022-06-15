const db = require('serverless-mysql')({
    config: {
        host : 'localhost',
        database : 'auction9',
        user : 'root',
        password : '' 
    }
})

exports.db = db;