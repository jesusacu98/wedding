export default function Home() {
    return (
        <div className="flex flex-col">

            <section className="w-full h-screen relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/fotos/anillo.png')" }}>
                <div className="text-white text-center">
                    <span className="block text-4xl font-custom-serif tracking-tighter mb-1">NUESTRA BODA</span>
                    <span className="block text-4xl font-custom-serif tracking-tighter">Adriana & Jesús</span>
                </div>
            </section>



            <section className="py-20 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Detalles de la Boda</h2>
                    {/* Agrega aquí los detalles de la boda */}
                </div>
            </section>

            <section className="bg-cover bg-center h-screen relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h2 className="text-4xl font-bold mb-4">¡Esperamos verte ahí!</h2>
                </div>
            </section>
        </div>
    );
}