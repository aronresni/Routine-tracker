import React from 'react'
import { Link } from 'react-router-dom'

const Routine = () => {
    return (
        <div className='row'>
            <div className='grid justify-items-center m-8'>
                <h2>Create Routine</h2>
            </div>
            <div className='grid justify-items-center'>
                <form className='border w-64 sm:w-96 md:w-1/2'>
                    <div>

                        <div><h4>Select day</h4></div>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                    <div>

                        <div><h4>Select gender</h4></div>
                        <select>
                            <option>Female</option>
                            <option>Male</option>

                        </select>
                    </div>
                    <div>
                        <div><h4>Your height</h4></div>
                        <input placeholder='CM' className='border rounded' />
                    </div>

                </form>
                <Link to="/musclesfrecuency">

                    <button className='border rounded mt-10'>Next step</button>
                </Link>
            </div>
        </div>
    )
}

export default Routine
