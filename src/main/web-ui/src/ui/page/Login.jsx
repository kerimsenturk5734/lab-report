import React, { useState } from 'react';
import './App.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

function Login() {
  var [content, setContent] = useState("login")

  var Screen = () => {
    if (content == "login") {
      return (
        <>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <MDBBtn className='mx-2' color='secondary' onClick={() => { setContent("login") }}>
              Login
            </MDBBtn>
            <MDBBtn outline className='mx-2' color='secondary' onClick={() => { setContent("register") }}>
              Register
            </MDBBtn>
          </div>
          <div className="row align-items-center justify-content-center ">
            <MDBInput wrapperClass='mb-4 w-75' label='Pesel Number' type='text' />
            <MDBInput wrapperClass='mb-4 w-75' label='Password' type='password' />
          </div>
          <div className="text-center pt-1 mb-2 pb-1 mt-3">
            <MDBBtn className="mb-4 w-75 gradient-custom-2">Register</MDBBtn>
          </div>
        </>
      )
    }
    else {
      return (

        <>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <MDBBtn outline className='mx-2' color='secondary' onClick={() => { setContent("login") }}>
              Login
            </MDBBtn>
            <MDBBtn className='mx-2' color='secondary' onClick={() => { setContent("register") }}>
              Register
            </MDBBtn>
          </div>

          <div className="row align-items-center justify-content-center">
            <MDBInput wrapperClass='mb-4 w-75' label='Pesel Number' type='number' />
            <MDBInput wrapperClass='mb-4 w-75' label='Name' type='text' />
            <MDBInput wrapperClass='mb-4 w-75' label='Surname' type='text' />
            <MDBInput wrapperClass='mb-4 w-75' label='Password' type='password' />
            <MDBInput wrapperClass='mb-4 w-75' label='Repassword' type='password' />
          </div>
          <div className="text-center pt-1 mb-2 pb-1 mt-3">
            <MDBBtn className="mb-4 w-75 gradient-custom-2">Register</MDBBtn>
          </div>
        </>
      )
    }
  }

  return (
    <MDBContainer className="gradient-form">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5 box-shadow mt-5 border">
          <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              style={{ width: '185px' }} alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">Lab Report</h4>
          </div>
          <Screen />
        </div>
      </div>
    </MDBContainer>
  );
}

export default Login;
