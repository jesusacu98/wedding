"use client";

export default function Portada() {
    return (
        <section className="flex-col w-full h-screen relative flex bg-cover bg-center" style={{ backgroundImage: "url('17.jpg')" }}>
            <div className="flex flex-col text-white text-center pt-[2rem]">
                <span className="block text-2xl font-principal tracking-[6.5px] ml-[-4rem]">
                    NUESTRA BODA
                </span>
                <span className="block text-4xl font-cursive mb-1 ml-[7rem] mt-[1rem]">
                    Adriana & Jesús
                </span>
            </div>
        </section>
    );
}