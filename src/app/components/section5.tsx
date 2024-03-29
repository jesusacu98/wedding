"use client";
import { useState, useEffect } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Fotos() {
    return (
        <section className="flex-col md:pl-10 lg:pl-14 xl:pl-[24rem] md:pr-10 lg:pr-14 xl:pr-[24rem] bg-white">
            <ScrollAnimation animateIn="animate__bounceIn" animateOnce>
                <div className="flex flex-col items-center justify-center pt-[60px]">
                    <img className="w-16 h-16" src="/nuestro_amor.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center pt-6">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                        Nuestro amor
                    </span>
                </div>

                <div className="flex flex-col items-center text-center mt-10 px-[46px] pb-[60px]">
                    <span className="text-black text-2xl font-[300] font-cursive tracking-[1.5px]">
                        Te quiero hoy, mañana, la semana entrante y el resto de mi vida.
                    </span>
                </div>
            </ScrollAnimation>

            <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-0">
                <div className="bg-white h-full flex items-center justify-center">
                    <img src="/21.jpg" alt="Imagen 1" className="max-h-full max-w-full" />
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="flex-grow flex items-center">
                            <img src="/4.jpg" alt="Imagen 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow flex items-center">
                            <img src="/16.jpg" alt="Imagen 4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <img src="/2.jpg" alt="Imagen 1" className="max-h-full max-w-full" />
            </div>
        </section>
    );
}