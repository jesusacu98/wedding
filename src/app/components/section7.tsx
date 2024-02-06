"use client";
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Reglas() {
    const [selectedOption, setSelectedOption] = useState('si');
    const [nombre, setNombre] = useState('');
    const [text, setText] = useState('');

    const setMensaje = () => {
        if (!nombre.trim()) return;
        let mensaje = "";
        if (selectedOption == 'si') mensaje = " y confirmo mi asistencia";
        else mensaje = ", lo siento no podre asistir";
        setText(`https://wa.me/6693258216/?text=¡Hola!, soy ${nombre}${mensaje} a la boda`);
    }

    useEffect(() => {
        console.log(selectedOption)
        setMensaje();
    }, [selectedOption]);

    useEffect(() => {
        console.log(selectedOption)
        setMensaje();
    }, [nombre]);

    const handleChange = (e: any) => {
        setSelectedOption(e.target.value);
    }

    const handleChange2 = (e: any) => {
        setNombre(e.target.value);
    }

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
                <span className="block text-1xl text-black font-[300] font-secondary tracking-[1.5px]">
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
                <span className="block text-1xl text-black font-[300] font-secondary tracking-[1.5px]">
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

            <div className="flex flex-col items-center text-center mt-2 px-[46px]">
                <span className="block text-1xl text-black font-[300] font-secondary tracking-[1.5px]">
                    No podemos imaginar nuestra boda sin ti, por eso queremos asegurarnos de que estarás ahí para compartir esta felicidad con nosotros. ¿Contamos contigo?
                </span>
            </div>

            <div className="flex flex-col items-center text-center mt-5 px-4 space-y-4">
                <input
                    value={nombre}
                    onChange={handleChange2}
                    type="text"
                    placeholder="Tu nombre"
                    className="text-black outline-none border border-solid border-secondary p-2 bg-white w-[240px] h-[50px]"
                />

                <select
                    value={selectedOption}
                    onChange={handleChange}
                    className="text-black outline-none border bg-white w-[240px] h-[50px] border-solid border-secondary p-2"
                >
                    <option value="si">Si podré asistir</option>
                    <option value="no">Lo siento, no podré asistir</option>
                </select>
            </div>

            <div className="flex flex-col items-center text-center mt-3 px-4 space-y-4">
                {nombre.trim() ? (
                    <a href={text} target="_blank" className="font-secondary text-sm tracking-ultra-wide bg-secondary text-primary px-4 py-2 mt-2 font-bold">
                        ENVIAR
                    </a>
                ) : (
                    <p className="text-secondary pl-[4em] pr-[4em]">Por favor, ingresa tu nombre para enviar una respuesta.</p>
                )}
            </div>

            <img src="/22.jpg" alt="Imagen 1" className="max-h-full max-w-full mt-[60px]" />

            <div className="bg-secondary text-white text-center py-2">
                <span>
                    Hecha con amor por los novios, esta invitación es el inicio de nuestra historia de boda.
                </span>
                <p className="text-lg font-bold">
                    ¡Esperamos verte allí!
                </p>
            </div>

        </section>
    );
}