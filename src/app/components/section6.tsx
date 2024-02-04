"use client";

export default function Informacion() {
    return (
        <section className="flex-col p-6 md:p-10 lg:p-14 xl:p-18 bg-secondary">
            <div className="text-black text-center">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-white block text-4xl font-cursive mt-2 tracking-[1.5px]">
                        Mesa de regalos
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/amor.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                    <span className="block text-[16px] font-[300] font-cursive tracking-[1.5px]">
                        Adriana Guadalupe Marrujo Ríos
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/amor.png" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center mt-5 px-[46px]">
                    <span className="block text-[16px] font-[300] font-cursive tracking-[1.5px]">
                        María Cecilia Valdés Zamudio
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16" src="/amor.png" alt="" />
                </div>
            </div>
        </section>
    );
}