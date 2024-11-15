import React from 'react'

interface MaintenanceProps {
    vehicleData: VehicleID;
    vehicleMainData: VehicleIDMain[];
}

export default function Maintenance({ vehicleData, vehicleMainData }: MaintenanceProps) {
    return (
        <div className="bg-white shadow rounded-lg p-6 text-black">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Mantenimientos del Vehículo</h2>
                {vehicleData ? (
                    <>
                        <p className="text-gray-700">Tipo: {vehicleData.make}</p>
                    </>
                ) : (
                    <p className="text-gray-700">No se encontró vehículo</p>
                )}
            </div>

            <button className="mb-4 bg-indigo-400 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Agregar Registro
            </button>

            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Fecha</th>
                        <th className="border px-4 py-2">Tipo</th>
                        <th className="border px-4 py-2">Kilometraje</th>
                        <th className="border px-4 py-2">Notas</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicleMainData.map((v) => (
                        <tr key={v.id}>
                            <td className="border px-4 py-2">{new Date(v.date).toLocaleDateString()}</td>
                            <td className="border px-4 py-2">{v.type}</td>
                            <td className="border px-4 py-2">{v.mileage}</td>
                            <td className="border px-4 py-2">{v.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
