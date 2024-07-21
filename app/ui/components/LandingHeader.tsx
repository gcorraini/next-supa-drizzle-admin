'use client'

import { usePathname } from 'next/navigation';
import styles from "@/app/ui/styles/LandingHeader.module.css"

export default function LandingHeader(){
    const pathName = usePathname();
    return (
        <header className={`mb-auto ${styles.myheader}`}>
            <div>
                <h3 className={`float-md-start mb-0`}>My App</h3>
                <nav className={`nav nav-masthead justify-content-center float-md-end`}>
                    <a className={`nav-link ${pathName === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</a>
                    <a className={`nav-link ${pathName === '/about' ? 'active' : ''}`} href="/about">About</a>
                    <a className={`nav-link`} href="/dash">Dashboard</a>
                </nav>
            </div>
        </header>
    );
};