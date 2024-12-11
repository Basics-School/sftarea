import React from 'react'
import Header from "@/components/layouts/header";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from '@/components/layouts/footer';
import { MainNav } from '@/components/layouts/nav';
import items from '@/components/layouts/items';

const SiteLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header />
            <div className="h-16 w-screen bg-black absolute -z-50 " />
            <SiteHeader/>
            {/* <MainNav items={items} /> */}
            {children}
            <SiteFooter />
        </>
    )
}

export default SiteLayout
