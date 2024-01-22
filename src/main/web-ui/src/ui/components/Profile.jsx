import React, {useState} from 'react';
import {MDBCard, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import ChangeUserInfoModal from "./modals/ChangeUserInfoModal";

function Profile() {
    const [updateUserModalIsOpen, setUpdateUserModalIsOpen] = useState(false)

    const showUpdateUserModal = () => {
        setUpdateUserModalIsOpen(true)
    }
    const closeUpdateUserModal = () => {
        setUpdateUserModalIsOpen(false)
    }

    return (
        <MDBContainer className="mt-5 col-7" fluid={false}>
            <MDBCard >
               <MDBRow className={"m-5"}>
                   <MDBCol center={true}>
                       <img
                           src={"https://cdn-icons-png.flaticon.com/512/456/456141.png"}
                           alt={"profile"}
                           className={"w-responsive w-75 h-75"}
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
                                   <button type="button"
                                           className="btn btn-outline-warning btn-sm px-3"
                                           onClick={showUpdateUserModal}>

                                       <i className="fa fa-solid fa-pen"> Change User Info</i>
                                   </button>
                                   <ChangeUserInfoModal open={updateUserModalIsOpen} onCancel={closeUpdateUserModal}/>
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