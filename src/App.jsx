import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './components/Weather'
import Loader  from './components/Loader'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  const [weatherInfo, setWeatherInfo] = useState(null)
  console.log(weatherInfo)
  const success = (pos) => {
    const lat = pos.coords?.latitude
    const lon = pos.coords?.longitude

    const API_KEY = '4c16a56b6ce98174cb9a6002e5b2a731'

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es`

    axios.get(URL)
      .then(resp => {
        setWeatherInfo(resp.data)
        setTimeout(() => {
          setIsLoading(false)

        }, 200);
      })
      .catch((error) => console.error(error))
  }


  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(success);

  }, [])

  return (
    
    <main className='bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex text-black
     justify-center items-center p-3 '>
      {isLoading && <Loader/>}

      <Weather weatherInfo={weatherInfo} />

    </main>
  )
}

export default App
