import React, {useState} from "react";
import axios from "axios";
import "./App.css"

const App = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState()
  const [error, setError] = useState()
  const [background, setBackground] = useState()
  

  const apiKey = "38a49cb10c2d174c5a2a6a95742d23df"

  const fetchWeather = async () => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q:city,
          appid: apiKey,
          units:"metric"
        }
        
      })
      setWeather(response.data)
      setError()  
    }catch (error) {
      setError("City not found")
      setWeather(null)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchWeather()
  }

  return(
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Tempreture: {weather.main.temp} C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} kph</p>
        </div>
      )}
    </div>
  )
}
export default App
  
