"use client";
import { useEffect, useRef, useState } from "react";

export default function Portada() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const togglePlay = () => {
        const audio = audioRef.current;

        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying((prevState) => !prevState);
        }
    };

    const handleScroll = () => {
        if (!hasScrolled) {
            // Realiza acciones relacionadas con el primer scroll aquí
            console.log("Usuario ha hecho el primer scroll");
            togglePlay();
            setHasScrolled(true); // Actualiza el estado para indicar que ya ha ocurrido el primer scroll
        }
    };

    useEffect(() => {
        // Agrega el event listener al objeto window
        window.addEventListener("scroll", handleScroll);

        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasScrolled]);

    return (
        <>
            <div className="fixed bottom-0 right-0 m-4 z-50">
                <div className="rounded-full p-3" onClick={togglePlay}>
                    {!isPlaying ? (
                        <i aria-hidden="true" className='fa-solid fa-play text-secondary text-4xl'></i>
                    ) : (
                        <i aria-hidden="true" className='fa-solid fa-volume-xmark text-secondary text-4xl'></i>
                    )}
                </div>
                <audio ref={audioRef} controls autoPlay className="my-custom-audio-style ml-2 hidden">
                    <source src="/cancion.mp3" type="audio/mp3" />
                    Tu navegador no soporta la etiqueta de audio.
                </audio>
            </div>
            <section onClick={togglePlay} className="flex-col w-full h-screen relative flex bg-cover bg-center" style={{ backgroundImage: "url('17.jpg')" }}>
                <div className="flex flex-col text-white text-center pt-[2rem]">
                    <span className="block text-2xl font-principal tracking-[6.5px] ml-[-4rem]">
                        NUESTRA BODA
                    </span>
                    <span className="block text-4xl font-cursive mb-1 ml-[7rem] mt-[1rem]">
                        Adriana & Jesús
                    </span>
                </div>
            </section>
        </>
    );
}
