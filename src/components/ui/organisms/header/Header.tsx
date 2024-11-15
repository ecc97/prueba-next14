import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Aside from '../aside/Aside';
import { IoCarSport } from "react-icons/io5";
import './Header.scss'

interface HeaderProps {
  variant?: 'primary' | 'secondary'
}

export default function Header({ variant }: HeaderProps) {
  const { data } = useSession()
  const user = data?.user.email

  const handleSignOut = () => {
    signOut()
}

  return (
    <header className={`header py-6 w-64 ${variant} text-black`}>
      <div className='flex items-center gap-3'>
        <IoCarSport className='w-8 h-8' />
        <h1 className='font-bold'>Transport Solutions</h1>
      </div>
      <hr className='border-black'/>
      <Aside user={user!} signOut={handleSignOut} />
    </header>
  )
}
