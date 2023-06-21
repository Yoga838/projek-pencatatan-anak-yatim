import prisma from '../../lib/prisma'

export default async function handler(req,res){
    if(req.method === "POST"){
        const {nik,nama,tanggal_lahir,tempat_lahir,status,anak_ke,jumlah_saudara,pendidikan,nama_ayah,nama_ibu,kondisi,tempat_lahir_ayah,tanggal_lahir_ayah,jenis_kelamin_ayah,umur_ayah,hari_meninggal_ayah,tanggal_meninggal_ayah,meninggal_karena_ayah,tempat_lahir_ibu,tanggal_lahir_ibu,jenis_kelamin_ibu,umur_ibu,hari_meninggal_ibu,tanggal_meninggal_ibu,meninggal_karena_ibu} = req.body
        if(!nik||!nama||!tanggal_lahir||!tempat_lahir||!status||!anak_ke||!jumlah_saudara||!pendidikan||!nama_ayah||!nama_ibu||!kondisi){
            return res.status(400).json({message:"data tidak boleh kosong!"})
        }
        const searchnik = await prisma.data.findUnique({
            where:{nik:nik}
        })
        if(searchnik){
            return res.status(400).json({message:"NIK sudah di pakai"})
        }
        if (status == 'Yatim'){
            if(!tempat_lahir_ayah,!tanggal_lahir_ayah,!jenis_kelamin_ayah,!umur_ayah,!hari_meninggal_ayah,!tanggal_meninggal_ayah,!meninggal_karena_ayah){
                return res.status(400).json({message:"data tidak boleh kosong"})
            }
            const date = new Date(tanggal_lahir_ayah).toISOString()
            const date2 = new Date(tanggal_meninggal_ayah).toISOString()

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
                    kondisi,
                    tempat_lahir_ayah,
                    tanggal_lahir_ayah:date,
                    jenis_kelamin_ayah,
                    umur_ayah,
                    hari_meninggal_ayah,
                    tanggal_meninggal_ayah:date2,
                    meninggal_karena_ayah
                }
            })
            return res.status(200).json({message:"Data berhasil ditambahkan"})
        }
        if (status == 'Piatu'){
            if(!tempat_lahir_ibu,!tanggal_lahir_ibu,!jenis_kelamin_ibu,!umur_ibu,!hari_meninggal_ibu,!tanggal_meninggal_ibu,!meninggal_karena_ibu){
                return res.status(400).json({message:"data tidak boleh kosong"})
            }
            const date = new Date(tanggal_lahir_ibu).toISOString()
            const date2 = new Date(tanggal_meninggal_ibu).toISOString()

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
                    kondisi,
                    tempat_lahir_ibu,
                    tanggal_lahir_ibu:date,
                    jenis_kelamin_ibu,
                    umur_ibu,
                    hari_meninggal_ibu,
                    tanggal_meninggal_ibu:date2,
                    meninggal_karena_ibu
                }
            })
            return res.status(200).json({message:"Data berhasil ditambahkan"})
        }
        if (status == 'Yatim-Piatu'){
            if(!tempat_lahir_ibu,!tanggal_lahir_ibu,!jenis_kelamin_ibu,!umur_ibu,!hari_meninggal_ibu,!tanggal_meninggal_ibu,!meninggal_karena_ibu,!tempat_lahir_ayah,!tanggal_lahir_ayah,!jenis_kelamin_ayah,!umur_ayah,!hari_meninggal_ayah,!tanggal_meninggal_ayah,!meninggal_karena_ayah){
                return res.status(400).json({message:"data tidak boleh kosong"})
            }
            const date = new Date(tanggal_lahir_ibu).toISOString()
            const date2 = new Date(tanggal_meninggal_ibu).toISOString()
            const date3 = new Date(tanggal_lahir_ayah).toISOString()
            const date4 = new Date(tanggal_meninggal_ayah).toISOString()

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
                    kondisi,
                    tempat_lahir_ibu,
                    tanggal_lahir_ibu:date,
                    jenis_kelamin_ibu,
                    umur_ibu,
                    hari_meninggal_ibu,
                    tanggal_meninggal_ibu:date2,
                    meninggal_karena_ibu,
                    tempat_lahir_ayah,
                    tanggal_lahir_ayah:date3,
                    jenis_kelamin_ayah,
                    umur_ayah,
                    hari_meninggal_ayah,
                    tanggal_meninggal_ayah:date4,
                    meninggal_karena_ayah
                }
            })
            return res.status(200).json({message:"Data berhasil ditambahkan"})
        }
    }
}