"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import Filters from '../../molecules/filters/Filters'
import BtnActions from '../../molecules/btnGroupActions/BtnActions'
import Table from '../../organisms/table/Table'
import './Vehicles.scss'

interface VehiclesTemplateProps {
    dataVehicles: IVehiclesResponse
}

export default function VehiclesTemplate({ dataVehicles }: VehiclesTemplateProps) {
    const vehicles = dataVehicles.data
    return (
        <div className="vehicles-content">
            <h1 className="text-2xl font-semibold mb-6">Gestión de vehículos</h1>

            {/* Filtros */}
            <Filters />

            {/* Acciones */}
            <BtnActions />

            {/* Tabla */}
            <div className="content-table">
                <Table vehicles={vehicles}/>
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-6">
                <nav className="pagination">
                    <button className="pagination-btn">1</button>
                    <button className="pagination-btn">2</button>
                    <button className="pagination-btn">3</button>
                    <button className="pagination-btn">4</button>
                </nav>
            </div>
        </div>
    )
}
