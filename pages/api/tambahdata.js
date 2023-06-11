import prisma from "@/lib/prisma";
export default async function handler(req,res){
    if(req.method === "POST"){
        const {nik,nama,tanggal_lahir,tempat_lahir,status,anak_ke,jumlah_saudara,pendidikan,nama_ayah,nama_ibu,kondisi} = req.body
        if(!nik||!nama||!tanggal_lahir||!tempat_lahir||!status||!anak_ke||!jumlah_saudara||!pendidikan||!nama_ayah||!nama_ibu||!kondisi){
            return res.status(400).json({message:"data tidak boleh kosong!"})
        }
        const searchnik = await prisma.data.findUnique({
            where:{nik:nik}
        })
        if(searchnik){
            return res.status(400).json({message:"NIK sudah di pakai"})
        }
        const adddata = await prisma.data.create({
            data:{
                nik,
                nama,
                tanggal_lahir,
                tempat_lahir,
                status,
                anak_ke,
                jumlah_saudara,
                pendidikan,
                nama_ayah,
                nama_ibu,
                kondisi
            }
        })
        return res.status(200).json({message:"Data berhasil ditambahkan"})
    }
}