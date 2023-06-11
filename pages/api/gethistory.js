import prisma from "@/lib/prisma";
export default async function handler(req,res){
    if(req.method === "GET"){
        const gethistory = await prisma.history.findMany({
            orderBy:{
                id:'desc'
            }
        })
        return res.send(gethistory)
    }
}