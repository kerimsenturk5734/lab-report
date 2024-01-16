import React from 'react';
import {MDBCard, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

function Profile() {
    return (
        <MDBContainer className="mt-5 col-7" fluid={false}>
            <MDBCard >
               <MDBRow className={"m-5"}>
                   <MDBCol center={true}>
                       <img
                           src={"https://cdn-icons-png.flaticon.com/512/456/456141.png"}
                           alt={"profile"}
                           width={"50%"}
                       />
                   </MDBCol>
                   <MDBCol>
                       <MDBRow >
                           <MDBCol>
                               <h5><b>User ID:</b></h5>
                               <h5><b>Name:</b></h5>
                               <h5><b>Surname:</b></h5>
                               <h5><b>User Role:</b></h5>
                           </MDBCol>
                           <MDBCol>
                               <h5><i>12345678901</i></h5>
                               <h5><i>Kerim</i></h5>
                               <h5><i>Senturk</i></h5>
                               <h5><i>DOCTOR</i></h5>
                               <MDBRow className={"mt-5"}>
                                   <button type="button" className="btn btn-outline-danger btn-sm px-3">
                                       <i className="fa fa-solid fa-key"> Change Password</i>
                                   </button>
                               </MDBRow>
                           </MDBCol>
                       </MDBRow>
                   </MDBCol>
               </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}

export default Profile;