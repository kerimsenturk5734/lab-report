import React, {useState} from 'react';
import './../css/App.css'
import {MDBBtn, MDBContainer, MDBInput} from 'mdb-react-ui-kit';

function Login() {
  const [content, setContent] = useState("login")

  const Screen = () => {
    if (content === "login") {
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
        <div className="col-md-5 box-shadow bg-gray mt-5 mb-5">
          <div className="text-center mt-5">
            <img src="https://cdn-icons-png.flaticon.com/512/8204/8204580.png"
              style={{ width: '150px' }} alt="logo"/>
            <h4 className="mt-1 mb-5 pb-1">Lab Report</h4>
          </div>
          <Screen />
        </div>
      </div>
    </MDBContainer>
  );
}

export default Login;
