"use client";

export default function Location() {
    return (
        <section className="flex-col pl-6 md:pl-10 lg:pl-14 xl:pl-[24rem] pr-6 md:pr-10 lg:pr-14 xl:pr-[24rem] bg-white">
            <div className="text-black text-center">
                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/ubicacion.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">Dónde y Cuándo</span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                    <p className="block text-[16px] font-[300] font-cursive tracking-[1.5px]">Esperamos verte</p>
                </div>

                <div className="relative flex flex-col md:flex-row text-primary leading-10">
                    <div className="w-full md:w-1/2 relative bg-cover bg-center border border-black border-solid p-4 h-[25.4rem]" style={{ backgroundImage: "url('/iglesia.jpg')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="flex flex-col items-center justify-center pb-3">
                                <i aria-hidden="true" className="fas fa-church text-4xl"></i>
                            </div>
                            <p className="font-cursive text-3xl whitespace-nowrap">Ceremonia Religiosa</p>
                            <p className="font-secondary text-base whitespace-nowrap">Viernes 08 de Marzo 2024</p>
                            <p className="font-secondary text-base whitespace-nowrap">5:00 PM</p>
                            <p className="font-secondary text-base whitespace-nowrap">Parroquia San Carlos Borromeo</p>
                            <p className="font-secondary text-base whitespace-nowrap pb-2">Río Baluarte, Palos Prietos</p>
                            <a href="https://maps.app.goo.gl/igbZxGefqC3VNn3j6" target="_blank" className="font-secondary text-sm tracking-ultra-wide bg-secondary text-primary px-4 py-2 mt-2 font-bold">VER UBICACIÓN</a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative bg-cover bg-center border border-black border-solid p-4 h-[25.4rem]" style={{ backgroundImage: "url('/salon.jpg')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="flex flex-col items-center justify-center pb-3">
                                <i aria-hidden="true" className="fas fa-champagne-glasses text-4xl"></i>
                            </div>
                            <p className="font-cursive text-3xl whitespace-nowrap">La Fiesta</p>
                            <p className="font-secondary text-base whitespace-nowrap">Viernes 08 de Marzo 2024</p>
                            <p className="font-secondary text-base whitespace-nowrap">7:00 PM - 1:00 AM</p>
                            <p className="font-secondary text-base whitespace-nowrap">LaFerro Salón Jardín</p>
                            <p className="font-secondary text-base whitespace-nowrap pb-2">Flamingos 301, Palos Prietos</p>
                            <a href="https://maps.app.goo.gl/uxDaQL243JVJaGTQ8" target="_blank" className="font-secondary text-sm tracking-ultra-wide bg-secondary text-primary px-4 py-2 mt-2 font-bold">VER UBICACIÓN</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}