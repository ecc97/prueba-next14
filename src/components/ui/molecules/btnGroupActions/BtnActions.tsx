import React from 'react'
import Button from '../../atoms/button/Button'
import { LuPlusCircle } from "react-icons/lu";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

export default function BtnActions() {
    return (
        <div className="flex gap-4 mb-6">
            <Button className="btn-add bg-indigo-400 text-white flex items-center gap-1">
                <LuPlusCircle />
                Agregar Vehículo
            </Button>
            <Button className="btn-report bg-green-600 text-white flex items-center gap-1">
                <PiMicrosoftExcelLogoFill />
                Descargar reporte
            </Button>
        </div>
    )
}
