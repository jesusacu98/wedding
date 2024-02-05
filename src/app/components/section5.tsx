"use client";
import { useState, useEffect } from "react";

export default function Fotos() {
    return (
        <section className="flex-col md:pl-10 lg:pl-14 xl:pl-[24rem] md:pr-10 lg:pr-14 xl:pr-[24rem] bg-white">
            <div className="flex flex-col items-center justify-center pt-4">
                <img className="w-16 h-16" src="/nuestro_amor.png" alt="" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <span className="text-secondary block text-4xl font-secondary mt-2 tracking-[1.5px]">
                    Nuestro amor
                </span>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                    Te quiero hoy, mañana, la semana entrante y el resto de mi vida.
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-0">
                <div className="bg-white h-full flex items-center justify-center">
                    <img src="/21.jpg" alt="Imagen 1" className="max-h-full max-w-full" />
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="flex-grow h-40 flex items-center">
                            <img src="/4.jpg" alt="Imagen 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow h-40 flex items-center">
                            <img src="/16.jpg" alt="Imagen 4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}