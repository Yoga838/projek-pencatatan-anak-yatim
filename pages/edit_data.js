import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import nookies from 'nookies'

export async function getServerSideProps(ctx){
    const cookies = nookies.get(ctx)
  
    if(!cookies.token){
      return{
        redirect:{
          destination : '/'
      }
      }
    }
    return{
      props: {}
    }
  }
  

export default function edit_data() {
  
   //set userouter to variable
   const Router = useRouter()
  
   //data from query
   const {query:{id,name}} = Router
     //set data to send
   const send ={"id":Number(id)}
   
   //data setter getter
   const [data,setdata]= useState([])
 
   //setdata onload
   useEffect(()=>{
     const {query:{id,name}} = Router
     //set data to send
     const send ={"id":Number(id)}
     async function getdata (){
         const response = await fetch("/api/getdatadetail",{
             method:"POST",
             headers:{
                 'Content-Type': 'application/json'
             },
             body:JSON.stringify(send)
         })
         const data = await response.json()
         setdata(data)
     }
     getdata()
   },[Router])

   //set format from iso dates to short dates

   const formatShortDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };
  

  //set shortdate
  const date = formatShortDate(data.tanggal_lahir)
  const date2 = formatShortDate(data.tanggal_lahir_ayah)
  const date3 = formatShortDate(data.tanggal_meninggal_ayah)
  const date4 = formatShortDate(data.tanggal_lahir_ibu)
  const date5 = formatShortDate(data.tanggal_meninggal_ibu)
  
  //setter data
  const [NIK,setnik]=useState()
  const [NAMA,setnama]=useState()
  const [TANGGAL,settanggal]=useState()
  const [TEMPAT,settempat]=useState()
  const [STATUS,setstatus]=useState()
  const [ANAK_KE,setanakke]=useState()
  const [JUMLAH,setjumlah]=useState()
  const [PENDIDIKAN,setpendidikan]=useState()
  const [NAMA_AYAH,setnamaayah]=useState()
  const [NAMA_IBU,setnamaibu]=useState()
  const [KONDISI,setkondisi]=useState()
  const [TEMPAT_LAHIR_AYAH,set_tempat_lahir_ayah]=useState('')
  const [TANGGAL_LAHIR_AYAH,set_tanggal_lahir_ayah]=useState('')
  const [JENIS_KELAMIN_AYAH,set_jenis_kelamin_ayah]=useState('')
  const [UMUR_AYAH,set_umur_ayah]=useState('')
  const [HARI_MENINGGAL_AYAH,set_hari_meninggal_ayah]=useState('')
  const [TANGGAL_MENINGGAL_AYAH,set_tanggal_meninggal_ayah]=useState('')
  const [MENINGGAL_KARENA_AYAH,set_meninggal_karena_ayah]=useState('')

  const [TEMPAT_LAHIR_IBU,set_tempat_lahir_ibu]=useState('')
  const [TANGGAL_LAHIR_IBU,set_tanggal_lahir_ibu]=useState('')
  const [JENIS_KELAMIN_IBU,set_jenis_kelamin_ibu]=useState('')
  const [UMUR_IBU,set_umur_ibu]=useState('')
  const [HARI_MENINGGAL_IBU,set_hari_meninggal_ibu]=useState('')
  const [TANGGAL_MENINGGAL_IBU,set_tanggal_meninggal_ibu]=useState('')
  const [MENINGGAL_KARENA_IBU,set_meninggal_karena_ibu]=useState('')

  const nik = NIK || data.nik 
  const nama = NAMA || data.nama 
  const tanggal_lahir = TANGGAL || date 
  const tempat_lahir = TEMPAT || data.tempat_lahir
  const status = STATUS || data.status
  const anak_ke = ANAK_KE || data.anak_ke
  const jumlah_saudara = JUMLAH || data.jumlah_saudara
  const pendidikan = PENDIDIKAN || data.pendidikan
  const nama_ayah = NAMA_AYAH || data.nama_ayah
  const nama_ibu = NAMA_IBU || data.nama_ibu
  const kondisi = KONDISI || data.kondisi

  //data optional yatim and piatu or optional
  const tempat_lahir_ayah = TEMPAT_LAHIR_AYAH ||data.tempat_lahir_ayah
  const tanggal_lahir_ayah = TANGGAL_LAHIR_AYAH ||date2
  const jenis_kelamin_ayah = JENIS_KELAMIN_AYAH ||data.jenis_kelamin_ayah
  const umur_ayah = UMUR_AYAH ||data.umur_ayah
  const hari_meninggal_ayah = HARI_MENINGGAL_AYAH ||data.hari_meninggal_ayah
  const tanggal_meninggal_ayah = TANGGAL_MENINGGAL_AYAH ||date3
  const meninggal_karena_ayah = MENINGGAL_KARENA_AYAH || data.meninggal_karena_ayah

  const tempat_lahir_ibu = TEMPAT_LAHIR_IBU ||data.tempat_lahir_ibu
  const tanggal_lahir_ibu = TANGGAL_LAHIR_IBU ||date3
  const jenis_kelamin_ibu = JENIS_KELAMIN_IBU ||data.jenis_kelamin_ibu
  const umur_ibu = UMUR_IBU ||data.umur_ibu
  const hari_meninggal_ibu = HARI_MENINGGAL_IBU ||data.hari_meninggal_ibu
  const tanggal_meninggal_ibu = TANGGAL_MENINGGAL_IBU ||date4
  const meninggal_karena_ibu = MENINGGAL_KARENA_IBU || data.meninggal_karena_ibu
  
  async function edit_data (){
    const tanggal = new Date(tanggal_lahir).toISOString()

    //set send format
    const sending = {
        "id":Number(id),
        "nik":nik,
        "nama":nama,
        "tanggal_lahir":tanggal,
        "tempat_lahir":tempat_lahir,
        "status":status,
        "anak_ke":anak_ke,
        "jumlah_saudara":jumlah_saudara,
        "pendidikan":pendidikan,
        "nama_ayah":nama_ayah,
        "nama_ibu":nama_ibu,
        "kondisi":kondisi,
        "tempat_lahir_ayah":tempat_lahir_ayah,
        "tanggal_lahir_ayah":tanggal_lahir_ayah,
        "jenis_kelamin_ayah":jenis_kelamin_ayah,
        "umur_ayah":umur_ayah,
        "hari_meninggal_ayah":hari_meninggal_ayah,
        "tanggal_meninggal_ayah":tanggal_meninggal_ayah,
        "meninggal_karena_ayah":meninggal_karena_ayah,
        "tempat_lahir_ibu":tempat_lahir_ibu,
        "tanggal_lahir_ibu":tanggal_lahir_ibu,
        "jenis_kelamin_ibu":jenis_kelamin_ibu,
        "umur_ibu":umur_ibu,
        "hari_meninggal_ibu":hari_meninggal_ibu,
        "tanggal_meninggal_ibu":tanggal_meninggal_ibu,
        "meninggal_karena_ibu":meninggal_karena_ibu
    }

    const response = await fetch("/api/editdata",{
        method:"PATCH",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(sending)
    })
    const data = await response.json()
    if("Data berhasil diedit"){
        const confir = confirm(data.message)
        if(confirm){
            Router.back()
        }
    }
    else{
        alert(data.message)
    }
  }




  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Edit Data</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />

        <nav className="d-flex justify-content-end navbar fixed-top" style={{backgroundColor: "#002B5B"}}>
            <ul className="nav justify-content-end pe-3 text-light gap-4">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="home">Pendataan</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="home">Pengajuan</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="cetak">Pencetakan</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="history_cetak">History Pencetakan</a>
                </li>
                <Link href='profile'><div className="circle"><img src='/images/Group.png' alt='yoga kintil'></img></div></Link>
            </ul>
        </nav>

      <section className="vh-100">
        <div className="container-fluid">
            <div className="text-black">
              <div className="pt-5 mt-5">
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Halaman Edit Pendataan</center></span>
              </div>
            
              <div className="d-flex align-items-center justify-content-center h-custom-2 px-3 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">
                <div className="row g-4 ps-5 pe-5">
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNIK" className="form-label">NIK</label>
                        <input value={nik} onChange={(e)=> setnik(e.target.value)} type="text" className="form-control" id="nikInput" placeholder="Masukkan NIK" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNama" className="form-label">Nama</label>
                        <input value={nama} onChange={(e)=>setnama(e.target.value)} type="text" className="form-control" id="NamaInput" placeholder="Masukkan Nama"/>
                    </div>

                    <div className="col-sm-6 ps-5 pe-5">
                        <label htmlFor="inputTempat" className="form-label">Tempat lahir</label>
                        <input value={tempat_lahir} onChange={(e)=>settempat(e.target.value)} type="text" className="form-control" id="tempatInput" placeholder="Masukkan tempat Lahir" />
                    </div>

                    <div className="col-sm-6 ps-5 pe-5">
                        <label htmlFor="inputTanggalLahir" className="form-label">Tanggal lahir</label>
                        <input value={tanggal_lahir} onChange={(e)=>settanggal(e.target.value)} type="date" className="form-control" id="tanggalLahirInput" placeholder="Masukkan Tanggal Lahir" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputStatus" className="form-label">Status : </label>
                        <select value={status} onChange={(e)=>setstatus(e.target.value)} className="form-select" id="inputGroupSelect01">
                            <option selected>Pilih Status</option>
                            <option value="Yatim">Yatim</option>
                            <option value="Piatu">Piatu</option>
                            <option value="Yatim-Piatu">Yatim-Piatu</option>
                        </select>
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="anakKeKodePos" className="form-label">Anak ke : </label>
                        <input value={anak_ke} onChange={(e)=>setanakke(e.target.value)} type="text" className="form-control" id="anakKeInput" placeholder="Anak ke" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputJumlahSaudara" className="form-label">Jumlah Saudara</label>
                        <input value={jumlah_saudara} onChange={(e)=>setjumlah(e.target.value)} type="text" className="form-control" id="umlahSaudaraInput" placeholder="Jumlah Saudara, tidak termasuk diri sendiri" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputPendidikan" className="form-label">Pendidikan</label>
                        <select value={pendidikan} onChange={(e)=>setpendidikan(e.target.value)} className="form-select" id="inputGroupSelect01">
                            <option selected>pilih jenjang</option>
                            <option value="SD/MI">SD/MI</option>
                            <option value="SMP/MTS">SMP/MTS</option>
                            <option value="SMA/MA">SMA/MA</option>
                        </select>
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNamaAyah" className="form-label">Nama Ayah</label>
                        <input value={nama_ayah} onChange={(e)=>setnamaayah(e.target.value)} type="text" className="form-control" id="namaAyahInput" placeholder="Masukkan Nama Ayah" />
                    </div>

                    <div className={data.status === 'Yatim' ?( 'col-sm-6 ps-5 pe-5 d-block') : data.status === 'Yatim-Piatu'? ('col-sm-6 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputTempatLahir" className="form-label">Tempat Lahir</label>
                        <input value={tempat_lahir_ayah} onChange={(e)=>set_tempat_lahir_ayah(e.target.value)} type="text" className="form-control" id="namaTempatLahir" placeholder="Masukkan Tempat Lahir Ayah"/>
                    </div>

                    <div className={data.status === 'Yatim' ?( 'col-sm-6 ps-5 pe-5 d-block') : data.status === 'Yatim-Piatu'? ('col-sm-6 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputTanggalLahir" className="form-label">tanggal Lahir</label>
                        <input value={tanggal_lahir_ayah} onChange={(e)=>set_tanggal_lahir_ayah(e.target.value)} type="date" className="form-control" id="namaTanggalLahir" placeholder="Masukkan Tanggal Lahir Ayah"/>
                    </div>

                    <div className={data.status === 'Yatim' ?( 'col-sm-12 ps-5 pe-5 d-block') : data.status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputJenisKelamin" className="form-label">Jenis Kelamin</label>
                        <input value={jenis_kelamin_ayah} onChange={(e)=>set_jenis_kelamin_ayah(e.target.value)} type="text" className="form-control" id="jenisKelaminInput" placeholder="Masukkan Jenis Kelamin Ayah" />
                    </div>

                    <div className={data.status === 'Yatim' ?( 'col-sm-12 ps-5 pe-5 d-block') : data.status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputUmur" className="form-label">Umur</label>
                        <input value={umur_ayah} onChange={(e)=>set_umur_ayah(e.target.value)} type="text" className="form-control" id="umurInput" placeholder="Masukkan Umur Ayah" />
                    </div>

                    <div className={data.status === 'Yatim' ?( 'col-sm-12 ps-5 pe-5 d-block') : data.status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputHari" className="form-label">Hari Meninggal</label>
                        <input value={hari_meninggal_ayah} onChange={(e)=>set_hari_meninggal_ayah(e.target.value)} type="text" className="form-control" id="hariInput" placeholder="Masukkan hari meninggal Ayah" />
                    </div>

                    <div className={data.status === 'Yatim' ?( 'col-sm-12 ps-5 pe-5 d-block') : data.status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputHari" className="form-label">Tanggal Meninggal</label>
                        <input value={tanggal_meninggal_ayah} onChange={(e)=>set_tanggal_meninggal_ayah(e.target.value)} type="date" className="form-control" id="hariInput" placeholder="Masukkan Tanggal Meninggal Ayah" />
                    </div>

                    <div className={data.status === 'Yatim' ?( 'col-sm-12 ps-5 pe-5 d-block') : data.status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputMeninggal" className="form-label">Meninggal Karena</label>
                        <input value={meninggal_karena_ayah} onChange={(e)=>set_meninggal_karena_ayah(e.target.value)} type="text" className="form-control" id="meninggalInput" placeholder="Masukkan Meninggal Karena?" />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNamaIbu" className="form-label">Nama Ibu</label>
                        <input value={nama_ibu} onChange={(e)=>setnamaibu(e.target.value)} type="text" className="form-control" id="namaIbuInput" placeholder="Masukkan Nama Ibu" />
                    </div>

                    <div className={status === 'Piatu' ?( 'col-sm-6 ps-5 pe-5 d-block') : status === 'Yatim-Piatu'? ('col-sm-6 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputTempatLahir" className="form-label">Tempat Lahir</label>
                        <input value={tempat_lahir_ibu} onChange={(e)=>set_tempat_lahir_ibu(e.target.value)} type="text" className="form-control" id="namaTempatLahir" placeholder="Masukkan Tempat Lahir Ibu"/>
                    </div>

                    <div className={status === 'Piatu' ?( 'col-sm-6 ps-5 pe-5 d-block') : status === 'Yatim-Piatu'? ('col-sm-6 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputTanggalLahir" className="form-label">Tanggal Lahir</label>
                        <input value={tanggal_lahir_ibu} onChange={(e)=>set_tanggal_lahir_ibu(e.target.value)} type="date" className="form-control" id="namaTanggalLahir" placeholder="Masukkan Tanggal Lahir Ibu"/>
                    </div>

                    <div className={status === 'Piatu' ?( 'col-sm-12 ps-5 pe-5 d-block') : status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label  htmlFor="inputJenisKelamin" className="form-label">Jenis Kelamin</label>
                        <input value={jenis_kelamin_ibu} onChange={(e)=>set_jenis_kelamin_ibu(e.target.value)} type="text" className="form-control" id="jenisKelaminInput" placeholder="Masukkan Jenis Kelamin Ibu" />
                    </div>

                    <div className={status === 'Piatu' ?( 'col-sm-12 ps-5 pe-5 d-block') : status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputUmur" className="form-label">Umur</label>
                        <input value={umur_ibu} onChange={(e)=>set_umur_ibu(e.target.value)} type="text" className="form-control" id="umurInput" placeholder="Masukkan Umur Ibu" />
                    </div>

                    <div className={status === 'Piatu' ?( 'col-sm-12 ps-5 pe-5 d-block') : status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputHari" className="form-label">Hari Meninggal</label>
                        <input value={hari_meninggal_ibu} onChange={(e)=>set_hari_meninggal_ibu(e.target.value)} type="text" className="form-control" id="hariInput" placeholder="Masukkan hari meninggal" />
                    </div>

                    <div className={status === 'Piatu' ?( 'col-sm-12 ps-5 pe-5 d-block') : status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputHari" className="form-label">Tanggal Meninggal</label>
                        <input value={tanggal_meninggal_ibu} onChange={(e)=>set_tanggal_meninggal_ibu(e.target.value)} type="date" className="form-control" id="hariInput" placeholder="Masukkan Tanggal Meninggal" />
                    </div>

                    <div className={status === 'Piatu' ?( 'col-sm-12 ps-5 pe-5 d-block') : status === 'Yatim-Piatu'? ('col-sm-12 ps-5 pe-5 d-block' ):('d-none')}>
                        <label htmlFor="inputMeninggal" className="form-label">Meninggal Karena</label>
                        <input value={meninggal_karena_ibu} onChange={(e)=>set_meninggal_karena_ibu(e.target.value)} type="text" className="form-control" id="meninggalInput" placeholder="Masukkan Meninggal Karena?" />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputKondisi" className="form-label">Kondisi</label>
                        <select value={kondisi} onChange={(e)=>setkondisi(e.target.value)} className="form-select" id="inputGroupSelect01">
                            <option selected>Kondisi</option>
                            <option value="Mampu">Mampu</option>
                            <option value="Tidak Mampu">Tidak Mampu</option>
                        </select>
                    </div>
                    <div className='d-flex justify-content-end pe-5 pb-5'>
                        <div className="col-sm-auto me-5" style={{marginTop: '45px',}}>
                            <button onClick={(e)=>{Router.back()}} type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#DF0202', fontWeight:'bold', borderRadius:'20px'}}>Batal</button>
                        </div>
                        <div className="col-sm-auto" style={{marginTop: '45px',}}>
                            <button onClick={(e)=>{e.stopPropagation(),edit_data()}} type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#00B407', fontWeight:'bold', borderRadius:'20px'}}>Simpan</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>
    </>
  );
}
