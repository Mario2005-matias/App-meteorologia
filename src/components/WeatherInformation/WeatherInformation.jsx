/* eslint-disable react/prop-types */

export default function WeatherInformation({ weather }) {
    console.log(weather)

    return (
        <div className='WeatherInformation'>
            <h2>{weather.name}</h2>
            <div className='containerTempImg'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="imagem metereológica"/> 
                <p>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p>{weather.weather[0].description} </p>
            <div className='containerBottom'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}