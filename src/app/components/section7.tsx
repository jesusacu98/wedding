"use client";
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

interface Props {
    pases: number;
}
export default function Reglas(props: Props) {
    const [selectedOption, setSelectedOption] = useState('si');
    const [nombre, setNombre] = useState('');
    const [text, setText] = useState('');
    const [pases, setpases] = useState('');
    const [personas, setPersonas] = useState('');

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const capitalizeWords = (sentence: string) => {
        const words = sentence.split(' ');
        const capitalizedWords = words.map(word => capitalizeFirstLetter(word));
        return capitalizedWords.join(' ');
    };

    const setMensaje = () => {
        if (!nombre.trim()) return;

        let mensaje = ``;
        if (selectedOption == 'si') mensaje = `confirmo asistencia para ${props.pases} ${personas}.`;
        else mensaje = `lo siento no podre asistir a la boda.`;
        setText(`https://wa.me/6693258216/?text=¡Hola!, soy ${capitalizeWords(nombre)}, y ${mensaje}`);
    }

    const iniciarPersonas = () => {
        if (props.pases === 1) {
            setpases('Pase');
            setPersonas('persona');
        }
        else {
            setPersonas('Pases');
            setpases('personas');
        }
    }

    useEffect(() => {
        iniciarPersonas();
    }, [props.pases]);

    useEffect(() => {
        setMensaje();
    }, [selectedOption]);

    useEffect(() => {
        setMensaje();
    }, [nombre]);

    const handleChangeAsistencia = (e: any) => {
        setSelectedOption(e.target.value);
    }

    const handleChangeNombre = (e: any) => {
        setNombre(e.target.value.replace(/[^a-zA-Z]/g, ''));
    }

    return (
        <>
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

                <ScrollAnimation animateIn="animate__slideInLeft" animateOnce>
                    <div className="flex items-center justify-center mt-[-60px]">
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
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__slideInRight" animateOnce>
                    <div className="flex flex-col items-center justify-center mt-[60px]">
                        <img className="w-16 h-16" src="/adultos.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                            No niños
                        </span>
                    </div>


                    <div className="flex flex-col items-center text-center px-[46px]">
                        <span className="block text-1xl text-black font-[300] font-secondary tracking-[1.5px]">
                            Amamos a sus pequeños, pero queremos que este día solo tengan que preocuparse por pasarla increíble.
                        </span>
                    </div>
                </ScrollAnimation>

                <img className="w-100 h-100 mt-[60px]" src="/5.jpg" alt="" />

                <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
                    <div className="flex flex-col items-center justify-center mt-[60px]">
                        <img className="w-16 h-16" src="/asistencia.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                            Confirma tu Asistencia
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-justify mt-2 px-[35px]">
                        <span className="block text-1xl text-black font-[300] font-secondary tracking-[1.5px]">
                            No podemos imaginar nuestra boda sin ti, por eso queremos asegurarnos de que estarás ahí para compartir esta felicidad con nosotros.
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-justify mt-2 px-[35px]">
                        <span className="block text-2xl text-secondary font-[300] font-cursive tracking-[1.5px]">
                            {pases} para {props.pases} {personas}
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-justify mt-2 px-[35px]">
                        <span className="block text-1xl text-black font-[300] font-secondary tracking-[1.5px]">
                            ¡Esperamos que puedas acompañarnos en este día tan especial!
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-justify mt-2 px-[35px]">
                        <span className="block text-1xl text-black font-[300] font-secondary tracking-[1.5px]">
                            ¿Contamos contigo?
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-center mt-5 px-4 space-y-4">
                        <input
                            value={nombre}
                            onChange={handleChangeNombre}
                            type="text"
                            placeholder="Tu nombre"
                            className="text-black outline-none border border-solid border-secondary p-2 bg-white w-[280px] h-[50px]" />

                        <select
                            value={selectedOption}
                            onChange={handleChangeAsistencia}
                            className="text-black outline-none border bg-white w-[280px] h-[50px] border-solid border-secondary p-2"
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
                </ScrollAnimation>

                <div className="flex flex-col items-center justify-center mt-[60px]">
                    <img src="/22.jpg" alt="Imagen 1" className="max-h-full max-w-full" />
                </div>
            </section>

            <div className="bg-secondary text-white text-center py-2">
                <span>
                    Invitación elaborada con amor por los novios.
                </span>

                <p className="text-lg font-bold">
                    ¡Gracias por escribir este nuevo capítulo con nosotros!
                </p>

                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/corazones.png" alt="" />
                </div>
            </div>
        </>
    );
}