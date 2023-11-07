import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";


export async function GET(request: NextRequest, response: NextResponse) {
    let success = true;
    try {
        const movies = await prismadb.movie.findMany();
        return NextResponse.json(movies);
    } catch (error) {
        success = false;
        console.log(error + "From movies API");
        return NextResponse.json({success});
    }
}