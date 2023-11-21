import React, { useState } from 'react';

const Muscles = [
    'Bíceps',
    'Tríceps',
    'Deltoides',
    'Pectorales',
    'Trapecio',
    'Abdominales',
    'Cuádriceps',
    'Isquiotibiales',
    'Glúteos',
    'Gastrocnemio',
    'Sóleo',
    'Lumbares',
    'Espinales',
    'Recto abdominal',
    'Oblicuos',
    // Agrega más músculos según sea necesario
];

const Frecuency = () => {
    return (
        <div className='grid justify-items-center'>
            <h1>Selecciona un músculo y su frecuencia</h1>
            <form >
                <div>
                    <ul className='grid justify-items-center'>
                        {Muscles.map((muscle) => (

                            <li className='m-5 text-center' key={muscle} value={muscle} >
                                {muscle}

                                <select className='border ml-4'>
                                    <option selected value="SelectFrecuency">Select Frecuency</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </li>
                        ))}
                    </ul>
                </div>

            </form>
                <button type="submit border">Guardar</button>

        </div>
    );
};

export default Frecuency;
