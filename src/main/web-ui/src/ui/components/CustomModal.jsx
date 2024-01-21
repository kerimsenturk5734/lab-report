import React from 'react';
import {Modal} from "@mui/material";
import {MDBCard, MDBContainer} from "mdb-react-ui-kit";

function CustomModal({children, open, onClose}) {
    return (
       <div >
           <Modal
               open={open}
               onClose={onClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
           >
               <MDBContainer style={{ maxHeight: '100vh', overflowY: 'auto' }} className="my-1 col-7">
                   <MDBCard className={"p-1 rounded-3"}>
                       <div className={"d-flex row gap-3"}>
                           <div className={"d-flex justify-content-end"}>
                               <span className={"btn btn-close p-2"} onClick={onClose}></span>
                           </div>
                           <div className={"d-flex justify-content-center"}>
                               {children}
                           </div>
                       </div>
                   </MDBCard>
               </MDBContainer>
           </Modal>
       </div>
    );
}

export default CustomModal;