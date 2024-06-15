import React from 'react'
import { useState } from 'react'

export default function landing() {
    const [nik,setNik] = useState('')
    const [nama,setNama] = useState('')
    const [tempat_lahir,setTempat] = useState('')
    const [tanggal_lahir,setTgl] = useState('')
    const [status,setStatus] = useState('')
    const [anak_ke,setAnak] = useState('')
    const [jumlah_saudara,setJml] = useState('')
    const [pendidikan,setPend] = useState('')
    const [nama_ayah,setAyah] = useState('')
    const [nama_ibu,setIbu] = useState('')
    const [kondisi,setKondisi] = useState('')
    return (
    <>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>y-team</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />

        <nav class="navbar navbar-light ">
        <div class="container">
            <a class="navbar-brand fw-bold">Y-TEAM</a>
            <a className='btn' href='login' style={{backgroundColor: "#002B5B", color: "white", width: "100px"}}>Login</a>
        </div>
        </nav>
        {/* hero */}
        <section>
            <div class="container">
                <div class="row mt-5 d-flex align-items-center">
                    <div class="col-md-6">
                        <h1 class="fw-bold">Sistem Pendataan <br/> Anak Yatim Desa <br/> XYZ</h1>
                        <p>Y-Team adalah sebuah sistem yang dirancang khusus untuk 
                            <br/>mengelola proses pendataan dan pemantauan kepada
                            <br/>anak-anak yatim di Desa XYZ
                        </p>
                        <a className='btn' style={{backgroundColor: "#002B5B", color: "white", width: "150px"}}>Ajukan Data</a>
                    </div>
                    <div class="col-md-6">
                        <img src='/images/hero.png' className='img-fluid d-none d-md-block'></img>
                    </div>
                </div>
            </div>
        </section>
        {/* form */}
        <section>
            <div class="container">
                <div className='row mt-5 mb-5'>
                    <h1 className='text-center'>Formulir Pengajuan Data Anak Yatim / Piatu</h1>
                    <form>
                        <div>
                            <label>NIK :</label>
                            <input onChange={(e) => setNik(e.target.value)} type='text' placeholder='Masukkan NIK' className='form-control'/>
                        </div>
                        <div>
                            <label>Nama :</label>
                            <input onChange={(e) => setNama(e.target.value)} type='text' placeholder='Masukkan Nama' className='form-control'/>
                        </div>
                        <div>
                            <label>Tempat lahir :</label>
                            <input onChange={(e) => setTempat(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control'/>
                        </div>
                        <div>
                            <label>Tanggal lahir :</label>
                            <input onChange={(e) => setTgl(e.target.value)} type='date' placeholder='mm/dd/yyyy' className='form-control'/>
                        </div>
                        <div>
                            <label>status :</label>
                            <select onChange={(e) => setStatus(e.target.value)} className='form-select'>
                                <option selected>Pilih status</option>
                                <option value="Yatim">Yatim</option>
                                <option value="Piatu">Piatu</option>
                                <option value="Yatim-Piatu">Yatim-Piatu</option>
                            </select>
                        </div>
                        <div>
                            <label>Anak Ke :</label>
                            <input onChange={(e) => setAnak(e.target.value)} type='text' placeholder='Anak ke' className='form-control'/>
                        </div>
                        <div>
                            <label>Jumlah Saudara :</label>
                            <input onChange={(e) => setJml(e.target.value)} type='text' placeholder='Jumlah Saudara, tidak termasuk diri sendiri' className='form-control'/>
                        </div>
                        <div>
                            <label>Pendidikan :</label>
                            <select onChange={(e) => setPend(e.target.value)} className='form-select'>
                                <option selected>Pilih jenjang</option>
                                <option value="SD/MI">SD/MI</option>
                                <option value="SMP/MTS">SMP/MTS</option>
                                <option value="SMA/MA">SMA/MA</option>
                            </select>    
                        </div>
                        <div>
                            <label>Nama Ayah :</label>
                            <input onChange={(e) => setAyah(e.target.value)} type='text' placeholder='Masukkan Nama Ayah' className='form-control'/>
                        </div>
                        <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Tempat Lahir :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Jenis Kelamin :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Umur :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Hari Meninggal :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Tanggal Meninggal :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Alasan Meninggal</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div>
                            <label>Nama Ibu :</label>
                            <input onChange={(e) => setIbu(e.target.value)} type='text' placeholder='Masukkan Nama Ibu' className='form-control'/>
                        </div>
                        <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Tempat Lahir :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Jenis Kelamin :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Umur :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Hari Meninggal :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Tanggal Meninggal :</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                            <label>Alasan Meninggal</label>
                            <input type='text' placeholder='Masukkan tempat lahir' className='form-control'></input>
                        </div>
                        <div>
                            <label>Kondisi :</label>
                            <select onChange={(e) => setKondisi(e.target.value)} className='form-select'>
                                <option selected>Pilih kondisi</option>
                                <option value="Mampu">Mampu</option>
                                <option value="Tidak Mampu">Tidak Mampu</option>
                            </select>    
                        </div>
                        <div className='d-flex justify-content-end'>
                            <a className='btn' style={{backgroundColor: "#002B5B", color: "white", width: "150px", marginTop: "20px"}}>Ajukan Data</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
