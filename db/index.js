const mysql = require("mysql2");

const pool =  mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Herman01@",
    database: "bestbuy"
});



const query = (queryString , values) => {
    return new Promise((resolve , reject) => {
        pool.query(queryString , values, (err, results) => {
            if(err) reject(err)
            resolve(results);
        })
    })

}


module.exports = query;
