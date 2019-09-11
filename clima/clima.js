const axios = require('axios');



const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ef5ddca6689de94f9d52027ef32d71ed&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}