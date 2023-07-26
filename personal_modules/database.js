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
        setTimeout(() => {
        console.error('При подключении к базе данных произошла ошибка', err);
        }, 500)
    }
    else {
        setTimeout(() => {
            console.log('Подключение к базе данных прошло успешно');
        }, 500)
    }
})

connection.query(query, (err, results) => {
    if (err) {
        setTimeout(() => {
            console.error('Ошибка запроса', err);
        }, 1000);
    }
    else {
        setTimeout(() => {
            console.log('Ответ', results);
        }, 1000);
    }
})

connection.end();

}