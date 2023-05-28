import React from 'react'
import Link from 'next/link';

export default function history_cetak() {
  return (
    <>
        <title>Tem.u</title>
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
                History Pencetakan Surat
            </h1>
        </div>

        <div class="input-group mb-3 ps-5 pe-5">
            <input type="text" class="form-control" placeholder="Masukkan NIK" aria-label="NIK" aria-describedby="basic-addon2" style={{borderRadius: '30px 0px 0px 30px', border: '1px solid grey'}}/>
            <button className='btn rounded-pills' style={{border:' 1px solid grey ', borderRadius: '0px 30px 30px 0px'}}><img src='/images/search.png'></img></button>
        </div>
        <div className="tabel table-responsive ps-5 pe-5 pt-3">
          <table id='table-to-xls' className="table table-bordered border-dark" style={{border: '2px solid black'}}>
            <thead className="text-center fw-bold" style={{border: '2px solid black', backgroundColor:'#A5D7E8'}}>
              <tr>
                <td style={{border: '2px solid black'}}>No</td>
                <td style={{border: '2px solid black'}}>Tanggal</td>
                <td style={{border: '2px solid black'}}>NIK</td>
                <td style={{border: '2px solid black'}}>Nama</td>
                <td style={{border: '2px solid black'}}>Pegawai</td>
                <td style={{border: '2px solid black'}}>Keterangan</td>
              </tr>
            </thead>
            <tbody className="text-center" style={{border: '2px solid black'}}>
                <tr>
                  <td style={{border: '2px solid black'}}>1</td>
                  <td style={{border: '2px solid black'}}>12-03-2023</td>
                  <td style={{border: '2px solid black'}}>12345678910111213</td>
                  <td style={{border: '2px solid black'}}>Gigih fajrul Rizky</td>
                  <td style={{border: '2px solid black'}}>joko</td>
                  <td style={{border: '2px solid black'}}>Surat Kematian - SKTM</td>
                </tr>
            </tbody>
          </table>
        </div>
    </>
  )
}
