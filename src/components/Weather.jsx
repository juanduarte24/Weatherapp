import React, { useState } from 'react'
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/temp'

const weatherImg = {
    "01d": "/icons/sol.svg",
    "02d": "/icons/fewclouds.svg",
    "03d": "/icons/scateredclouds.svg",
    "04d": "/icons/brokenclouds.svg",
    "09d": "/icons/showerain",
    "10d": "/icons/rsain",
    "11d": "/icons/thunderstorm",
    "13d": "/icons/snow",
    "50d": "/icons/mist"
}


const Weather = ({ weatherInfo }) => {


    const [isCelsius, setIsCelsius] = useState(true)


    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }
    // console.log(weatherInfo)
    return (


        <section className='grid gap-6'>
            
            <section className='sm:grid-cols-2'>
                {/* seccion arriba */}
                <article className='p-3 bg-[#dbeafe]/70 shadow-md drop-shadow-xl shadow-indigo-500/40 text-center grid grid-cols-2 items-center rounded-xl font-[poppins]'>
                    <h2 className=' col-span-2 font-bold text-4xl '><i className='bx bxs-map-pin text-5xl '> </i> {weatherInfo?.name}, {weatherInfo?.sys?.country}</h2>
                    <h3 className=' capitalize text-2xl text-right mr-2'>{weatherInfo?.weather[0]?.description}</h3>
                    <div className='my-3'>
                        <img className='w-[50px] ml-2' src={weatherImg[weatherInfo?.weather[0]?.icon]} alt="clouds" />
                    </div>
                    <span className='text-6xl col-span-2 '>{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>
                    <span className='col-span-2 my-4'><button className='border-solid border-2 drop-shadow-lg shadow-lg shadow-indigo-500/40 p-2 rounded-sm bg-[#3b82f6] text-white' onClick={handleChangeTemp}>Cambiar F/C</button></span>
                    <div className='p-2 text-[20px] col-span-2 '>

                        <ul className='flex justify-between text-2xl'>
                            <li className='p-1'>
                            <i className='bx bx-wind text-3xl ' ></i> {weatherInfo?.wind?.speed} <span className='text-[16px]'>m/s</span>
                            </li>
                            <li className='p-1' >

                            <i className='bx bx-cloud text-3xl' ></i>{weatherInfo?.clouds?.all} <span className='text-[16px]'>%</span>
                            </li>
                            <li className='p-1'>

                            <i className='bx bx-water text-3xl' ></i>{weatherInfo?.main?.humidity} <span className='text-[16px]'>%</span>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>




        </section>

    )
}
export default Weather