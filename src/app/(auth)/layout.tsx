import { SiteFooter } from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='min-h-screen flex items-center justify-center'>
                {children}
            </main>
            <SiteFooter />
        </>
    );
};

export default AuthLayout;
