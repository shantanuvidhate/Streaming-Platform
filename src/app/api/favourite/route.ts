import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/lib/prismadb"
import { without } from "lodash";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:any) {
    let payload = await request.json();
    console.log(payload)
    try {

        const  currentUser = await getCurrentUser();
        console.log(currentUser);
        const {movieId} = request.body;

        // const existinngMovie = await prismadb.movie.findUnique({
        //     where :{
        //         id:movieId
        //     }
        // });

        // if (!existinngMovie) {
        //     throw new Error ("Invalid ID");
        // }

        // const user = await prismadb.user.update ({
        //     where: {
        //         email : email
        //     },
        //     data :{
        //         favouriteIds : {
        //             push : movieId
        //         }
        //     }
        // });
        return NextResponse.json({});
    }
    catch (error) {
        console.log(error);
    }
}