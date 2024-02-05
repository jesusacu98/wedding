import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/fontawesome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nuestra boda",
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
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
