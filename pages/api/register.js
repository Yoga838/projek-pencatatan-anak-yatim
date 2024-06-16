import prisma from '../../lib/prisma'

import { compare, hash } from "bcrypt";



export default async function handler(req,res){
    if (req.method === "DELETE"){
            const id = req.query.id
            const deleted = await prisma.akun.delete({
                where:{
                    id:parseInt(id)
                }
            })
            return res.status(200).json({message:"Berhasil menghapus data!"})
    }

    if (req.method === "PUT"){
        const {nama,email,password} = req.body
        if(!nama||!email||!password){
            return res.status(400).json({message:"data tidak boleh kosong"})
        }
        const HashedPassword = await hash(password,10)
        const daftar = await prisma.akun.create({
            data:{
                nama,
                email,
                password:HashedPassword,
            }
        })
        return res.status(200).json({message:"Registrasi Berhasil"})
    }
}