import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react';
import { MainNav } from './nav';
import { HeaderMenuSheet } from './menu-sheet';
const Header = () => {
    return (
        <header className='h-20 text-white bg-brand gap-4 justify-between flex items-center px-4'>
            <Link href={"/"} className='text-2xl font-extrabold'>
                SFTAREA
            </Link>
            <nav className='lg:flex gap-6 items-center hidden  '>
                <ul className='contents font-semibold'>
                    <Link href={"/"} >Premium Access</Link >
                    <Link href={"/"} >Agents-Builders</Link >
                    <Link href={"/"} >Lead Market</Link >
                    <Link href={"/"} >Advertise</Link >
                    <Link href={"/"} >Download App</Link >
                </ul>
                <Link href={"/list"} className={cn(buttonVariants({ variant: 'default' }), 'bg-background hover:bg-muted font-bold text-black')}>
                    <span>List your property</span>
                    <span className='text-xs bg-yellow-400 rounded py-px px-2'>Free</span>
                </Link>
                <Link className={cn(buttonVariants({ variant: 'default' }), "bg-background hover:bg-muted text-black")} href="/login">
                    Login / Signup
                </Link>

                <HeaderMenuSheet />
            </nav>

            {/* <button className='bg-background px-2 py-1.5 lg:hidden rounded-md'>
                <MenuIcon className='text-black'/>
            </button> */}
            {/* <MainNav/> */}
        </header>
    )
}

export default Header
