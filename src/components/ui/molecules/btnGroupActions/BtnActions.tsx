"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import ModalForm from '../../organisms/modalForm/create/ModalForm';
import { LuPlusCircle } from "react-icons/lu";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { useRouter } from 'next/navigation';

export default function BtnActions() {
    const [showModal, setShowModal] = React.useState(false)
    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)
    return (
        <div className="flex gap-4 mb-6">
            <Button className="btn-add bg-indigo-400 text-white flex items-center gap-1" onClick={handleShowModal}>
                <LuPlusCircle />
                Agregar Vehículo
            </Button>
            <Button className="btn-report bg-green-600 text-white flex items-center gap-1">
                <PiMicrosoftExcelLogoFill />
                Descargar reporte
            </Button>
            <ModalForm isOpen={showModal} onClose={handleCloseModal} />
        </div>
    )
}
