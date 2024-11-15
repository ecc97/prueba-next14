import React from 'react'
import Button from '../../atoms/button/Button'
import { HiOutlineFilter } from "react-icons/hi";
import { BiSolidTagX } from "react-icons/bi";

export default function Filters() {
    return (
        <div className="flex gap-4 mb-4">
            <input type="text" placeholder="Placa" className="p-3 rounded-md shadow-md" />
            <input type="text" placeholder="Año" className="p-3 rounded-md shadow-md" />
            <input type="text" placeholder="Marca" className="p-3 rounded-md shadow-md" />
            <input type="text" placeholder="Modelo" className="p-3 rounded-md shadow-md" />
            <Button className=' text-white p-3 flex items-center gap-2' variant='primary'>
                <HiOutlineFilter />
                Filtrar
            </Button>
            <Button className='border border-black flex items-center gap-2' variant='secondary'>
                <BiSolidTagX />
                Limpiar
            </Button>
        </div>
    )
}
