"use client";
import { useEffect, useRef, useState } from "react";

export default function Portada() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

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

    //Se comentó este fragmento de código
    // useEffect(() => {
    //     // Función para iniciar la reproducción cuando se hace clic en cualquier parte de la página
    //     const handlePageClick = () => {
    //         if (!isPlaying) {
    //             togglePlay();
    //         }
    //     };

    //     // Agrega el event listener al objeto document para capturar los clics en cualquier parte de la página
    //     document.addEventListener("click", handlePageClick);

    //     // Limpia el event listener al desmontar el componente
    //     return () => {
    //         document.removeEventListener("click", handlePageClick);
    //     };
    // }, [isPlaying]);

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
                <audio ref={audioRef} controls className="my-custom-audio-style ml-2 hidden">
                    <source src="/cancion.mp3" type="audio/mp3" />
                    Tu navegador no soporta la etiqueta de audio.
                </audio>
            </div>
            <section onClick={togglePlay} className="flex-col w-full h-screen relative flex bg-cover bg-center bgi-principal">
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
