import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react';
import { MainNav } from './nav';
const Header = () => {
    return (
        <header className='h-20 text-white bg-purple-600 gap-4 justify-between flex items-center px-4'>
            <div className='text-2xl font-extrabold'>
                SFTAREA
            </div>
            <nav className='lg:flex gap-6 items-center hidden  '>
                <ul className='contents font-semibold'>
                    <li>Premium Access</li>
                    <li>Agents-Builders</li>
                    <li>Load Market</li>
                    <li>Advertise</li>
                    <li>Download App</li>
                </ul>
                <Button className='bg-background hover:bg-muted font-bold text-black'>
                    <span>List your property</span>
                    <span className='text-xs bg-yellow-400 rounded py-px px-2'>Free</span>
                </Button>
                <Link className={cn(buttonVariants({variant:'default'}),"bg-background hover:bg-muted text-black")} href="/login">
                    Login / Signup
                </Link>

            </nav>

            <button className='bg-background px-2 py-1.5 lg:hidden rounded-md'>
                <MenuIcon className='text-black'/>
            </button>
            {/* <MainNav/> */}
        </header>
    )
}

export default Header
