"use client";
import { useState, useEffect } from "react";
import Portada from "./components/section1";
import Contador from "./components/section2";
import AboutUs from "./components/section3";
import Location from "./components/section4";
import Fotos from "./components/section5";
import Informacion from "./components/section6";
import Reglas from "./components/section7";

export default function Home() {
    const [pases, setPases] = useState(1);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const numberParam = urlParams.get('np');
        if (numberParam) setPases(Number(numberParam)); // Convertimos a número antes de establecer el estado
    }, []);

    return (
        <div className="flex flex-col">
            <Portada></Portada>
            <Contador></Contador>
            <AboutUs></AboutUs>
            <Location></Location>
            <Fotos></Fotos>
            <Informacion></Informacion>
            <Reglas pases={pases}></Reglas>
        </div>
    );
}
