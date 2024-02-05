"use client";

export default function Informacion() {
    return (
        <section className="flex-col p-5 md:p-10 lg:p-14 xl:p-18 bg-secondary">
            <div className="text-black text-center">
                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/regalo.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-white block text-4xl font-secondary mt-2 tracking-[1.5px]">
                        Mesa de regalos
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-white block text-4xl font-secondary mt-2 tracking-[1.5px]">
                        Liverpool
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-white block text-4xl font-secondary mt-2 tracking-[1.5px]">
                        Evento: 51298252
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51298252" target="_blank" className="font-secondary text-sm tracking-ultra-wide bg-secondary text-primary px-4 py-2 mt-2 font-bold">VER MESA</a>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-white block text-4xl font-secondary mt-2 tracking-[1.5px]">
                        Cimaco
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-white block text-4xl font-secondary mt-2 tracking-[1.5px]">
                        Evento: 43880
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <a href="https://www.cimaco.com.mx/mesa-regalo/43880" target="_blank" className="font-secondary text-sm tracking-ultra-wide bg-secondary text-primary px-4 py-2 mt-2 font-bold">VER MESA</a>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/regalo.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-white block text-4xl font-secondary mt-2 tracking-[1.5px]">
                        Lluvia de sobres
                    </span>
                </div>
            </div>
        </section>
    );
}