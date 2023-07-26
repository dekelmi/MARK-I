const axios = require('axios');

const apiKey = // Токен скрыт из соображений безопасности

async function getWeatherForecast(answer) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${answer}&units=metric&appid=${apiKey}`

    try {
        const response = await axios.get(apiUrl);
        const weatherData = response.data;

        const weatherDescription = weatherData.weather[0].description;
        const temperature = weatherData.main.temp;

        const weatherForecast = `Погода в городе ${answer}: ${weatherDescription}, Температура: ${temperature} градусов цельсия`;
        return weatherForecast;
    }
    catch (error) {
        console.error('Произошла ошибка при получении данных от сервиса', error.message);
        throw error;
    }
}

module.exports = {
    getWeatherForecast
}