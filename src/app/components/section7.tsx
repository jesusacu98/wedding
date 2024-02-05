"use client";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Reglas() {
    return (
        <section className="flex-col md:pl-10 lg:pl-14 xl:pl-[24rem] md:pr-10 lg:pr-14 xl:pr-[24rem] bg-white">
            <img src="/8.jpg" alt="Imagen 1" className="max-h-full max-w-full" />

            <div className="flex flex-col items-center justify-center">
                <img className="w-100 h-100" src="/fondo2.png" alt="" />
                <span className="text-secondary block text-4xl font-cursive mt-[-34px] tracking-[1.5px] absolute">
                    Peticiones
                </span>
                <span className="text-secondary block text-4xl font-cursive mb-[-34px] tracking-[1.5px] absolute">
                    Especiales
                </span>
            </div>

            <ScrollAnimation animateIn="animate__bounceIn" animateOnce>
            <div className="flex flex-col items-center text-center mt-[-45px] px-[46px]">
                <span className="text-black text-1xl font-[300] font-secondary tracking-[1.5px]">
                    Para nosotros es importante que cumplas con las peticiones que te dejamos a continuación.
                </span>
            </div>
            </ScrollAnimation>

            <div className="flex items-center justify-center mt-[60px]">
                <img className="w-16 h-16" src="/vestido.png" alt="" />
                <img className="w-16 h-16" src="/traje.png" alt="" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <span className="text-secondary block text-4xl font-cursive mt-5 tracking-[1.5px]">
                    Código de Vestimenta
                </span>
            </div>

            <div className="flex flex-col items-center text-center px-[46px]">
                <span className="block text-1xl font-[300] font-secondary tracking-[1.5px]">
                    Formal
                </span>
            </div>

            <div className="flex flex-col items-center justify-center mt-[60px]">
                <img className="w-16 h-16" src="/noniños.png" alt="" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                    No niños
                </span>
            </div>

            <div className="flex flex-col items-center text-center px-[46px]">
                <span className="block text-1xl font-[300] font-secondary tracking-[1.5px]">
                    Amamos a sus pequeños, pero queremos que en este día solo tengan que preocuparte por pasarla increíble.
                </span>
            </div>

            <img className="w-100 h-100 mt-[60px]" src="/5.jpg" alt="" />

            <div className="flex flex-col items-center justify-center mt-[60px]">
                <img className="w-16 h-16" src="/asistencia.png" alt="" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                    Confirma tu Asistencia
                </span>
            </div>

            <div className="flex flex-col items-center text-center px-[46px]">
                <span className="block text-1xl font-[300] font-secondary tracking-[1.5px]">
                    Para nosotros es muy importante,
                </span>
            </div>

            <img className="w-100 h-100 mt-[60px]" src="/22.jpg" alt="" />
        </section>
    );
}