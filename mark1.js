// Импорт необходимых для работы программы модулей
const readline = require("readline");
const personalAnswer = require("./personal_modules/personalAnswer");
const database = require('./personal_modules/database');
const apiwork = require('./personal_modules/apiwork');
const objects = require('./personal_modules/objects');


// Деструктуризация обьектов из модуля objects
const {aboutProgramm, databasequery, weatherForecast, help} = objects;

// Создание readline интерфейса для реализации возможности получения ответа от пользователя
let rl = readline.createInterface(process.stdin, process.stdout);

console.log("Доброго времени суток.\n\nЯ 'MARK I' - интерактивный хелпер разработанный на 'Node.js'\nВведите 'help' чтобы открыть список доступных вопросов\nСоздатель:'Kelmi'");


// Обработка ввода от пользователя
function newQuestion() {
    rl.question("\n\nЗадайте вопрос, и я постараюсь ответить на него:\n", function(answer) {
        if (aboutProgramm.hasOwnProperty(answer)) {
            console.log(aboutProgramm[answer]);
            newQuestion();
        }
        else if (answer === 'Как дела?') {
            var randomMath = Math.random();

            if (randomMath > 0.6) {
                console.log('Всё отлично, как у Вас?');
                personalAnswer(rl, newQuestion);
            }
            else if (randomMath > 0.3) {
                console.log('Всё замечательно, как дела у Вас?');
                personalAnswer(rl, newQuestion);
            }
            else {
                console.log('У меня всё хорошо, а у Вас?');
                personalAnswer(rl, newQuestion);
            } 
            newQuestion();
        }
        else if (answer === 'Где расположен твой код?' || answer === 'Где можно посмотреть твой код?') {
            console.log('Ссылка на GitHub репозиторий где распологается код: "https://github.com/Kelmicode/MARK-I"');
            newQuestion();
        }
        else if (databasequery.hasOwnProperty(answer)) {
            database(databasequery[answer]);
            setTimeout(() => {
                newQuestion();
            }, 2000);
        }
        else if (weatherForecast.hasOwnProperty(answer)) {
            async function main() {
                try {
                    const weather = await apiwork.getWeatherForecast(weatherForecast[answer]);
                    console.log(weather);
                }
                catch (error) {
                    console.error('Ошибка', error.message);
                }
            }
            main();
            setTimeout(() => {
                newQuestion();
            }, 2200)
        }
        else if (answer === 'help') {
            console.log(help);
            newQuestion();
        }
        else {
            console.log('Такой вопрос не поддерживается :(');
            newQuestion();
        }
})}

newQuestion();