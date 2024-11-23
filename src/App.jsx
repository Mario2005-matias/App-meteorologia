import { useState, useRef } from 'react'
import axios from "axios"
import './App.css'
import WeatherInformation from './components/WeatherInformation/WeatherInformation'
import WeatherInformation5Days from "./components/WeatherInformation5Days/WeatherInformation5Days"

function App() {
  {/*É importante lhe deixar vazio para que ele possa começar vazio consoante a condição abaixo */}
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()
  {/*Função para fazer busca da chave e do caminho da api */}
  async function searchCity() {
    const city = inputRef.current.value
    const key = "e00dde1193b834e842552c7b9bf77961"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    {/*url para prever os proximos 5 dias */}
    const URL5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    {/* fazendo busca */}
    const apiInfo = await axios.get(URL) 
    const apiInfo5Days = await axios.get(URL5Days)
    {/*Buscando os dados da apiWeather */}
    setWeather(apiInfo.data)

    setWeather5Days(apiInfo5Days.data)
    console.log(apiInfo5Days)
  }

  return (
    <div className='container'>
      <h1>SmartCode Previsão do Tempo</h1>
      <div className='containerInput'>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>
      </div>
      {/*weather && é uma estrutura condicional do react js que diz se o aplicativo não tiver dados não faça nada */}
      {weather && <WeatherInformation weather={weather} />}
      {weather5Days && <WeatherInformation5Days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
