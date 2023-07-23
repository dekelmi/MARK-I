module.exports = function database (query) {

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jason'
})

connection.connect((err) => {
    if (err) {
        console.error('При подключении к базе данных произошла ошибка', err);
    } 
    else {
        console.log('Подключение прошло успешно');
    }
})

connection.query(query, (err, results) => {
    if (err) {
        console.error('Ошибка запроса', err);
    }
    else {
        console.log('Запрос выполнен', results);
    }
})

connection.end();
}