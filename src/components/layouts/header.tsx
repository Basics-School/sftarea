'use client'

import React, { useState, useEffect } from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HeaderMenuSheet } from './menu-sheet';

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`h-20 text-white bg-brand gap-4 justify-between flex items-center px-4 duration-300  ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
            <Link id="logo" href={"/"} className='text-2xl font-extrabold'>
                SFTAREA
            </Link>
            <nav className='lg:flex gap-6 flex-1 items-center justify-end hidden  '>
                <ul className='contents font-semibold'>
                    <Link href={"/"} >Premium Access</Link >
                    <Link href={"/"} >Agents-Builders</Link >
                    <Link href={"/"} >Lead Market</Link >
                    <Link href={"/"} >Advertise</Link >
                    <Link href={"/"} >Download App</Link >
                </ul>
            </nav>
            <div id="header-action" className=' flex gap-4 items-center'>
                <Link href={"/list"} className={cn(buttonVariants({ variant: 'default' }), 'bg-background hover:bg-muted font-bold text-black')}>
                    <span>List your property</span>
                    <span className='text-xs bg-yellow-400 rounded py-px px-2'>Free</span>
                </Link>
                <Link className={cn(buttonVariants({ variant: 'default' }), "bg-background hover:bg-muted text-black")} href="/login">
                    Login / Signup
                </Link>
                <HeaderMenuSheet />
            </div>
        </header>
    )
}

export default Header
