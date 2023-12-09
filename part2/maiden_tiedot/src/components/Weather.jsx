import { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({country}) => {
    const [weather,setWeather] = useState(null)
    const apikey = import.meta.env.VITE_WEATHERKEY
    const lat = country.latlng[0]
    const lon = country.latlng[1]
    let celsius = 0

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`)
          .then(weather => setWeather(weather.data))
      },[])
    if (weather)
        return (
            <>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <p>Wind {weather.wind.speed} m/s</p>
            </>
        )
    return
    <>
    <p>Error loading weather data</p>
    </>
}

export default Weather