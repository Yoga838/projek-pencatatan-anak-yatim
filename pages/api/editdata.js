import prisma from '../../lib/prisma'
export default async function handler(req,res){
    if(req.method === "PATCH"){
        const {nik,nama,tanggal_lahir,tempat_lahir,status,anak_ke,jumlah_saudara,pendidikan,nama_ayah,nama_ibu,kondisi,id} = req.body
        if(!nik||!nama||!tanggal_lahir||!tempat_lahir||!status||!anak_ke||!jumlah_saudara||!pendidikan||!nama_ayah||!nama_ibu||!kondisi){
            return res.status(400).json({message:"data tidak boleh kosong!"})
        }
        const editdata = await prisma.data.update({
            where:{
                id
            },
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
        return res.status(200).json({message:"Data berhasil diedit"})
    }
}