import { sign } from "jsonwebtoken";
import prisma from "@/lib/prisma";
const JWT_SECRET = "My-Lover";
import { compare } from "bcrypt";
export default async function handler(req, res){
    if (req.method === "POST"){
        const {email,password} = req.body
        if(!email||!password){
            return res.status(400).json({message:"data tidak boleh kosong!"})
        }
        const akun  = await prisma.akun.findUnique({
            where:{
                email
            }
        })
        if(!akun){
            return res.status(400).json({message:"email atau password yang anda masukkan salah"})
        }
        const cekpassword = await compare(password, akun.password)
        if(!cekpassword){
            return res.status(400).json({message:"email atau password yang anda masukkan salah"})
        }
        const token = sign({userId: akun.id}, JWT_SECRET, { expiresIn: '1d'} );
        return res.status(200).json({token})
    }   
}