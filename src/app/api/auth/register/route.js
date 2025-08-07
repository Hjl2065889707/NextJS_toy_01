import connect from "@/utils/db"
import User from "@/models/User"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export const POST = async (req) => {
    const { name, email, password } = await req.json()
    await connect()

    const hashedPassword = await bcrypt.hash(password, 5)
    const user = new User({ name, email, password: hashedPassword })
    try {
        await user.save()
        return new NextResponse('User has been created', { status: 201 })
    } catch (error) {
        return new NextResponse(error.message, { status: 500 })
    }
}