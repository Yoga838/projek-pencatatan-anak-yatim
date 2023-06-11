import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";



export default async function handler(req,res){

    if (req.method === "PUT"){
        const {nama,email,password,provinsi,kabupaten,kecamatan,desa,kode_pos,alamat_kantor} = req.body
        if(!nama||!email||!password||!provinsi||!kabupaten||!kecamatan||!desa||!kode_pos||!alamat_kantor){
            return res.status(400).json({message:"data tidak boleh kosong"})
        }
        const HashedPassword = await hash(password,10)
        const daftar = await prisma.akun.create({
            data:{
                nama,
                email,
                password:HashedPassword,
                provinsi,
                kabupaten,
                kecamatan,
                desa,
                kode_pos,
                alamat_kantor
            }
        })
        return res.status(200).json({message:"Registrasi Berhasil"})
    }
}