import prisma from '../../lib/prisma'

export default async function handler(req, res){
    if(req.method === "GET"){ 
        const data = await prisma.akun.findMany();

        return res.status(200).json(data)
    }  
}