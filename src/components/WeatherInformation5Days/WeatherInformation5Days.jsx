/* eslint-disable react/prop-types */
import "./WeatherInformation5Days.css";

export default function WeatherInformation5Days({ weather5Days }) {
  console.log(weather5Days);

  let dailyForeCast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    if (!dailyForeCast[date]) {
      dailyForeCast[date] = forecast;
    }
  }

  {
    /*fatiando ou dividindo os dias */
  }
  const nextFiveDays = Object.values(dailyForeCast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-Br", {
      weekday: "short",
      day: "numeric",
    });
    return newDate;
  }

  return (
    <div className="WeatherInformation5Days">
      <h3>Previsão proximos 5 dias</h3>

      <div className="weather-list">
        {nextFiveDays.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p>{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt="imagem metereológica"
            />
            <p>
              {Math.round(forecast.main.temp_min)}°C /{" "}
              {Math.round(forecast.main.temp_max)}°C
            </p>
            <p className="weather-descriptio">{forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
