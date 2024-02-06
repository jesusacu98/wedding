"use client";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Informacion() {
    return (
        <section className="flex-col p-5 md:p-10 lg:p-14 xl:p-18 bg-white">
            <div className="text-black text-center">

                <ScrollAnimation animateIn="animate__zoomIn" animateOnce>
                    <div className="flex flex-col items-center justify-center mt-10">
                        <img className="w-16 h-16" src="/regalo2.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-black block text-4xl font-cursive mt-5 tracking-[1.5px]">
                            Mesa de regalos
                        </span>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__flipInX" animateOnce>
                    <div className="flex flex-col items-center justify-center mt-[60px]">
                        <img className="w-16 h-16" src="/liverpool.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-black block text-2xl font-principal mt-1 tracking-[1.5px]">
                            Liverpool
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-black block text-1xl font-secondary mt-2 tracking-[1.5px]">
                            Evento: 51298252
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51298252" target="_blank" className="font-secondary text-sm tracking-ultra-wide bg-black text-white px-4 py-2 mt-2 font-bold">VER MESA</a>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__flipInY" animateOnce>
                    <div className="flex flex-col items-center justify-center mt-[60px]">
                        <img className="w-16 h-16" src="/cimaco.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-black block text-2xl font-secondary mt-1 tracking-[1.5px]">
                            Cimaco
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-black block text-1xl font-secondary mt-2 tracking-[1.5px]">
                            Evento: 43880
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <a href="https://www.cimaco.com.mx/mesa-regalo/43880" target="_blank" className="font-secondary text-sm tracking-ultra-wide bg-black text-white px-4 py-2 mt-2 font-bold">VER MESA</a>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__zoomIn" animateOnce>
                    <div className="flex flex-col items-center justify-center mt-[60px]">
                        <img className="w-16 h-16" src="/sobre.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-black block text-2xl font-principal mt-2 tracking-[1.5px]">
                            Lluvia de sobres
                        </span>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}