import React from 'react'
import { useState } from 'react'

const Esm = ( {cars} ) => {

    const [car, setCar]=useState(cars)
    const [carName,setCarName]=useState("")
    const [carModelNo,setCarModelNo]=useState("")
    const [carYear,setCarYear]=useState('')

    const handleCarName=(event)=>{
        setCarName(event.target.value)
    }

    const handleCarModelNo=(event)=>{
        setCarModelNo(event.target.value)
    }

    const handleCarYearChange=(event)=>{
        setCarYear(event.target.value)
    }

    const handleClick=()=>{
        if(!car || !carModelNo || !carYear){
            alert('input field is empty')
            return;
        }
        const newDetail={
            id:Date.now(),
            name:carName,
            modelNo:carModelNo,
            year:Number(carYear)
        }
        setCar(c=>[...c,newDetail])
        setCarName("")
        setCarModelNo("")
        setCarYear("")
        
    }

    const handleDelete=(remove)=>{
        setCar(car.filter(c=>c.id !== remove))
    }

  return (
    <div>
        <div className='w-full lg:max-w-[70%] mx-auto bg-linear-to-bl from-lime-700 to-black min-h-60 p-5'>

                <h1 className='text-white font-bold uppercase text-center text-[30px]'>Cars Details</h1>

                <ul className='m-4 bg-white p-5 rounded-xl shadow-2xl shadow-black/60'>
                    {car.length === 0 ? <p className='text-center font-bold  text-[17px]'>No car details available</p> : car.map(c=>(
                        <li key={c.id} className='text-black max-sm:text-center cursor-pointer font-semibold text-[16px]' onDoubleClick={()=>handleDelete(c.id)}>{c.name} &nbsp; Model: {c.modelNo} &nbsp; Year: {c.year}</li>
                    ))}
                </ul>
                <p className='text-red-500 py-2 max-sm:text-center px-4 text-start'>Note: To delete car details, double click on it...</p>

                <div className='flex max-sm:flex-col max-sm:max-w-70 mx-auto gap-2 md:justify-center'>
                    {/* input for car name */}
                    <input type="text" className='border-2 border-lime-500 rounded-md px-4 py-1 placeholder:text-stone-400 text-white' placeholder='Enter car name' value={carName} onChange={handleCarName}/>

                     {/* input for car modelNo */}
                    <input type="text" className='border-2 border-lime-500 rounded-md px-4 py-1 placeholder:text-stone-400 text-white' placeholder='Enter car model' value={carModelNo} onChange={handleCarModelNo}/>

                     {/* input for car year */}
                    <input type="number" className='border-2 border-lime-500 rounded-md px-4 py-1 placeholder:text-stone-400 text-white' placeholder='Enter car year' value={carYear} onChange={handleCarYearChange}/>
                </div>

                {/* button to add car details */}
                <div className='my-6 flex justify-center'>
                    <button onClick={handleClick} className='bg-gray-500 px-4 py-1 rounded-lg cursor-pointer font-bold text-sm text-white hover:bg-gray-700 transition ease-in-out duration-300 transform hover:scale-105'>Add Car Details</button>
                </div>

        </div>
    </div>
  )
}

export default Esm