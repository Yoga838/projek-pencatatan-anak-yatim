import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import nookies from 'nookies'

export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx)

  if(!cookies.token){
    return{
      redirect:{
        destination : '/'
    }
    }
  }
  else if (cookies.role === "admin"){
    return{
      redirect:{
        destination : '/create-acc'
    }
    }
  }
  return{
    props: {}
  }
}


export default function data_diri() {
  //set userouter to variable
  const Router = useRouter()
  
  //data from query
  const {query:{id,name}} = Router
    //set data to send
  const send ={"id":Number(id)}
  
  //data setter getter
  const [data,setdata]= useState([])

  //setdata onload
  useEffect(()=>{
    const {query:{id,name}} = Router
    //set data to send
    const send ={"id":Number(id)}
    async function getdata (){
        const response = await fetch(`/api/accept?id=${id}`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        setdata(data)
    }
    getdata()
  },[Router])


  //set format from iso dates to short dates
  const formatShortDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    return `${day}-${month}-${year}`;
  };

  //function to delete data 
  async function deletedata(){
    const response = await fetch(`/api/accept?id=${id}`,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        }
    })
    const data = await response.json()
    alert(data.message)
    Router.replace('pengajuan')
  }
  //handlebuttonclick
  async function Setujui(){
    const response = await fetch(`/api/accept?id=${id}`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        }
    })
    const data = await response.json()
    alert(data.message)
    Router.replace('pengajuan')
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
                    <a className="nav-link" aria-current="page" href="home">Pengajuan</a>
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
                <div class="mb-3 pb-5 d-flex flex-column" style={{backgroundColor: '#A5D7E8', borderRadius:'20px',width:'200vh'}}>
                    <div className='d-flex flex-column ps-4 pt-4'>
                        <h5>No Whatsapp Bersangkutan:</h5>
                        <a className='text-decoration-none text-dark' href={`https://wa.me/${data.noWa}`}>{data.noWa}</a>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-4'>
                        <h10>NIK : </h10>
                        <h7>{data.nik}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Nama Lengkap : </h10>
                        <h7>{data.nama}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Tempat, Tanggal Lahir : </h10>
                        <h7>{data.tempat_lahir}, {formatShortDate(data.tanggal_lahir)}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Status : </h10>
                        <h7>{data.status}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Anak ke : </h10>
                        <h7>{data.anak_ke}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Jumlah Saudara : </h10>
                        <h7>{data.jumlah_saudara}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Pendidikan : </h10>
                        <h7>{data.pendidikan}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Nama Ayah : </h10>
                        <h7>{data.nama_ayah}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Nama Ibu : </h10>
                        <h7>{data.nama_ibu}</h7>
                    </div>
                    <div className='d-flex flex-column ps-4 pt-3'>
                        <h10>Kondisi : </h10>
                        <h7>{data.kondisi}</h7>
                    </div>
                    <div className={data.status === 'Yatim' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>tempat lahir ayah : </h10>
                        <h7>{data.tempat_lahir_ayah}</h7>
                    </div>
                    <div className={data.status === 'Yatim' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>tanggal lahir ayah : </h10>
                        <h7>{formatShortDate(data.tanggal_lahir_ayah)}</h7>
                    </div>
                    <div className={data.status === 'Yatim' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>jenis kelamin ayah : </h10>
                        <h7>{data.jenis_kelamin_ayah}</h7>
                    </div>
                    <div className={data.status === 'Yatim' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>umur ayah : </h10>
                        <h7>{data.umur_ayah}</h7>
                    </div>
                    <div className={data.status === 'Yatim' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>hari meninggal ayah : </h10>
                        <h7>{data.hari_meninggal_ayah}</h7>
                    </div>
                    <div className={data.status === 'Yatim' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>tanggal meninggal ayah : </h10>
                        <h7>{formatShortDate(data.tanggal_meninggal_ayah)}</h7>
                    </div>
                    <div className={data.status === 'Yatim' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>meninggal karena ayah : </h10>
                        <h7>{data.meninggal_karena_ayah}</h7>
                    </div>
                    
                    <div className={data.status === 'Piatu' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>tempat lahir ibu : </h10>
                        <h7>{data.tempat_lahir_ibu}</h7>
                    </div>
                    <div className={data.status === 'Piatu' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>tanggal lahir ibu : </h10>
                        <h7>{formatShortDate(data.tanggal_lahir_ibu)}</h7>
                    </div>
                    <div className={data.status === 'Piatu' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>jenis kelamin ibu : </h10>
                        <h7>{data.jenis_kelamin_ibu}</h7>
                    </div>
                    <div className={data.status === 'Piatu' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>umur ibu : </h10>
                        <h7>{data.umur_ibu}</h7>
                    </div>
                    <div className={data.status === 'Piatu' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>hari meninggal ibu : </h10>
                        <h7>{data.hari_meninggal_ibu}</h7>
                    </div>
                    <div className={data.status === 'Piatu' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>tanggal meninggal ibu : </h10>
                        <h7>{formatShortDate(data.tanggal_meninggal_ibu)}</h7>
                    </div>
                    <div className={data.status === 'Piatu' ?('d-flex flex-column ps-4 pt-3 d-block'): data.status === 'Yatim-Piatu'?('d-flex flex-column ps-4 pt-3 d-block'):('d-none')  }>
                        <h10>meninggal karena ibu : </h10>
                        <h7>{data.meninggal_karena_ibu}</h7>
                    </div>
                </div>
                </div>

                <div className='d-flex justify-content-end pb-5 pe-5'>
                        <div className="col-sm-auto me-3" style={{marginTop: '45px',}}>
                            <button onClick={(e)=>deletedata()} type="submit" className="btn text-light" style={{width: '150px',height:'50px' ,backgroundColor:'#DF0202', fontWeight:'bold', borderRadius:'30px'}}>Hapus</button>
                        </div>
                        <div className="col-sm-auto" style={{marginTop: '45px',}}>
                            <button onClick={(e)=>Setujui()} type="submit" className="btn text-light" style={{width: '150px',height:'50px' ,backgroundColor:'#00B407', fontWeight:'bold', borderRadius:'30px'}}>Setujui</button>
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
