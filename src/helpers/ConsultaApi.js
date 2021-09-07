
const ConsultaApiPlaces = async (city) => {

    const params = {
        access_token: process.env.REACT_APP_MAPBOX_KEY,
        limit: 5,
        lang: 'es'
    }

    try {
        const urlAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${params.access_token}&limit=${params.limit}&language=${params.lang}`;
        const response = await fetch(urlAPI);
        const data = await response.json();

        const dataArray = data.features.map(city => ({
          nombre: city.place_name,
          lat: city.center[1],
          long: city.center[0],
        }));

        return dataArray;

    } catch (error) {
        throw error;
    }
};


export const ConsultaApiCoords = async(lat, long) => {

    const params = {
        access_token: process.env.REACT_APP_OPENWEATHER_KEY,
        units: 'metric',
        lang: 'es',
    }

    try {
        const urlAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${params.access_token}&units=${params.units}&lang=${params.lang}`
        const response = await fetch(urlAPI);
        const data = await response.json();
    
        const {weather, main} = data;

        console.log(weather[0].description, main.temp, main.temp_min, main.temp_max)
        
        return{
            icon: weather[0].icon,
            desc: weather[0].description,
            min: main.temp_min,
            max: main.temp_max,
            humedad: main.humidity,
            temp: main.temp
        }
        
    } catch (error) {
       throw error;
    }

};

export default ConsultaApiPlaces;
