"use client";

export default function Reglas() {
    return (
        <section className="flex-col md:pl-10 lg:pl-14 xl:pl-[24rem] md:pr-10 lg:pr-14 xl:pr-[24rem] bg-white">
            <img src="/8.jpg" alt="Imagen 1" className="max-h-full max-w-full" />

            <div className="flex flex-col items-center justify-center">
                <img className="w-100 h-100" src="/fondo2.png" alt="" />
                <span className="text-secondary block text-4xl font-cursive mt-[-34px] tracking-[1.5px] absolute">
                    Código de
                </span>
                <span className="text-secondary block text-4xl font-cursive mb-[-34px] tracking-[1.5px] absolute">
                    Vestimenta
                </span>
            </div>

            <div className="flex items-center justify-center mt-[-60px]">
                <img className="w-16 h-16" src="/vestido.png" alt="" />
                <img className="w-16 h-16" src="/traje.png" alt="" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <span className="text-black block text-4xl font-cursive mt-5 tracking-[1.5px]">
                    Formal
                </span>
            </div>

            {/* <div className="flex flex-col items-center justify-center">
                <span className="text-secondary block text-4xl font-cursive mt-2 tracking-[1.5px]">
                    Matrimonio
                </span>
            </div> */}
        </section>
    );
}