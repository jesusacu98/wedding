// components/MusicPlayer.js
import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audio = audioRef.current;

        if (audio) {
            if (isPlaying) {
                audio.play(); // Reanudar la reproducción
            } else {
                audio.pause(); // Pausar la reproducción
            }
            setIsPlaying((prevState) => !prevState);
        }
    };

    useEffect(()=>{
        togglePlay();
    },[]);

    return (
        <div className="fixed bottom-0 right-0 m-4 z-50">
            <div className="rounded-full p-3" onClick={togglePlay}>
                {!isPlaying ? (
                    <i aria-hidden="true" className='fa-solid fa-volume-xmark text-secondary text-4xl'></i>
                ) : (
                    <i aria-hidden="true" className='fa-solid fa-play text-secondary text-4xl'></i>
                )}
            </div>
            <audio ref={audioRef} controls autoPlay className="my-custom-audio-style ml-2">
                <source src="/cancion.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
        </div>
    );
};

export default MusicPlayer;
