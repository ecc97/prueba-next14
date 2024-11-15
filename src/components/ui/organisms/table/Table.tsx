import React from 'react'
import Button from '../../atoms/button/Button'


interface TableVehiclesProps {
    vehicles: Vehicles[]
}

export default function Table({vehicles} : TableVehiclesProps) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Foto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marca</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Modelo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Año</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Placa</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {vehicles.map(vehicle => (
                    <tr key={vehicle.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <img src={vehicle.photo!} alt="Foto del vehículo" className="w-16 h-16 object-cover rounded" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{vehicle.make}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{vehicle.model}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{vehicle.year}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{vehicle.licensePlate}</td>
                        <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                            <Button className="text-blue-600 hover:text-blue-900">Editar</Button>
                            <Button className="text-red-600 hover:text-red-900">Eliminar</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
