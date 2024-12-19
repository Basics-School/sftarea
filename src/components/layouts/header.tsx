'use client'

import React, { useState, useEffect } from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HeaderMenuSheet } from './menu-sheet'
import { AuthModal } from '../auth/auth-modal'
import TopcitiesDropdownList from './topcities-dropdown'
import { SignOutButton, useAuth, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const { isSignedIn } = useAuth()
    const { user } = useUser()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`h-20 text-white bg-brand gap-4 justify-between flex items-center px-4 duration-300  ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
            <div className=' flex gap-4 items-center'>
                <Link id="logo" href={"/"} className='text-2xl font-extrabold'>
                    SFTAREA
                </Link>
                <TopcitiesDropdownList />
            </div>
            <nav className='xl:flex gap-6 flex-1 items-center justify-end hidden  '>
                <ul className='contents 2xl:text-lg  *:text-nowrap font-semibold'>
                    <Link href={"/"} >Premium Access</Link >
                    <Link href={"/"} >Agents-Builders</Link >
                    <Link href={"/"} >Lead Market</Link >
                    <Link href={"/"} >Advertise</Link >
                    <Link href={"/"} >Download App</Link >
                </ul>
            </nav>
            <div className='flex gap-4'>
                <div id="header-action" className='hidden lg:flex gap-4 items-center'>
                    <Link href={"/list"} className={cn(buttonVariants({ variant: 'default' }), 'bg-background hover:bg-muted font-bold text-black')}>
                        <span>List your property</span>
                        <span className='text-xs bg-yellow-400 rounded py-px px-2'>Free</span>
                    </Link>

                    {isSignedIn ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Image src={user?.imageUrl || '/placeholder.svg'}
                                    width={35} height={35} alt='user profile'
                                    className='rounded-full'
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href={'/user'}>Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/user#/my-listing'}>My Listing</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <SignOutButton>Logout</SignOutButton>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <AuthModal>
                            <Button variant="default" className="bg-background hover:bg-muted text-black">
                                Login / Signup
                            </Button>
                        </AuthModal>
                    )}
                </div>
                <HeaderMenuSheet />
            </div>
        </header>
    )
}

export default Header
