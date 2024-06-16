import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import nookies from 'nookies'
import Router from 'next/router'

export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx)

  if(!cookies.token){
    return{
      redirect:{
        destination : '/'
    }
    }
  }
  else if(cookies.role === "user"){
    return{
      redirect:{
        destination : '/home'
    }
    }
  }
  return{
    props: {}
  }
}


export default function create() {
    const [data,setdata] = useState([])

    async function getdata() {
      const response = await fetch("/api/getAkun", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setdata(data);
    }
    useEffect(() => {
        getdata();
      }, []);

      async function deleteAcc(id){
        const response = await fetch(`/api/register?id=${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        alert(data.message)
        getdata();
      }

      const [nama, setNama] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      async function tambah() {
        const send = {
            "nama":nama,
            "email":email,
            "password":password
        }
        const response = await fetch("/api/register",{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(send)
        })
        const data = await response.json()
        alert(data.message)
        getdata();
      }

      const logout = () => {
        nookies.destroy(null,'token')
        nookies.destroy(null,'role')
        Router.replace('/')
      }

  return (
        <>
            <title>Create Account</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <nav className="d-flex justify-content-end navbar fixed-top" style={{backgroundColor: "#002B5B"}}>
            <ul className="nav justify-content-end pe-3 text-light gap-4">
                {/* <Link href='profile'><div className="circle"><img src='/images/Group.png' alt='Rizki Rizki bersetubuh'></img></div></Link> */}
                <a className='btn btn-danger' onClick={()=>logout()}>Log Out</a>
            </ul>
        </nav>
        <div className="mt-5">
            <h1 className="fw-bold text-center pt-4">Data Akun Pengguna</h1>
        </div>
        <div className='d-flex justify-content-end me-5'>
            <a className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" href='#'>Tambah Akun</a>
        </div>

        <div className='container'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,Index) => (
                <tr>
                    <th scope="row">{Index+1}</th>
                    <td>{item.nama}</td>
                    <td>{item.email}</td>
                    <td><a className='btn btn-danger' onClick={()=>deleteAcc(item.id)}>Delete Account</a></td>
                </tr>                    
                ))}
            
            </tbody>
        </table>
        </div>

        
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Tambah Akun</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="Nama Lengkap" class="form-label">Nama Lengkap</label>
            <input onChange={(e) => setNama(e.target.value)} type="text" class="form-control" id="Nama Lengkap" placeholder="Masukkan Nama Lengkap"/>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="email" placeholder="Masukkan email"/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="password" placeholder="Masukkan password"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={(e) => tambah()} type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </>
  )
}
