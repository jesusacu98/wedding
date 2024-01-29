"use client";
import { useState, useEffect } from "react";
import Portada from "./components/section1";
import Contador from "./components/section2";
import AboutUs from "./components/section3";
import Location from "./components/section4";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Portada></Portada>
            <Contador></Contador>
            <AboutUs></AboutUs>
            <Location></Location>
        </div>
    );
}
