import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { useState } from 'react';
import nookies from "nookies"

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
  

export default function tambah_data() {
  //data getter
  const [nik,setnik] = useState('')
  const [nama,setnama] = useState('')
  const [tempat_lahir,settempat] = useState('')
  const [tanggal_lahir,settanggal] = useState('')
  const [status,setstatus] = useState('')
  const [anak_ke,setanakke] = useState('')
  const [jumlah_saudara,setjumlahsaudara] = useState('')
  const [pendidikan,setpendidikan] = useState('')
  const [nama_ayah,setnamaayah] = useState('')
  const [nama_ibu,setnamaibu] = useState('')
  const [kondisi,setkondisi] = useState('')


  // fetching data tambah
  async function tambah (){
  
  //set data iso date format
  if(tanggal_lahir != ''){
    const date = new Date(tanggal_lahir).toISOString()
    //data setter
    const send = {
          "nik":nik,
          "nama":nama,
          "tempat_lahir":tempat_lahir,
          "tanggal_lahir":date,
          "status":status,
          "anak_ke":anak_ke,
          "jumlah_saudara":jumlah_saudara,
          "pendidikan":pendidikan,
          "nama_ayah":nama_ayah,
          "nama_ibu":nama_ibu,
          "kondisi":kondisi
    }
    const length = nik.length
    if(length != 16){
        alert("NIK anda kurang atau lebih")
    }
    else{
        const response = await fetch("/api/tambahdata",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(send)
        })
        const data = await response.json()
        if(data.message == "Data berhasil ditambahkan"){
            const alert = confirm(data.message)
            if(alert){
                Router.push("home")
            }
        }
        else{
            alert(data.message)
        } 
    }
  }
  else{
    const send = {
        "nik":nik,
        "nama":nama,
        "tempat_lahir":tempat_lahir,
        "tanggal_lahir":tanggal_lahir,
        "status":status,
        "anak_ke":anak_ke,
        "jumlah_saudara":jumlah_saudara,
        "pendidikan":pendidikan,
        "nama_ayah":nama_ayah,
        "nama_ibu":nama_ibu,
        "kondisi":kondisi
  }
  const length = nik.length
  if(length != 16){
    alert("NIK anda kurang atau lebih")
  }
  else{
    const response = await fetch("/api/tambahdata",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(send)
    })
    const data = await response.json()
    if(data.message == "Data berhasil ditambahkan"){
        const alert = confirm(data.message)
        if(alert){
            Router.push("home")
        }
    }
    else{
        alert(data.message)
    }
}
  }
  }

  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>daftar</title>
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
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Halaman Tambah Pendataan</center></span>
              </div>
            
              <div className="d-flex align-items-center justify-content-center h-custom-2 px-3 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">
                <div className="row g-4 ps-5 pe-5">
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNIK" className="form-label">NIK</label>
                        <input value={nik} onChange={(e)=>setnik(e.target.value)} type="text" className="form-control" id="nikInput" placeholder="Masukkan NIK" />
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
                        <input value={jumlah_saudara} onChange={(e)=>setjumlahsaudara(e.target.value)} type="text" className="form-control" id="umlahSaudaraInput" placeholder="Jumlah Saudara, tidak termasuk diri sendiri" />
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
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNamaIbu" className="form-label">Nama Ibu</label>
                        <input value={nama_ibu} onChange={(e)=>setnamaibu(e.target.value)} type="text" className="form-control" id="namaIbuInput" placeholder="Masukkan Nama Ibu" />
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
                            <Link href="home"><button type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#DF0202', fontWeight:'bold'}}>Batal</button></Link>
                        </div>
                        <div className="col-sm-auto" style={{marginTop: '45px',}}>
                            <button onClick={(e)=>{tambah()}} type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#00B407', fontWeight:'bold'}}>Buat</button>
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
