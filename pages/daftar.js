import React from 'react';

export default function Index() {
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
                <form className="row g-4">
                    <div className="col-sm-6">
                        <label htmlFor="inputNamaLengkap" className="form-label">Nama Lengkap</label>
                        <input type="text" className="form-control" id="namaLengkapInput" placeholder="Masukkan Nama Lengkap" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputKecamatan" className="form-label">Kecamatan</label>
                        <input type="text" className="form-control" id="kecamatanInput" placeholder="Masukkan Nama Kecamatan" />
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="Masukkan Email" />
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="inputDesa" className="form-label">Desa</label>
                        <input type="text" className="form-control" id="desaInput" placeholder="Masukkan Nama Desa" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="Password" className="form-control" id="passwordInput" placeholder="Masukkan Password" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputKodePos" className="form-label">Kode Pos</label>
                        <input type="text" className="form-control" id="kodePosInput" placeholder="Masukkan Kode Pos" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputProvinsi" className="form-label">Provinsi</label>
                        <input type="text" className="form-control" id="provinsiInput" placeholder="Masukkan Nama Provinsi" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputAlamatKantor" className="form-label">Alamat Kantor Pemerintahan Desa</label>
                        <input type="text" className="form-control" id="alamatKantorInput" placeholder="Masukkan Alamat Kantor" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="inputKabupaten" className="form-label">Kabupaten</label>
                        <input type="text" className="form-control" id="kabupatenInput1" placeholder="Masukkan Nama Kabupaten" />
                    </div>
                    <div className="col-sm-6" style={{marginTop: '45px',}}>
                        <button type="submit" className="btn text-light" style={{width: '360px',height:'50px' ,backgroundColor:'#002B5B', fontWeight:'bold'}}>Daftar</button>
                    </div>

                    <p className='d-flex justify-content-center mt-5'>
                        Sudah memiliki akun? <a href="/" className="link-info">Login</a>
                    </p>
                </form>
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
