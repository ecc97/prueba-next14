import React from 'react'
import Button from '../../atoms/button/Button'

export default function Filters() {
    return (
        <div className="flex gap-4 mb-4">
            <input type="text" placeholder="Placa" className="p-3 rounded-md shadow-md" />
            <input type="text" placeholder="Año" className="p-3 rounded-md shadow-md" />
            <input type="text" placeholder="Marca" className="p-3 rounded-md shadow-md" />
            <input type="text" placeholder="Modelo" className="p-3 rounded-md shadow-md" />
            <Button className=' text-white p-3' variant='primary'>Filtrar</Button>
            <Button className='border border-black' variant='secondary'>Limpiar</Button>
        </div>
    )
}
