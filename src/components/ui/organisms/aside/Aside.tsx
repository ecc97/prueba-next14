"use client"
import React from 'react'
import Link from 'next/link'
import Button from '../../atoms/button/Button'
import { usePathname } from 'next/navigation'
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from'react-icons/io5'
import { FaCarTunnel } from "react-icons/fa6";

interface AsideProps {
    user: string | null,
    signOut: () => void,
}

export default function Aside({user, signOut} : AsideProps) {
    const pathname = usePathname()


    return (
        <aside className="flex flex-col h-full flex-1 mt-8">
            <div className="flex flex-col items-center gap-3 justify-center">
                <FaUserCircle className="w-16 h-16 text-indigo-400" />
                <span className="text-lg font-semibold">{user}</span>
            </div>
            <nav className="mt-3">
                <ul className="space-y-2">
                    <li className='w-full'>
                        <Link href="/dashboard/projects" className={`flex items-center gap-2 p-3 rounded hover:bg-gray-100 ${pathname.includes('/dashboard/vehicles')? 'text-indigo-400 shadow-md' : ''}`}>
                            <FaCarTunnel className='w-8 h-8'/>
                            Vehículos
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-3    ">
                <Button type='button' onClick={signOut} className="w-full flex items-center gap-2 border-white hover:bg-gray-100 p-3 rounded-xl">
                    <IoLogOut />
                    Cerrar Sesión
                </Button>
            </div>
        </aside>
    )
}