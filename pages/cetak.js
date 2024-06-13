import React from 'react'
import Link from 'next/link';
import { useEffect,useState } from 'react';
import nookies from 'nookies'
import ExcelJS from 'exceljs';

export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx)

  if(!cookies.token){
    return{
      redirect:{
        destination : '/'
    }
    }
  }
  return{
    props: {}
  }
}


export default function cetak() {
  //getcookies 
  const cookie = nookies.get('token');
  const cookies = cookie.token;
 
  //data setter and getter
  const [data,setdata]=useState([])

  //onload getdata
  useEffect(()=>{
    async function getdata(){
      const response = await fetch("/api/getdaftar",{
        headers:{
        'Content-Type': 'application/json'
        },
        method:"GET"
      })
      const data = await response.json()
      setdata(data)
    }
    getdata()
  },[])

  //function to cetak
  async function cetak(item){
    const send = {
      "id":item.id,
      "token":cookies,
      "keterangan":"Cetak Surat - SKTM"
    }
    try{
      const response = await fetch('api/printsktm',{
        method:"POST",
        headers:{
          'content-type':'application/json'

        },
        body:JSON.stringify(send)
      })

      const response2 = await fetch('api/makehistory',{
        method:"POST",
        headers:{
          'content-type':'application/json'

        },
        body:JSON.stringify(send)
      })

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      //unduh dokumen 
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SKTM.docx';
      link.click();

      //hapus objek URL setelah selesai
      URL.revokeObjectURL(url);
    }
    catch(error){
      alert('Terjadi kesalahan saat menghasilkan dokumen')
    }
  }

  //function cetak skk ayah
  async function cetak_skk_ayah(item){
    const send = {
      "id":item.id,
      "token":cookies,
      "keterangan":"Cetak Surat - SKK ayah"
    }
    try{
      const response = await fetch('api/printskkayah',{
        method:"POST",
        headers:{
          'content-type':'application/json'

        },
        body:JSON.stringify(send)
      })

      const response2 = await fetch('api/makehistory',{
        method:"POST",
        headers:{
          'content-type':'application/json'

        },
        body:JSON.stringify(send)
      })

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      //unduh dokumen 
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SKK Ayah.docx';
      link.click();

      //hapus objek URL setelah selesai
      URL.revokeObjectURL(url);
    }
    catch(error){
      alert('Terjadi kesalahan saat menghasilkan dokumen')
    }
  }
   //function cetak skk ibu
   async function cetak_skk_ibu(item){
    const send = {
      "id":item.id,
      "token":cookies,
      "keterangan":"Cetak Surat - SKK ibu"
    }
    try{
      const response = await fetch('api/printskkibu',{
        method:"POST",
        headers:{
          'content-type':'application/json'

        },
        body:JSON.stringify(send)
      })

      const response2 = await fetch('api/makehistory',{
        method:"POST",
        headers:{
          'content-type':'application/json'

        },
        body:JSON.stringify(send)
      })

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      //unduh dokumen 
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SKK Ibu.docx';
      link.click();

      //hapus objek URL setelah selesai
      URL.revokeObjectURL(url);
    }
    catch(error){
      alert('Terjadi kesalahan saat menghasilkan dokumen')
    }
  }

  //function cetak all data anak yatim
  async function cetak_data (){
    const response = await fetch("/api/getdaftar",{
      method:"GET",
      headers:{
        'content-type':'application/json'
      }
    })
    const data = await response.json()
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');

    // Add headers
    const headers = Object.keys(data[0]);
    worksheet.addRow(headers);

    // Add data rows
    data.forEach((row) => {
      const rowData = Object.values(row);
      worksheet.addRow(rowData);
    });

    // Set column widths
    worksheet.columns.forEach((column) => {
      column.width = 15;
    });

    // Generate Excel file
    workbook.xlsx.writeBuffer().then((buffer) => {
      const dataBlob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Data Anak Yatim.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

    //function to search 
    const [search,setsearch] = useState('')
    const filterdata = search
  ? data.filter(item=>
      item.nik.includes(search)
      )
  : data 

  return (
    <>
        <title>Cetak</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
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
                <Link href='profile'><div className="circle"><img src='/images/Group.png' alt='Rizki Rizki bersetubuh'></img></div></Link>
            </ul>
        </nav>

        <div className='mt-5'>
            <h1 className='fw-bold text-center pt-4'>
                Daftar Anak Yatim Piatu
            </h1>
        </div>

        <div class="input-group mb-3 ps-5 pe-5">
            <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" class="form-control" placeholder="Masukkan NIK" aria-label="NIK" aria-describedby="basic-addon2" style={{borderRadius: '30px 0px 0px 30px', border: '1px solid grey'}}/>
            <button className='btn rounded-pills' style={{border:' 1px solid grey ', borderRadius: '0px 30px 30px 0px'}}><img src='/images/search.png'></img></button>
        </div>

        <button onClick={(e)=>cetak_data()} className="btn rounded-pills btn-md text-light button-cetak fw-bold" type="button" style={{ backgroundColor: '#00B407', borderRadius:'30px'}}>
                Cetak Data
        </button>

        <div className="tabel table-responsive ps-5 pe-5 pt-3">
          <table id='table-to-xls' className="table table-bordered border-dark" style={{border: '2px solid black'}}>
            <thead className="text-center fw-bold" style={{border: '2px solid black', backgroundColor:'#A5D7E8'}}>
              <tr>
                <td style={{border: '2px solid black'}}>No</td>
                <td style={{border: '2px solid black'}}>NIK</td>
                <td style={{border: '2px solid black'}}>Nama</td>
                <td style={{border: '2px solid black'}}>SKTM</td>
                <td style={{border: '2px solid black'}}>Surat Kematian</td>
              </tr>
            </thead>
            <tbody className="text-center" style={{border: '2px solid black'}}>
                {filterdata.map((dat,index)=>(
                <tr key={dat.id}>
                  <td style={{border: '2px solid black'}}>{index+1}</td>
                  <td style={{border: '2px solid black'}}>{dat.nik}</td>
                  <td style={{border: '2px solid black'}}>{dat.nama}</td> 
                  {dat.kondisi == "Mampu"?(
                    <td style={{border: '2px solid black'}}><button  className='btn btn-danger rounded' style={{backgroundColor:'#FF0000', color:'black'}}>Tidak tersedia</button></td> 
                    ):(
                      <td style={{border: '2px solid black'}}><button onClick={(e)=>{cetak(dat)}} className='btn btn-success rounded' style={{backgroundColor:'#73E42E', color:'black'}}>Cetak</button></td>
                  )}
                  {/* <td style={{border: '2px solid black'}}><button className='btn btn-danger rounded' style={{backgroundColor:'#FF0000', color:'black'}}>Tidak tersedia</button></td> */}
                  <td style={{border: '2px solid black'}}>
                  {dat.status === "Yatim" ? (
                    <button className='btn  rounded' onClick={(e)=>{cetak_skk_ayah(dat)}} style={{ backgroundColor:'#73E42E', color:'black', marginRight:'10px' }}>SKK Ayah</button>
                  ) : dat.status === "Piatu" ? (
                    <button className='btn  rounded' onClick={(e)=>{cetak_skk_ibu(dat)}} style={{ backgroundColor:'#73E42E', color:'black' }}>SKK Ibu</button>
                  ) : (
                    <React.Fragment>
                      <button className='btn  rounded' onClick={(e)=>{cetak_skk_ayah(dat)}} style={{ backgroundColor:'#73E42E', color:'black', marginRight:'10px' }}>SKK Ayah</button>
                      <button className='btn  rounded' onClick={(e)=>{cetak_skk_ibu(dat)}} style={{ backgroundColor:'#73E42E', color:'black' }}>SKK Ibu</button>
                    </React.Fragment>
                  )}

                  </td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
    </>
  )
}
