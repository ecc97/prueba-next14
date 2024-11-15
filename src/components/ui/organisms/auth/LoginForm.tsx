"use client"
import React from 'react'
import FormField from '../../molecules/common/FormField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaCarRear, FaUnlockKeyhole } from "react-icons/fa6";
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation' 

const loginSchema = yup.object().shape({
    email: yup.string().email('El correo es inválido').required('Correo electrónico es requerido'),
    password: yup.string().required('Contraseña es requerida'),
})

export default function LoginForm() {
    const router = useRouter()
    const { control, handleSubmit, setError, formState: {errors} } = useForm<ILoginRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(loginSchema), 
    })
    
    const handleLogin = async (data: ILoginRequest) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            })
            console.log('Logueado ', result)
            
            if (result?.error) {
                console.log('Ocurrió un error', JSON.parse(result.error))
                handleError(JSON.parse(result.error))   
                return
            }
            router.push('/dashboard/vehicles')
        } catch (error) {
           console.error(error)
        }
    }
    
    const handleError = (error: unknown) => {
        const errorData = error as ErrorResponse
        if(errorData && errorData.message){
            setError('email', {
                type: 'manual',
                message: errorData.message,
            })
            setError('password', {
                type: 'manual',
                message: errorData.message,
            })
        }
    }
    return (
        <form className="w-full max-w-md     mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div className="flex items-center justify-center">
                <FaCarRear className="w-12 h-12 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-semibold text-center text-indigo-400">Transport Solutions S.A</h2>
            <p className="text-sm text-gray-600 font-bold">
                Inicia sesión en tu cuenta y gestiona tu flota de vehículos
            </p>
            <FormField<ILoginRequest>
                control={control}
                type="email"
                label="Correo Electrónico"
                name="email"
                error={errors.email}
                placeholder="tuempresa@dominio.com"
            />
            <FormField<ILoginRequest>
                control={control}
                type="password"
                label="Contraseña"
                name="password"
                error={errors.password}
                placeholder="**********"
            />
            <button type="submit" className="w-full flex items-center justify-center gap-4 py-2 px-4 bg-indigo-400 text-white rounded-lg font-medium hover:bg-blue-500">
                <FaUnlockKeyhole />
                Iniciar Sesión
            </button>

            <div className="flex items-center justify-center mt-4">
                <span className="text-sm text-gray-600 font-bold text-center">¿Problemas para iniciar sesión? Contacta al administrador del sistema</span>
            </div>
        </form>
    )
}
