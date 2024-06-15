import React from 'react'
import { useState } from 'react'

export default function landing() {
    const [nik, setNik] = useState('');
    const [nama, setNama] = useState('');
    const [tempat_lahir, setTempat] = useState('');
    const [tanggal_lahir, setTgl] = useState('');
    const [status, setStatus] = useState('');
    const [anak_ke, setAnak] = useState('');
    const [jumlah_saudara, setJml] = useState('');
    const [pendidikan, setPend] = useState('');
    const [nama_ayah, setAyah] = useState('');
    const [nama_ibu, setIbu] = useState('');
    const [kondisi, setKondisi] = useState('');
    const [noWa, setNoWa] = useState('');
    const [tempat_lahir_ayah, set_tempat_lahir_ayah] = useState('');
    const [tanggal_lahir_ayah, set_tanggal_lahir_ayah] = useState('');
    const [jenis_kelamin_ayah, setJenisKelaminAyah] = useState('');
    const [umur_ayah, set_umur_ayah] = useState('');
    const [hari_meninggal_ayah, set_hari_meninggal_ayah] = useState('');
    const [tanggal_meninggal_ayah, set_tanggal_meninggal_ayah] = useState('');
    const [meninggal_karena_ayah, set_meninggal_karena_ayah] = useState('');
    const [tempat_lahir_ibu, set_tempat_lahir_ibu] = useState('');
    const [tanggal_lahir_ibu, set_tanggal_lahir_ibu] = useState('');
    const [jenis_kelamin_ibu, setJenisKelaminIbu] = useState('');
    const [umur_ibu, set_umur_ibu] = useState('');
    const [hari_meninggal_ibu, set_hari_meninggal_ibu] = useState('');
    const [tanggal_meninggal_ibu, set_tanggal_meninggal_ibu] = useState('');
    const [meninggal_karena_ibu, set_meninggal_karena_ibu] = useState('');

    async function tambah() {
        //set data iso date format
        const date = new Date(tanggal_lahir).toISOString()
        
        //data setter
        const send = {
            "nik":nik,
            "nama":nama,
            "tempat_lahir":tempat_lahir,
            "tanggal_lahir":date,
            "status":status,
            "anak_ke":anak_ke,
            "jumlah_saudara":jumlah_saudara,
            "pendidikan":pendidikan,
            "nama_ayah":nama_ayah,
            "nama_ibu":nama_ibu,
            "kondisi":kondisi,
            "noWa":noWa,
            "tempat_lahir_ayah":tempat_lahir_ayah,
            "tanggal_lahir_ayah":tanggal_lahir_ayah,
            "jenis_kelamin_ayah":jenis_kelamin_ayah,
            "umur_ayah":umur_ayah,
            "hari_meninggal_ayah":hari_meninggal_ayah,
            "tanggal_meninggal_ayah":tanggal_meninggal_ayah,
            "meninggal_karena_ayah":meninggal_karena_ayah,
            "tempat_lahir_ibu":tempat_lahir_ibu,
            "tanggal_lahir_ibu":tanggal_lahir_ibu,
            "jenis_kelamin_ibu":jenis_kelamin_ibu,
            "umur_ibu":umur_ibu,
            "hari_meninggal_ibu":hari_meninggal_ibu,
            "tanggal_meninggal_ibu":tanggal_meninggal_ibu,
            "meninggal_karena_ibu":meninggal_karena_ibu
        }

        const response = await fetch("/api/pengajuan",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(send)
        })
        const data = await response.json()
        if(data.message == "Data berhasil ditambahkan"){
            const alert = confirm(data.message)
        }
        else{
            alert(data.message)
        } 
    }
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
                    <a className='btn' href='login' style={{ backgroundColor: "#002B5B", color: "white", width: "100px" }}>Login</a>
                </div>
            </nav>
            {/* hero */}
            <section>
                <div class="container">
                    <div class="row mt-5 d-flex align-items-center">
                        <div class="col-md-6">
                            <h1 class="fw-bold">Sistem Pendataan <br /> Anak Yatim Desa <br /> XYZ</h1>
                            <p>Y-Team adalah sebuah sistem yang dirancang khusus untuk
                                <br />mengelola proses pendataan dan pemantauan kepada
                                <br />anak-anak yatim di Desa XYZ
                            </p>
                            <a className='btn' style={{ backgroundColor: "#002B5B", color: "white", width: "150px" }}>Ajukan Data</a>
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
                                <input onChange={(e) => setNik(e.target.value)} type='text' placeholder='Masukkan NIK' className='form-control' required />
                            </div>
                            <div>
                                <label>Nama :</label>
                                <input onChange={(e) => setNama(e.target.value)} type='text' placeholder='Masukkan Nama' className='form-control' required />
                            </div>
                            <div>
                                <label>Nomor Telephone :</label>
                                <input onChange={(e) => setNoWa(e.target.value)} type='text' placeholder='Masukkan No Wa Yang Bisa DIhubungi' className='form-control' required />
                            </div>
                            <div>
                                <label>Tempat lahir :</label>
                                <input onChange={(e) => setTempat(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required />
                            </div>
                            <div>
                                <label>Tanggal lahir :</label>
                                <input onChange={(e) => setTgl(e.target.value)} type='date' placeholder='mm/dd/yyyy' className='form-control' required />
                            </div>
                            <div>
                                <label>status :</label>
                                <select onChange={(e) => setStatus(e.target.value)} className='form-select' required>
                                    <option selected>Pilih status</option>
                                    <option value="Yatim">Yatim</option>
                                    <option value="Piatu">Piatu</option>
                                    <option value="Yatim-Piatu">Yatim-Piatu</option>
                                </select>
                            </div>
                            <div>
                                <label>Anak Ke :</label>
                                <input onChange={(e) => setAnak(e.target.value)} type='text' placeholder='Anak ke' className='form-control' required />
                            </div>
                            <div>
                                <label>Jumlah Saudara :</label>
                                <input onChange={(e) => setJml(e.target.value)} type='text' placeholder='Jumlah Saudara, tidak termasuk diri sendiri' className='form-control' required />
                            </div>
                            <div>
                                <label>Pendidikan :</label>
                                <select onChange={(e) => setPend(e.target.value)} className='form-select' required>
                                    <option selected>Pilih jenjang</option>
                                    <option value="SD/MI">SD/MI</option>
                                    <option value="SMP/MTS">SMP/MTS</option>
                                    <option value="SMA/MA">SMA/MA</option>
                                </select>
                            </div>
                            <div>
                                <label>Nama Ayah :</label>
                                <input onChange={(e) => setAyah(e.target.value)} type='text' placeholder='Masukkan Nama Ayah' className='form-control' required />
                            </div>
                            <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Tempat Lahir :</label>
                                <input onChange={(e) => set_tempat_lahir_ayah(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Tanggal Lahir Ayah :</label>
                                <input onChange={(e) => set_tanggal_lahir_ayah(e.target.value)} type='date' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Jenis Kelamin :</label>
                                <select onChange={(e) => setJenisKelaminAyah(e.target.value)} className='form-control' disabled required>
                                    <option value='Laki-Laki' selected>Laki-Laki</option>
                                </select>
                            </div>
                            <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Umur :</label>
                                <input onChange={(e) => set_umur_ayah(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Hari Meninggal :</label>
                                <input onChange={(e) => set_hari_meninggal_ayah(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Tanggal Meninggal :</label>
                                <input onChange={(e) => set_tanggal_meninggal_ayah(e.target.value)} type='date' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Yatim' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Alasan Meninggal</label>
                                <input onChange={(e) => set_meninggal_karena_ayah(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div>
                                <label>Nama Ibu :</label>
                                <input onChange={(e) => setIbu(e.target.value)} type='text' placeholder='Masukkan Nama Ibu' className='form-control' required />
                            </div>
                            <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Tempat Lahir :</label>
                                <input onChange={(e) => set_tempat_lahir_ibu(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Tanggal Lahir Ibu :</label>
                                <input onChange={(e) => set_tanggal_lahir_ibu(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Jenis Kelamin :</label>
                                <input onChange={(e) => setJenisKelaminIbu(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Umur :</label>
                                <input onChange={(e) => set_umur_ibu(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Hari Meninggal :</label>
                                <input onChange={(e) => set_hari_meninggal_ibu(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Tanggal Meninggal :</label>
                                <input onChange={(e) => set_tanggal_meninggal_ibu(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div className={status === 'Piatu' ? 'd-block' : status === 'Yatim-Piatu' ? 'd-block' : 'd-none'}>
                                <label>Alasan Meninggal</label>
                                <input onChange={(e) => set_meninggal_karena_ibu(e.target.value)} type='text' placeholder='Masukkan tempat lahir' className='form-control' required></input>
                            </div>
                            <div>
                                <label>Kondisi :</label>
                                <select onChange={(e) => setKondisi(e.target.value)} className='form-select' required>
                                    <option selected>Pilih kondisi</option>
                                    <option value="Mampu">Mampu</option>
                                    <option value="Tidak Mampu">Tidak Mampu</option>
                                </select>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button onClick={(e) => tambah()} className='btn' style={{ backgroundColor: "#002B5B", color: "white", width: "150px", marginTop: "20px" }}>Ajukan Data</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
