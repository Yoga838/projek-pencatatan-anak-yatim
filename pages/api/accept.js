import prisma from '../../lib/prisma'

export default async function handler(req,res){
    if(req.method === "GET"){
        const getdata = await prisma.data_pengajuan.findFirst({
            where:{
                id:Number(req.query.id)
            }
        })
        return res.status(200).json(getdata)
    }
    if(req.method === "DELETE"){
        const deteledata = await prisma.data_pengajuan.delete({
            where:{
                id:Number(req.query.id)
            }
        })
        return res.status(200).json({message:"Data Berhasil Di Hapus"} )
    }
    if(req.method === "POST"){
        const findData = await prisma.data_pengajuan.findFirst({
            where:{
                id:Number(req.query.id)
            }
        })

        if(findData.status_pengajuan === "Diterima" || findData.status_pengajuan === "Ditolak"){
            return res.status(400).json("Data Sudah Di Setujui Atau Sudah Ditolak")
        }

        const moveToData = await prisma.data.create({
            data:{
                    nik : findData.nik,
                    nama : findData.nama,
                    tanggal_lahir : findData.tanggal_lahir,
                    tempat_lahir  : findData.tempat_lahir,
                    status : findData.status,
                    anak_ke : findData.anak_ke,
                    jumlah_saudara : findData.jumlah_saudara,
                    pendidikan : findData.pendidikan,
                    nama_ayah : findData.nama_ayah,
                    nama_ibu : findData.nama_ibu,
                    kondisi : findData.kondisi,
                    tempat_lahir_ibu : findData.tempat_lahir_ibu,
                    tanggal_lahir_ibu: findData.tanggal_lahir_ibu,
                    jenis_kelamin_ibu : findData.jenis_kelamin_ibu,
                    umur_ibu : findData.umur_ibu,
                    hari_meninggal_ibu : findData.hari_meninggal_ibu,
                    tanggal_meninggal_ibu : findData.tanggal_meninggal_ibu,
                    meninggal_karena_ibu : findData.meninggal_karena_ibu,
                    tempat_lahir_ayah : findData.tempat_lahir_ayah,
                    tanggal_lahir_ayah: findData.tanggal_lahir_ayah,
                    jenis_kelamin_ayah : findData.jenis_kelamin_ayah,
                    umur_ayah : findData.umur_ayah,
                    hari_meninggal_ayah : findData.hari_meninggal_ayah,
                    tanggal_meninggal_ayah: findData.tanggal_meninggal_ayah,
                    meninggal_karena_ayah : findData.meninggal_karena_ayah,
            }
        })
        const update = await prisma.data_pengajuan.update({
            where:{
                id:Number(req.query.id)
            },
            data:{
                status_pengajuan : "Diterima"
            }
        })
        return res.status(200).json({message:"Data Berhasil Di Setujui Harap Kirim File ke Nomor Bersangkutan!"})
    }
}