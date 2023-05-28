import Link from 'next/link';
import React from 'react';

export default function data_diri() {
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
                <Link href='profil'><div className="circle"><img src='/images/Group.png' alt=''></img></div></Link>
            </ul>
        </nav>

      <section className="vh-100">
        <div className="container-fluid">
            <div className="text-black">
              <div className="pt-5 mt-5">
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Data Diri Anak Yatim Piatu</center></span>
              </div>
            </div>

            <div className='d-flex justify-content-center pt-4 ps-5 pe-5'>
                <div class="mb-3 d-flex flex-column" style={{backgroundColor: '#A5D7E8', width:'1220px', borderRadius:'20px', height:'670px'}}>
                    <div className='d-flex flex-column ps-4 pt-4'>
                        <h10>NIK : </h10>
                        <h7>12345678910111213</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Nama Lengkap : </h10>
                        <h7>Gigih Fajrul Rizky</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Tempat, Tanggal Lahir : </h10>
                        <h7>Jember, 17-07-2003</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Status : </h10>
                        <h7>Yatim-Piatu</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Anak ke : </h10>
                        <h7>2</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Jumlah Saudara : </h10>
                        <h7>2</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Pendidikan : </h10>
                        <h7>MTS</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Nama Ayah : </h10>
                        <h7>Sudarsono Malik Ibrahim</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Nama Ibu : </h10>
                        <h7>Cut Nyak Rahayu</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Kondisi : </h10>
                        <h7>Kurang Mampu</h7>
                    </div>
                <div className='d-flex justify-content-end pb-5'>
                        <div className="col-sm-auto me-3" style={{marginTop: '45px',}}>
                            <Link href="home"><button type="submit" className="btn text-light" style={{width: '150px',height:'50px' ,backgroundColor:'#DF0202', fontWeight:'bold', borderRadius:'30px'}}>Hapus</button></Link>
                        </div>
                        <div className="col-sm-auto" style={{marginTop: '45px',}}>
                            <Link href="edit_data"><button type="submit" className="btn text-light" style={{width: '150px',height:'50px' ,backgroundColor:'#00B407', fontWeight:'bold', borderRadius:'30px'}}>Edit</button></Link>
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
