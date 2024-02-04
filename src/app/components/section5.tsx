"use client";
import { useState, useEffect } from "react";

export default function Fotos() {
    return (
        <section className="flex-col pl-6 md:pl-10 lg:pl-14 xl:pl-[24rem] pr-6 md:pr-10 lg:pr-14 xl:pr-[24rem] bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-0">
                {/* Reemplaza las siguientes imágenes con tus propias imágenes y ajusta según sea necesario */}
                <div className="bg-gray-300 h-full flex items-center justify-center">
                    <img src="/21.jpg" alt="Imagen 1" className="max-h-full max-w-full" />
                </div>
                {/* <div className="bg-gray-300 h-full flex items-center justify-center">
                    <img src="/10.jpg" alt="Imagen 1" className="max-h-full max-w-full" />
                </div> */}
                <div className="flex justify-between">
                    {/* <div className="h-[20rem] flex justify-start">
                        <img src="/10.jpg" alt="Imagen 2" className="max-h-full max-w-full m-0 p-0" />
                    </div> */}
                    <div className="flex">
                        <div className="flex-grow h-40 flex items-center">
                            <img src="/4.jpg" alt="Imagen 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow h-40 flex items-center">
                            <img src="/16.jpg" alt="Imagen 4" className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>
                {/* Agrega más divs para más imágenes */}
            </div>
        </section>
    );
}