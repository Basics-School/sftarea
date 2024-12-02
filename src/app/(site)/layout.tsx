import React from 'react'
import Header from "@/components/layouts/header";
import { MainNav } from "@/components/layouts/nav";
import { siteConfig } from "@/config/site";
import items from "@/components/layouts/items";
import { SiteFooter } from '@/components/layouts/footer';

const SiteLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header />
            <MainNav items={items} />
            {children}
            <SiteFooter />

        </>
    )
}

export default SiteLayout
