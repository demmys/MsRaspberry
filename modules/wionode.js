const axios = require('axios');
const config = require('../config');

async function getDigitalLightLux() {
    let luxData = await axios.get(
        'https://us.wio.seeed.io/v1/node/GroveDigitalLightI2C0/lux',
        { params: { access_token: config.wionode.accessToken } }
    );
    return luxData.data.lux;
}

async function getTempHumProHumidity() {
    let humidityData = await axios.get(
        'https://us.wio.seeed.io/v1/node/GroveTempHumProD1/humidity',
        { params: { access_token: config.wionode.accessToken } }
    );
    return humidityData.data.humidity;
}

async function getTempHumProTemperature() {
    let temperatureData = await axios.get(
        'https://us.wio.seeed.io/v1/node/GroveTempHumProD1/temperature',
        { params: { access_token: config.wionode.accessToken } }
    );
    return temperatureData.data.celsius_degree;
}

module.exports = {
    getDigitalLightLux,
    getTempHumProHumidity,
    getTempHumProTemperature
};