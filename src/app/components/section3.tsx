"use client";

export default function AboutUs() {
    return (
        <section className="flex-col md:p-10 lg:p-14 xl:p-18 bg-white">
            <div className="text-black text-center">
                {/* <div className="flex flex-col items-center justify-center">
                    <img className="w-100 h-100" src="/fondo1.png" alt="" />
                    <span className="text-secondary block text-4xl font-cursive mt-[-34px] tracking-[1.5px] absolute">
                        Nuestra
                    </span>
                    <span className="text-secondary block text-4xl font-cursive mb-[-34px] tracking-[1.5px] absolute">
                        Historia
                    </span>
                </div> */}

                {/* <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/amor.png" alt="" />
                </div> */}

                {/* <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Adriana Guadalupe Hernández Marrujo
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        &
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Jesús Alfredo Vizcarra Valdés
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Nuestra historia comienza un 18 de febrero del 2016 en una fiesta de una amiga en común, nos presentaron, empezamos a salir y finalmente nos convertimos en novios un 8 de mayo del mismo año. Hoy les anunciamos nuestro próximo matrimonio.
                    </span>
                </div> */}

                {/* <div className="flex items-center justify-center">
                    <div className="w-80 h-80 rounded-[75px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="/13.jpg" alt="" />
                    </div>
                </div> */}

                {/* <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/amor.png" alt="" />
                </div> */}

                <div className="flex flex-col items-center justify-center">
                    <img className="w-100 h-100" src="/fondo1.png" alt="" />
                    <span className="text-secondary block text-4xl font-cursive mt-[-34px] tracking-[1.5px] absolute">
                        Nuestros
                    </span>
                    <span className="text-secondary block text-4xl font-cursive mb-[-34px] tracking-[1.5px] absolute">
                        Padres
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary block text-4xl font-cursive tracking-[1.5px]">
                        Novia
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary mt-5 tracking-[1.5px]">
                        Adriana Guadalupe Marrujo Ríos
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary mt-2 tracking-[1.5px]">
                        Héctor Manuel Hernández Saenz
                    </span>
                    <span className="text-secondary block text-4xl font-cursive mt-10 tracking-[1.5px]">
                        Novio
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary mt-5 tracking-[1.5px]">
                        María Cecilia Valdés Zamudio
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary mt-2 tracking-[1.5px]">
                        José Alfredo Vizcarra Bernal
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-10">
                    <img className="w-100 h-100" src="/fondo3.png" alt="" />
                    <span className="text-secondary block text-4xl font-cursive mt-[-34px] tracking-[1.5px] absolute">
                        Nuestros
                    </span>
                    <span className="text-secondary block text-4xl font-cursive mb-[-34px] tracking-[1.5px] absolute">
                        Padrinos
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/circulo.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                        Matrimonio
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5">
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Karla Jeannette Marrujo Ríos
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Luis Fernando Plascencia Vega
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-10">
                    <img className="w-16 h-16" src="/vela.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                        Velación
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5">
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Cecilia Montserrat Vizcarra Valdés
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Ramiro López López
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-10">
                    <img className="w-16 h-16" src="/anillos.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                        Anillos
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5">
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Maria Fernanda Plascencia Marrujo
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Héctor Antonio Hernández Marrujo
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-10">
                    <img className="w-16 h-16" src="/arras.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                        Arras
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5">
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Isela Guadalupe Hernández Sainz
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-10">
                    <img className="w-16 h-16" src="/lazo.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                        Lazo
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center mt-5">
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        Rita Abigail Pasos Vizcarra
                    </span>
                    <span className="block text-[16px] font-[300] font-secondary tracking-[1.5px]">
                        José Alfredo Vizcarra Valdés
                    </span>
                </div>
            </div>
        </section>
    );
}