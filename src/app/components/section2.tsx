"use client";
import { useState, useEffect } from "react";

export default function Portada() {
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
        <section className="flex-col p-6 md:p-10 lg:p-14 xl:p-18 bg-white">
            {/* <div className="flex flex-col items-center justify-center">
                <img className="w-16 h-16" src="/tiempo.png" alt="" />
            </div> */}

            <div className="flex flex-col items-center justify-center">
                <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">El comienzo de nuestra historia...</span>
            </div>

            {/* <div className="flex flex-col text-secondary text-center pt-10">
                <span className="block text-3xl font-cursive tracking-tighter">08 de Marzo 2024</span>
            </div> */}

            <div className="flex flex-col text-black text-center">
                <div className="text-center">
                    <div className="grid grid-cols-4 gap-4 mt-4 px-[6px]">
                        <div className="p-2 flex flex-col items-center">
                            <div className="text-2xl font-bold">{countdown.days}</div>
                            <div className="text-sm">Días</div>
                        </div>
                        <div className="p-2 flex flex-col items-center">
                            <div className="text-2xl font-bold">{countdown.hours}</div>
                            <div className="text-sm">Horas</div>
                        </div>
                        <div className="p-2 flex flex-col items-center">
                            <div className="text-2xl font-bold">{countdown.minutes}</div>
                            <div className="text-sm">Minutos</div>
                        </div>
                        <div className="p-2 flex flex-col items-center">
                            <div className="text-2xl font-bold">{countdown.seconds}</div>
                            <div className="text-sm">Segundos</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-col text-white text-center pt-10">
                <button className="bg-secondary text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-secondary">
                    AGENDAR
                </button>
            </div>

        </section>
    );
}