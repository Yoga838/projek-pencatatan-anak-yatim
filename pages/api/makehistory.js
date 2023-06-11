import prisma from '../../lib/prisma'

import { verify,sign } from "jsonwebtoken";
const JWT_SECRET = 'My-Lover';


export default async function handler(req,res){
    if(req.method === "POST"){
        const {token,id}=req.body
        if(!token||!id){
            return res.status(200).json({message:"data tidak boleh kosong"})
        }
        const decodetoken = verify(token, JWT_SECRET)
        const idUser = decodetoken.userId


        const data = await prisma.data.findUnique({where:{id:Number(id)}})
        const nik = data.nik
        const nama = data.nama
        const keterangan = "Cetak Surat - SKTM"
        const tanggal = new Date;
        
        const get_akun = await prisma.akun.findUnique({where:{id:Number(idUser)}})
        const makehistory = await prisma.history.create({
            data:{
                nik,
                nama,
                keterangan,
                tanggal,
                pegawai:get_akun.nama,

            }
        })
        res.send(id)
        return res.status(200).json({message:"berhasil menambah history"})
    }
}