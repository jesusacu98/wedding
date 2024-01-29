"use client";
import { useState, useEffect } from "react";
import Portada from "./components/section1";
import AboutUs from "./components/section2";
import Location from "./components/section3";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Portada></Portada>
            <AboutUs></AboutUs>
            <Location></Location>
        </div>
    );
}
