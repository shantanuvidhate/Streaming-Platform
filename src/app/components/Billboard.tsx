"use client"
import { useEffect } from "react";

export default function Billboard() {

    useEffect(() => {
        getRandomMovie ();
    },[])

    const getRandomMovie = async () => {
        let randomMovie = await fetch("http://localhost:3000/api/random")
        randomMovie = await randomMovie.json();
        console.log(randomMovie);
    }
    return (
        <div></div>
    );
}