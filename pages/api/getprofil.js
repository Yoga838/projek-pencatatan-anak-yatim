import prisma from "@/lib/prisma";
import { verify,sign } from "jsonwebtoken";
const JWT_SECRET = 'My-Lover';

export default async function handler(req,res){
    if(req.method === "POST"){
        const{token} = req.body
        if(!token){
            return res.status(200).json({message:"token tidak ada"})
        }
        const decode = verify(token,JWT_SECRET)
        const id = decode.userId

        const getprofil = await prisma.akun.findUnique({where:{id}})
        return res.send(getprofil)
    }
}