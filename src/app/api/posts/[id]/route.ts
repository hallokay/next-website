import connect from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

type Params = {
    params: {
        id: string
    }
}

export const GET = async (req: any,{params: {id}}: Params) => {

    try {
        await connect();
        const post:any = await Post.findById(id);

        return new NextResponse(JSON.stringify(post), {status: 200})
   
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });

    }

}