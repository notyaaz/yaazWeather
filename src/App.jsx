import axios from 'axios'
import React, { useEffect, useState } from 'react'

const key = '566f10b3db986e6ed4d8cfc539edfa94'
const api = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

export default function App() {

  const [city, setCity] = useState("")
  const [temp,setTemp] = useState(0)

  async function getData(){
    let {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
    let {main} = data
    setTemp(main.temp)
  }

  function handleSearch(e){
    e.preventDefault()
    getData()
  }

  return (
    <div className='app d-flex justify-content-center align-items-center flex-column'>
      <form onSubmit={handleSearch} className='d-flex gap-3 mb-5'>
        <p className='form-label'>Choose City</p>
        <input onChange={(e)=>{setCity(e.target.value)}} value={city} type="text" className="form-control" />
        <input className='btn btn-primary' type="submit" value="Search" />
      </form>
      <h3>the tempeture is: {temp}c</h3>
    </div>
  )
}
