import Link from 'next/link';
import React from 'react';

export default function edit_data() {
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
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Halaman Edit Pendataan</center></span>
              </div>
            
              <div className="d-flex align-items-center justify-content-center h-custom-2 px-3 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">
                <form className="row g-4 ps-5 pe-5">
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNIK" className="form-label">NIK</label>
                        <input type="text" className="form-control" id="nikInput" placeholder="Masukkan NIK" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNama" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="NamaInput" placeholder="Masukkan Nama"/>
                    </div>

                    <div className="col-sm-6 ps-5 pe-5">
                        <label htmlFor="inputTempat" className="form-label">Tempat lahir</label>
                        <input type="text" className="form-control" id="tempatInput" placeholder="Masukkan tempat Lahir" />
                    </div>

                    <div className="col-sm-6 ps-5 pe-5">
                        <label htmlFor="inputTanggalLahir" className="form-label">Tanggal lahir</label>
                        <input type="date" className="form-control" id="tanggalLahirInput" placeholder="Masukkan Tanggal Lahir" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputStatus" className="form-label">Status : </label>
                        <select className="form-select" id="inputGroupSelect01">
                            <option selected>Pilih Status</option>
                            <option value="1">Yatim</option>
                            <option value="2">Piatu</option>
                            <option value="3">Yatim-Piatu</option>
                        </select>
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="anakKeKodePos" className="form-label">Anak ke : </label>
                        <input type="text" className="form-control" id="anakKeInput" placeholder="Anak ke" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputJumlahSaudara" className="form-label">Jumlah Saudara</label>
                        <input type="text" className="form-control" id="umlahSaudaraInput" placeholder="Jumlah Saudara, tidak termasuk diri sendiri" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputPendidikan" className="form-label">Pendidikan</label>
                        <select className="form-select" id="inputGroupSelect01">
                            <option selected>pilih jenjang</option>
                            <option value="1">SD/MI</option>
                            <option value="2">SMP/MTS</option>
                            <option value="3">SMA/MA</option>
                        </select>
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNamaAyah" className="form-label">Nama Ayah</label>
                        <input type="text" className="form-control" id="namaAyahInput" placeholder="Masukkan Nama Ayah" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNamaIbu" className="form-label">Nama Ibu</label>
                        <input type="text" className="form-control" id="namaIbuInput" placeholder="Masukkan Nama Ibu" />
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputKondisi" className="form-label">Kondisi</label>
                        <select className="form-select" id="inputGroupSelect01">
                            <option selected>Kondisi</option>
                            <option value="1">Mampu</option>
                            <option value="2">Tidak Mampu</option>
                        </select>
                    </div>
                    <div className='d-flex justify-content-end pe-5 pb-5'>
                        <div className="col-sm-auto me-5" style={{marginTop: '45px',}}>
                            <Link href="data_diri"><button type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#DF0202', fontWeight:'bold', borderRadius:'20px'}}>Batal</button></Link>
                        </div>
                        <div className="col-sm-auto" style={{marginTop: '45px',}}>
                            <Link href="data_diri"><button type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#00B407', fontWeight:'bold', borderRadius:'20px'}}>Simpan</button></Link>
                        </div>
                    </div>
                </form>
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
