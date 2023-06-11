import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { verify,sign } from "jsonwebtoken";
const JWT_SECRET = 'My-Lover';

export default async function handler(req,res){
    if(req.method === "POST"){
        const {token,nama,email,password,provinsi,kabupaten,kecamatan,desa,kode_pos,alamat_kantor} = req.body
        if(!nama||!email||!password||!provinsi||!kabupaten||!kecamatan||!desa||!kode_pos||!alamat_kantor||!token){
            return res.status(400).json({message:"data tidak boleh kosong"})
        }

        const decode = verify(token,JWT_SECRET)
        const id = decode.userId

        const hashpassword = await hash(password,10)
        const get_akun = await prisma.akun.findUnique({where:{email}})
        if(get_akun){
            if(get_akun.id != id){
                return res.status(400).json({message:"email yang anda gunakan telah digunakan user lain "})
            }
        }
        const update = await prisma.akun.update({
            where:{
                id
            },
            data:{
                nama,
                email,
                password:hashpassword,
                provinsi,
                kabupaten,
                kecamatan,
                desa,
                kode_pos,
                alamat_kantor
            }
        })
        res.status(200).json({message:"data berhasil diperbarui"})
    }
}