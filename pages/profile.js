import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';


export default function profile() {

    const [tampil2,setTampil2] = useState(false)
    const pop = () => {
      setTampil2(true)
    } 
    const notpop = () => {
      setTampil2(false)
    }

  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Data diri</title>
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
                <Link href='profile'><div className="circle"><img src='/images/Group.png' alt=''></img></div></Link>
            </ul>
        </nav>

      <section className="vh-100">
        <div className="container-fluid">
            <div className="text-black">
              <div className="pt-5 mt-5">
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Halaman Profil</center></span>
              </div>
            </div>

            <div className='d-flex justify-content-center pt-5 ps-5 pe-5'>
                <div class="mb-3 d-flex flex-column" style={{backgroundColor: '#A5D7E8', width:'1220px', borderRadius:'20px', height:'600px'}}>
                    <div className='d-flex flex-column ps-4 pt-4'>
                        <h10>Email : </h10>
                        <h7>joko@gmail.com</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Nama Lengkap : </h10>
                        <h7>Joko Widodo</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Provinsi : </h10>
                        <h7>Jawa Timur</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Kabupaten : </h10>
                        <h7>Jember</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Kecamatan : </h10>
                        <h7>Gumuk Mas</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Desa : </h10>
                        <h7>Karangrejo</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Alamat Kantor Pemerintahan Desa : </h10>
                        <h7>Jl. Melati No.99 Banjarejo</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Kode Pos : </h10>
                        <h7>301911</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Password : </h10>
                        <h7>***********</h7>
                    </div>
                <div className='d-flex justify-content-end pb-5'>
                        <div className="col-sm-auto me-3" style={{marginTop: '45px',}}>
                            <button onClick={pop} type="button" className="btn text-light" style={{width: '150px',height:'50px' ,backgroundColor:'#DF0202', fontWeight:'bold', borderRadius:'30px'}}>Log Out</button>
                        </div>
                        <div className="col-sm-auto" style={{marginTop: '45px',}}>
                            <Link href="edit_profile"><button type="submit" className="btn text-light" style={{width: '150px',height:'50px' ,backgroundColor:'#00B407', fontWeight:'bold', borderRadius:'30px'}}>Edit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {tampil2 &&(  
            <div className='status' style={{backgroundColor:'#002B5B'}}>
              <div className="d-flex pop-up flex-column py-2 align-items-center container position-fixed top-50 start-50 translate-middle" style={{backgroundColor:'#002B5B', width:'650px', height:'200px', borderRadius:'30px'}}>
                <img src="/images/centang.png" alt=""/>
                <h1 className="fw-bold text-light pt-4">Apakah Anda Ingin Keluar?</h1>
                <div className='d-flex gap-5 pb-2 pt-4'>
                    <Link href="/"><button className="btn btn-success shadow rounded-pill text-white" style={{backgroundColor:"#00B407", width:"100px"}}>IYA</button></Link>
                    <Link href="profile"><button className="btn shadow rounded-pill text-white" style={{backgroundColor:'#DF0202', width:"100px"}} onClick={notpop}>TIDAK</button></Link>
                </div>
              </div>
            </div>
          )}
        
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>  
    </>
  );
}

