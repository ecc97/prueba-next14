"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormField from '@/components/ui/molecules/common/FormField'
import FormFieldFile from '@/components/ui/molecules/common/FormFieldFile'
import Modal from '@/components/ui/molecules/common/modal/Modal'
import Button from '@/components/ui/atoms/button/Button'
import { IoMdCamera } from "react-icons/io";
import { useRouter } from 'next/navigation'

interface IModalFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const projectSchema = yup.object().shape({
    make: yup.string().required('La marca es obligatoria'),
    model: yup.string().required('El modelo es obligatorio'),
    year: yup.number().required('El año es obligatorio'),
    licensePlate: yup.string().required('La placa/licencia es obligatorio'),
    file: yup.mixed<File>().nullable().notRequired()
})

export default function ModalForm({ isOpen, onClose }: IModalFormProps) {
    const router = useRouter()
    const { control, handleSubmit, setError, formState: { errors }, reset, setValue } = useForm<IVehicleRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(projectSchema),
    })

    const onSubmit = async (data: IVehicleRequest) => {
        try {
            const formData = new FormData()
            formData.append('make', data.make)
            formData.append('model', data.model)
            formData.append('year', data.year.toString())
            formData.append('licensePlate', data.licensePlate)

            if (data.file) {
                formData.append("file", data.file)
            } else {
                console.error('Debe seleccionar una imagen')
            }
            const response = await fetch('/api/vehicles/post', {
                method: 'POST',
                body: formData
            })
            if (!response.ok) {
                throw new Error('Hubo un error al registrar el vehículo')
            }
            const newCar = await response.json()
            console.log('Vehículo registrado correctamente', newCar)
            router.refresh()
        } catch (error) {
            console.error('Error al registrar el vehículo:', error)
            throw error
        }
    }

    const [imagePreview, setImagePreview] = React.useState<string | null>(null);

    const handleImageChange = (file: File | null) => {
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Agregar nuevo vehículo'>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className="flex flex-col items-center">
                    {imagePreview ? (
                        <img src={imagePreview} alt="Vista previa" className="w-20 h-20 rounded-full object-cover" />
                    ) : (
                        <div className='bg-gray-500 rounded-full p-2'>
                            <IoMdCamera size={32} className="text-gray-50 w-20 h-20 object-cover" />
                        </div>
                    )}
                    <FormFieldFile<IVehicleRequest>
                        label="Imagen"
                        name="file"
                        control={control}
                        error={errors.file}
                        onChange={handleImageChange} 
                    />
                    <button
                        type="button"
                        onClick={() => handleImageChange(null)} 
                        className=" bg-red-500 text-white rounded-md p-2"
                    >
                        Cancelar
                    </button>
                </div>
                <div className='w-full flex flex-wrap gap-3'>
                    <FormField<IVehicleRequest>
                        control={control}
                        type="text"
                        label='Marca'
                        name='make'
                        error={errors.make}
                        placeholder="Ingrese la marca"
                    />
                    <FormField<IVehicleRequest>
                        control={control}
                        type="text"
                        label='Modelo'
                        name='model'
                        error={errors.model}
                        placeholder="Ingrese el modelo"
                    />
                    <FormField<IVehicleRequest>
                        control={control}
                        type="text"
                        label='Año'
                        name='year'
                        error={errors.year}
                        placeholder="Ingrese el año"
                    />
                    <FormField<IVehicleRequest>
                        control={control}
                        type="text"
                        label='Placa/Licencia'
                        name='licensePlate'
                        error={errors.licensePlate}
                        placeholder="Ingrese la placa"
                    />
                </div>
                <hr className='my-10' />
                <div className="flex gap-4 w-full">
                    <Button onClick={onClose} className='flex-1 bg-gray-50 border border-black'>Cancelar</Button>
                    <Button type="submit" className='bg-gray-800 flex-1 text-white p-3 rounded-lg hover:bg-gray-700'>
                        Agregar
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
