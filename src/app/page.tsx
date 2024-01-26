"use client";
import { useState, useEffect } from "react";

export default function Home() {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('March 08, 2024').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeDifference = targetDate - now;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (timeDifference < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col">

            <section className="flex-col w-full h-screen relative flex bg-cover bg-center bg-opacity-50" style={{ backgroundImage: "url('/anillo.png')" }}>
                <div className="flex flex-col text-white text-center pt-20">
                    <span className="block text-2xl font-custom-serif tracking-[6.5px] mb-1">NUESTRA BODA</span>
                </div>
                <div className="flex flex-col text-white text-center pt-20">
                    <span className="block text-5xl font-custom-cursive tracking-tighter">Adriana & Jesús</span>
                </div>
                <div className="flex flex-col text-white text-center pt-20">
                    <span className="block text-2xl font-custom-serif tracking-[2.5px]">SAVE THE DATE</span>
                </div>

                <div className="flex flex-col text-white text-center pt-20">
                    <div className="text-center ">
                        {/* <div className="text-4xl font-bold">Contador de días</div> */}
                        <div className="grid grid-cols-4 gap-4 mt-4 px-[6px]">
                            <div className="bg-[#C9511D] rounded-[20px] p-2">
                                <div className="text-2xl font-bold">{countdown.days}</div>
                                <div className="text-sm">Días</div>
                            </div>
                            <div className="bg-[#C9511D] rounded-[20px] p-2">
                                <div className="text-2xl font-bold">{countdown.hours}</div>
                                <div className="text-sm">Horas</div>
                            </div>
                            <div className="bg-[#C9511D] rounded-[20px] p-2">
                                <div className="text-2xl font-bold">{countdown.minutes}</div>
                                <div className="text-sm">Minutos</div>
                            </div>
                            <div className="bg-[#C9511D] rounded-[20px] p-2">
                                <div className="text-2xl font-bold">{countdown.seconds}</div>
                                <div className="text-sm">Segundos</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-white text-center pt-10">
                    <span className="block text-3xl font-custom-serif tracking-tighter">08 de MARZO 2024</span>
                </div>

                <div className="flex-col text-white text-center pt-10">
                    <button className="bg-[#C9511D] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-[#C9511D]">
                        AGENDAR
                    </button>
                </div>

            </section>

            <section className="flex-col py-20 bg-gray-100">
                <div className="text-black text-center">
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-16 h-16" src="https://aleypablo.nuestroinvitado.com/20deagosto/wp-content/uploads/elementor/thumbs/Icono-AyP-1-ox0d51d7sn3p8xmpe9lj31t3merqoalijt88tn98vw.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-[#C9511D] block text-4xl font-custom-serif mt-2 tracking-[1.5px]">Nuestra historia</span>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                        <p className="block text-[16px] font-[300] font-custom-serif tracking-[1.5px]">Nuestra historia comienza un 18 de febrero del 2016 en una fiesta de una amiga en común, nos presentaron, empezamos a salir y finalmente nos convertimos en novios un 8 de mayo del mismo año. Hoy les anunciamos nuestro próximo matrimonio.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-10">
                        <span className="text-[#C9511D] block text-4xl font-custom-serif mt-2 tracking-[1.5px]">Adriana Hernandez</span>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                        <p className="block text-[16px] font-[300] font-custom-serif tracking-[1.5px]">Nuestra historia comienza un 18 de febrero del 2016 en una fiesta de una amiga en común, nos presentaron, empezamos a salir y finalmente nos convertimos en novios un 8 de mayo del mismo año. Hoy les anunciamos nuestro próximo matrimonio.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-4">
                        <div className="p-4 flex justify-center items-center space-x-10">
                            <a href="#" className="text-[#C9511D] text-[30px]">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-[#C9511D] text-[30px]">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-[#C9511D] text-[30px]">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pt-10">
                        <div className="w-80 h-80 rounded-[75px] overflow-hidden">
                            <img className="w-full h-full object-cover" src="/pareja.png" alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-10">
                        <span className="text-[#C9511D] block text-4xl font-custom-serif mt-2 tracking-[1.5px]">Jesús Vizcarra</span>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                        <p className="block text-[16px] font-[300] font-custom-serif tracking-[1.5px]">Nuestra historia comienza un 18 de febrero del 2016 en una fiesta de una amiga en común, nos presentaron, empezamos a salir y finalmente nos convertimos en novios un 8 de mayo del mismo año. Hoy les anunciamos nuestro próximo matrimonio.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-4">
                        <div className="p-4 flex justify-center items-center space-x-10">
                            <a href="#" className="text-[#C9511D] text-[30px]">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-[#C9511D] text-[30px]">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-[#C9511D] text-[30px]">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>


                </div>
            </section>

            <section className="bg-cover bg-center h-screen relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h2 className="text-4xl font-bold mb-4">¡Esperamos verte ahí!</h2>
                </div>
            </section>
        </div>
    );
}
