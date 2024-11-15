import React from 'react'
import Button from '../../atoms/button/Button'

export default function BtnActions() {
    return (
        <div className="flex gap-4 mb-6">
            <Button className="btn-add bg-indigo-400 text-white">Agregar Vehículo</Button>
            <Button className="btn-report bg-green-600 text-white">Descargar reporte</Button>
        </div>
    )
}
