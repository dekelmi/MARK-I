// Тестовый файл для проверки работы с API погодного сервиса

const apiwork = require('./apiwork')

async function main() {
    try {
        const city = 'Moscow';
        const weatherForecast = await apiwork.getWeatherForecast(city);
        console.log(weatherForecast);
    }
    catch (error) {
        console.error('Ошибка', error.message);
    }
}

main();