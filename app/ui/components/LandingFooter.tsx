'use client'

import styles from "@/app/ui/styles/LandingFooter.module.css"


export default function LandingFooter(){
    return (
        <>
            <footer className={`${styles.myfooter} mt-auto text-white-50`}>
                <hr />
                <p>Powered by <code className="font-monospace">Caffeine</code> | Made by  <a href="https://gcorr.dev/" className="text-decoration-none text-white">Gustavo A.</a></p>
            </footer>
        </>
    );
};