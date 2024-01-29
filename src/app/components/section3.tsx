"use client";

export default function Location() {
    return (
        <section className="flex-col p-6 md:p-10 lg:p-14 xl:p-18 bg-white">
            <div className="text-black text-center">
                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="https://aleypablo.nuestroinvitado.com/20deagosto/wp-content/uploads/elementor/thumbs/Icono-AyP-1-ox0d51d7sn3p8xmpe9lj31t3merqoalijt88tn98vw.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">Dónde y Cuándo</span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                    <p className="block text-[16px] font-[300] font-cursive tracking-[1.5px]">Esperamos verte</p>
                </div>

                <div className="relative flex flex-col md:flex-row text-primary">
                    <div className="w-full md:w-1/2 relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/iglesia.jpg')" }}>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <p className="text-3xl whitespace-nowrap">Ceremonia Religiosa</p>
                            <p className="text-xl whitespace-nowrap">Viernes 08 de Marzo 2024</p>
                            <p className="text-xl whitespace-nowrap">5:00 PM</p>
                            <p className="text-xl whitespace-nowrap">Parroquia San Carlos Borromeo</p>
                            <p className="text-xl whitespace-nowrap">Río Baluarte, Palos Prietos</p>
                            <a href="https://maps.app.goo.gl/igbZxGefqC3VNn3j6" target="_blank" className="bg-secondary text-primary px-4 py-2 mt-2">VER UBICACIÓN</a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/salon.jpg')" }}>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <p className="text-3xl whitespace-nowrap">La Fiesta</p>
                            <p className="text-xl whitespace-nowrap">Viernes 08 de Marzo 2024</p>
                            <p className="text-xl whitespace-nowrap">7:00 PM - 1:00 AM</p>
                            <p className="text-xl whitespace-nowrap">LaFerro Salón Jardín</p>
                            <p className="text-xl whitespace-nowrap">Flamingos 301, Palos Prietos</p>
                            <a href="https://maps.app.goo.gl/uxDaQL243JVJaGTQ8" target="_blank" className="bg-secondary text-primary px-4 py-2 mt-2">VER UBICACIÓN</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center pt-10">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">Adriana Hernandez</span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                    <p className="block text-[16px] font-[300] font-cursive tracking-[1.5px]">Nuestra historia comienza un 18 de febrero del 2016 en una fiesta de una amiga en común, nos presentaron, empezamos a salir y finalmente nos convertimos en novios un 8 de mayo del mismo año. Hoy les anunciamos nuestro próximo matrimonio.</p>
                </div>

                <div className="flex flex-col items-center justify-center pt-4">
                    <div className="p-4 flex justify-center items-center space-x-10">
                        <a href="#" className="text-secondary text-[30px]">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-secondary text-[30px]">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-secondary text-[30px]">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center pt-10">
                    <div className="w-80 h-80 rounded-[75px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="/juntos.png" alt="" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center pt-10">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">Jesús Vizcarra</span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                    <p className="block text-[16px] font-[300] font-cursive tracking-[1.5px]">Nuestra historia comienza un 18 de febrero del 2016 en una fiesta de una amiga en común, nos presentaron, empezamos a salir y finalmente nos convertimos en novios un 8 de mayo del mismo año. Hoy les anunciamos nuestro próximo matrimonio.</p>
                </div>

                <div className="flex flex-col items-center justify-center pt-4">
                    <div className="p-4 flex justify-center items-center space-x-10">
                        <a href="#" className="text-secondary text-[30px]">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-secondary text-[30px]">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-secondary text-[30px]">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
}