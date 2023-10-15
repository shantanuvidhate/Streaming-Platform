import  prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server";
export async function GET () {
    let data = {};
    let success = true;
    try {
        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovies = await prismadb.movie.findMany({
            take:1,
            skip:randomIndex
        });
        data = randomMovies[0];
    }
    catch (error) {
        success = false;
        console.log(error+ "From random route");
    }
    return NextResponse.json({data,success});
}