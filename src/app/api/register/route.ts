import prismadb from "@/lib/prismadb"
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        let body = await request.json();
        const { email, name, password } = body;

        if (!email || !name || !password) {
            return new NextResponse("Missing info", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date()
            }
        })
        return NextResponse.json(user);
    }
    catch (error : any) {
        console.log(error, "reg error");
        return new NextResponse('Internal Error', {status :500 })
    }
}