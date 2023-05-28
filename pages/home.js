import React from 'react'
import Link from 'next/link';

export default function home() {
  return (
    <>
        <title>Home</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
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

        <div className='mt-5'>
            <h1 className='fw-bold text-center pt-4'>
                Daftar Anak Yatim Piatu
            </h1>
        </div>

        <div class="input-group mb-3 ps-5 pe-5">
            <input type="text" class="form-control" placeholder="Masukkan NIK" aria-label="NIK" aria-describedby="basic-addon2" style={{borderRadius: '30px 0px 0px 30px', border: '1px solid grey'}}/>
            <button className='btn rounded-pills' style={{border:' 1px solid grey ', borderRadius: '0px 30px 30px 0px'}}><img src='/images/search.png'></img></button>
        </div>
        <div className='d-flex justify-content-center pt-4'>
            <div class="mb-3 d-flex align-items-center justify-content-between" style={{backgroundColor: '#A5D7E8', width:'1220px', borderRadius:'30px'}}>
                <div className='d-flex ps-4 gap-5'>
                    <h5>1234566789</h5>
                    <h5>Gigih Fajrul Rizky</h5>
                </div>
                <div className=''>
                    <Link href="data_diri"><button className='btn rounded-pills'><img src='/images/icon.png'></img></button></Link>
                </div>
            </div>
        </div>
        
        <Link href="tambah_data">
            <button className="btn rounded-pills btn-md text-light button-floating fw-bold" type="button" style={{ backgroundColor: '#00B407', borderRadius:'30px'}}>
                Tambah
            </button>
        </Link>
    </>
  )
}