import React from 'react';

export default function Index() {
  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />

      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="/images/Rectangle 3.png"
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: 'cover', objectPosition: 'right' }}
              />
            </div>

            <div className="col-sm-6 text-black">
              <div className="pt-5">
                <span className="h2 fw-bold" style={{color: '#0B2447'}}><center>Selamat datang di website pendataan anak yatim piatu</center></span>
                <span className="h7 fw-bold" style={{color: '#0B2447',}}><center style={{marginTop: '15px'}}>Dengan webiste ini maka pendataan akan lebih mudah digunakan</center></span>
              </div>

              <div className="d-flex align-items-center justify-content-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: '23rem' }}>
                  <div className="form-floating mb-4">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="pt-1 mb-4 d-flex justify-content-center">
                    <a href=''><button className="btn btn-lg btn-block text-light" type="button" style={{ backgroundColor: '#002B5B'}}>
                      Masuk
                    </button></a>
                  </div>
                  <p className='d-flex justify-content-center mt-5 pt-5'>
                    Belum memiliki akun? <a href="daftar" className="link-info">Daftar</a>
                  </p>
                </form>
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
