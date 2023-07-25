const apiwork = require('./apiwork')

async function main() {
    try {
        const city = 'Cherepovets';
        const weatherForecast = await apiwork.getWeatherForecast(city);
        console.log(weatherForecast);
    }
    catch (error) {
        console.error('Ошибка', error.message);
    }
}

main();