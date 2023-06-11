import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { useState } from 'react';
import nookies from 'nookies'

export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx)

  if(cookies.token){
    return{
      redirect:{
        destination : 'home'
    }
    }
  }
  return{
    props: {}
  }
}


export default function Daftar() {
  //data getter
  const [nama,setnama] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [provinsi,setprovinsi] = useState('')
  const [kabupaten,setkabupaten] = useState('')
  const [kecamatan,setkecamatan] = useState('')
  const [kode_pos,setkodepos] = useState('')
  const [alamat_kantor,setalamatkantor] = useState('')
  const [desa,setdesa] = useState('')
  
  //data setter
  const send ={
    "nama":nama,
    "email":email,
    "password":password,
    "provinsi":provinsi,
    "kabupaten":kabupaten,
    "kecamatan":kecamatan,
    "kode_pos":kode_pos,
    "alamat_kantor":alamat_kantor,
    "desa":desa
  }

  //data post
  async function register(){
    const response = await fetch("/api/register",{
      method:"PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(send)
    }
    )
    const data = await response.json()
    if(data.message == "Registrasi Berhasil"){
      const confirm = window.confirm(data.message)
      if(confirm){
        Router.replace('/')
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
      <title>daftar</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />

      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 text-black">
              <div className="pt-4">
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Halaman Daftar Akun</center></span>
              </div>
            
              <div className="d-flex align-items-center justify-content-center h-custom-2 px-3 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">
                <div className="row g-4">
                    <div className="col-sm-6">
                        <label htmlFor="inputNamaLengkap" className="form-label">Nama Lengkap</label>
                        <input value={nama} onChange={(e)=>setnama(e.target.value)} type="text" className="form-control" id="namaLengkapInput" placeholder="Masukkan Nama Lengkap" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputKecamatan" className="form-label">Kecamatan</label>
                        <input value={kecamatan} onChange={(e)=>setkecamatan(e.target.value)} type="text" className="form-control" id="kecamatanInput" placeholder="Masukkan Nama Kecamatan" />
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" id="emailInput" placeholder="Masukkan Email" />
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="inputDesa" className="form-label">Desa</label>
                        <input value={desa} onChange={(e)=>setdesa(e.target.value)} type="text" className="form-control" id="desaInput" placeholder="Masukkan Nama Desa" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input value={password} onChange={(e)=>setpassword(e.target.value)} type="Password" className="form-control" id="passwordInput" placeholder="Masukkan Password" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputKodePos" className="form-label">Kode Pos</label>
                        <input value={kode_pos} onChange={(e)=>setkodepos(e.target.value)} type="text" className="form-control" id="kodePosInput" placeholder="Masukkan Kode Pos" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputProvinsi" className="form-label">Provinsi</label>
                        <input value={provinsi} onChange={(e)=>setprovinsi(e.target.value)} type="text" className="form-control" id="provinsiInput" placeholder="Masukkan Nama Provinsi" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputAlamatKantor" className="form-label">Alamat Kantor Pemerintahan Desa</label>
                        <input value={alamat_kantor} onChange={(e)=>setalamatkantor(e.target.value)} type="text" className="form-control" id="alamatKantorInput" placeholder="Masukkan Alamat Kantor" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputKabupaten" className="form-label">Kabupaten</label>
                        <input value={kabupaten} onChange={(e)=>setkabupaten(e.target.value)} type="text" className="form-control" id="kabupatenInput1" placeholder="Masukkan Nama Kabupaten" />
                    </div>
                    <div className="col-sm-6" style={{marginTop: '45px',}}>
                        <button type="submit" onClick={(e)=>register()} className="btn text-light" style={{width: '360px',height:'50px' ,backgroundColor:'#002B5B', fontWeight:'bold'}}>Daftar</button>
                    </div>

                    <p className='d-flex justify-content-center mt-5'>
                        Sudah memiliki akun? <Link href="/" className="link-info">Login</Link>
                    </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 px-0 d-none d-sm-block">
              <img
                src="/images/image1.png"
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: 'cover', objectPosition: 'right' }}
              />
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
