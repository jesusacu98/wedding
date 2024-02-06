import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/fontawesome";
import 'animate.css/animate.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nuestra boda FINAL 2",
    description: "Adriana & Jesús",
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" />
                <meta name="description" content="Descripción de mi página" />
                <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta http-equiv="Expires" content="0" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
