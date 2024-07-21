import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/ui/styles/globals.css";
import styles from "@/app/ui/styles/Landing.module.css";

import LandingHeader from "@/app/ui/components/LandingHeader";
import LandingFooter from "@/app/ui/components/LandingFooter";
//--------------------------------------------------------------

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Landing Page",
    description: "Landing Page",
};

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  //${inter.className}

    return (
        <html lang="en">
            <head></head>
            <body className={`d-flex text-center align-items-center text-white bg-dark`}>
                {/* <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"> */}
                <div className={`${styles.cover_container} d-flex h-100 p-3 mx-auto flex-column`}>
                    <LandingHeader />
                    <main className="px-3">{children}</main>
                    <LandingFooter />
                </div>
            </body>
        </html>
    );
}
