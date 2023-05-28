import Link from 'next/link';
import React from 'react';

export default function edit_profile() {
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
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Halaman Edit Profile</center></span>
              </div>
            
              <div className="d-flex align-items-center justify-content-center h-custom-2 px-3 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">
                <form className="row g-4 ps-5 pe-5">
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="text" className="form-control" id="emailInput" placeholder="joko@gmail.com"/>
                    </div>
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputNama" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="NamaInput" placeholder="Joko Widodo"/>
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputProvinsi" className="form-label">Provinsi</label>
                        <input type="text" className="form-control" id="provinsiInput" placeholder="jawa timur" />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputKabupaten" className="form-label">Kabupaten</label>
                        <input type="text" className="form-control" id="kabupatenInput" placeholder="Jember" />
                    </div>
        
                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputKecamatan" className="form-label">Kecamatan</label>
                        <input type="text" className="form-control" id="kecamatanInput" placeholder="Gumuk mas" />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputDesa" className="form-label">Desa</label>
                        <input type="text" className="form-control" id="desaInput" placeholder="Karangrejo" />
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputAlamat" className="form-label">Alamat Kantor Pemerintahan Desa:</label>
                        <input type="text" className="form-control" id="alamatInput" placeholder="JL. Melati No.99 Banjarejo"/>
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputKodePos" className="form-label">Kode Pos</label>
                        <input type="text" className="form-control" id="kodePosInput" placeholder="301911"/>
                    </div>

                    <div className="col-sm-12 ps-5 pe-5">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="JokoJawir"/>
                    </div>

                    <div className='d-flex justify-content-end pe-5 pb-5'>
                        <div className="col-sm-auto me-5" style={{marginTop: '45px',}}>
                            <Link href="profile"><button type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#DF0202', fontWeight:'bold', borderRadius:'20px'}}>Batal</button></Link>
                        </div>
                        <div className="col-sm-auto" style={{marginTop: '45px',}}>
                            <Link href="profile"><button type="submit" className="btn text-light" style={{width: '200px',height:'50px' ,backgroundColor:'#00B407', fontWeight:'bold', borderRadius:'20px'}}>Simpan</button></Link>
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
