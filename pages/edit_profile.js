import Link from 'next/link';
import React from 'react';
import { useEffect,useState } from 'react';
import nookies from 'nookies';
import Router from 'next/router';

export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx)

  if(!cookies.token){
    return{
      redirect:{
        destination : '/'
    }
    }
  }
  else if(cookies.role === "admin"){
    return{
      redirect:{
        destination : '/create-acc'
      }
    }
  }
  return{
    props: {}
  }
}


export default function edit_profile() {

  //gettoken 
  const cookie = nookies.get('token')
  const cookies = cookie.token
  //set data setter
  const[data,setdata] = useState([])
  //set data getter
  useEffect(()=>{
    const cookie = nookies.get('token')
    const cookies = cookie.token
    const send ={
      'token':cookies
    }
    async function getdata(){
      const response = await fetch('/api/getprofil',{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(send)
      })
      const data = await response.json()
      setdata(data)
    }
    getdata()
  },[])
  //data optionnaly set
  const [EMAIL,setemail] = useState()
  const [NAMA,setnama] = useState()
  const [PROVINSI,setprovinsi] = useState()
  const [KABUPATEN,setkabupaten] = useState()
  const [KECAMATAN,setkecamatan] = useState()
  const [DESA,setdesa] = useState()
  const [ALAMAT_KANTOR,setalamat_kantor] = useState()
  const [KODE_POS,setkode_pos] = useState()
  const [password,setpassword] = useState()

  const email = EMAIL || data.email
  const nama = NAMA || data.nama
  const provinsi = PROVINSI || data.provinsi
  const kabupaten = KABUPATEN || data.kabupaten
  const kecamatan = KECAMATAN || data.kecamatan
  const desa = DESA || data.desa
  const alamat_kantor= ALAMAT_KANTOR || data.alamat_kantor
  const kode_pos= KODE_POS || data.kode_pos

  const send={
    'token':cookies,
    "nama":nama,
    "email":email,
    "password":password,
    "provinsi":provinsi,
    "kabupaten":kabupaten,
    "kecamatan":kecamatan,
    "desa":desa,
    "kode_pos":kode_pos,
    "alamat_kantor":alamat_kantor,
    
  }


  // function edit profil
  async function edit_profile(){
    const response = await fetch('/api/editprofil',{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(send)
    })
    const data = await response.json()
    if (data.message != "data berhasil diperbarui"){
      alert(data.message)
    }
    else{
      alert(data.message)
      Router.replace('profile')
    }
  }

  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Edit Profil</title>
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
                    <a className="nav-link" aria-current="page" href="pengajuan">Pengajuan</a>
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
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Halaman Edit Profile</center></span>
              </div>
            
              <div className="d-flex align-items-center justify-content-center h-custom-2 px-3 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">
                <div className="row g-4 ps-5 pe-5">
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" className="form-control" id="emailInput" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNama" className="form-label">Nama</label>
                        <input value={nama} onChange={(e)=>setnama(e.target.value)} type="text" className="form-control" id="NamaInput" />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputProvinsi" className="form-label">Provinsi</label>
                        <input value={provinsi} onChange={(e)=>setprovinsi(e.target.value)} type="text" className="form-control" id="provinsiInput"/>
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputKabupaten" className="form-label">Kabupaten</label>
                        <input value={kabupaten} onChange={(e)=>setkabupaten(e.target.value)} type="text" className="form-control" id="kabupatenInput"  />
                    </div>
        
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputKecamatan" className="form-label">Kecamatan</label>
                        <input value={kecamatan} onChange={(e)=>setkecamatan(e.target.value)} type="text" className="form-control" id="kecamatanInput" />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputDesa" className="form-label">Desa</label>
                        <input value={desa} onChange={(e)=>setdesa(e.target.value)} type="text" className="form-control" id="desaInput"  />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputAlamat" className="form-label">Alamat Kantor Pemerintahan Desa:</label>
                        <input value={alamat_kantor} onChange={(e)=>setalamat_kantor(e.target.value)} type="text" className="form-control" id="alamatInput"/>
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputKodePos" className="form-label">Kode Pos</label>
                        <input value={kode_pos} onChange={(e)=>setkode_pos(e.target.value)} type="text" className="form-control" id="kodePosInput" />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" id="passwordInput" placeholder="Masukkan password atau ganti password untuk update data"/>
                    </div>

                    <div className='d-flex justify-content-end pe-5 pb-5'>
                        <div className="col-sm-auto me-5" style={{marginTop: '45px',}}>
                            <Link href="profile"><button type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#DF0202', fontWeight:'bold', borderRadius:'20px'}}>Batal</button></Link>
                        </div>
                        <div className="col-sm-auto" style={{marginTop: '45px',}}>
                            <button type="submit" onClick={(e)=>edit_profile()} className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#00B407', fontWeight:'bold', borderRadius:'20px'}}>Simpan</button>
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
