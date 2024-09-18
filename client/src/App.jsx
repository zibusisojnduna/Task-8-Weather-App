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

  // const updateBackgound = (weatherType) => {
  //   const background = {
  //     Clear:"url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fclear%2520sky%2F&psig=AOvVaw0nxX-1KVTp31VbNXreCDE0&ust=1726752834962000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMi8munOzIgDFQAAAAAdAAAAABAE)",
  //     Cloudy:"url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACloudy_sky_%252826171935906%2529.jpg&psig=AOvVaw1jnE8gKN1zj97Wtq6tbgVZ&ust=1726753181708000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLj_uZHQzIgDFQAAAAAdAAAAABAE)",
  //     Rain:"url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Drain%2Bsky&psig=AOvVaw0r8_qx03i93dqPWKaL-ZgI&ust=1726753790052000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCS0qTRzIgDFQAAAAAdAAAAABAE)",
  //     Snow:"url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsnowing-sky&psig=AOvVaw3QahJSdIxLT0gK-Tw6dZQU&ust=1726754015591000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMix3pDSzIgDFQAAAAAdAAAAABAE)"
  //   }
  //   setBackground(background[weatherType])
  // }

  return(
    <div className="App" >
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
  
