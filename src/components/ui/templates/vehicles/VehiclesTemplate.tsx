"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import Filters from '../../molecules/filters/Filters'
import BtnActions from '../../molecules/btnGroupActions/BtnActions'
import Table from '../../organisms/table/Table'
import Pagination from '../../molecules/common/Pagination'
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
                <Table vehicles={vehicles} />
            </div>

            {/* Paginación */}
            <Pagination data={dataVehicles} />
        </div>
    )
}
