import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {


    return (
        //<NavBar/>
        <div className='flex justify-center '>

            <Link to="/addroutine">
                <button className='btn w-24 h-12 text-white bg-black bg-gradient-to-r from-indigo-500 rounded-lg border-2 border-lime-800'>
                    Crear Rutina
                </button>
            </Link>

        </div>
    )
}

export default Home
