import React, {useState} from 'react';
import {MDBCard, MDBContainer, MDBInput} from "mdb-react-ui-kit";

import {DropDown, DropDownAction} from "./TooledSearchBar";

function CreateDisease(props) {
    const [labRequestType, setLabRequestType] = useState()

    return (
        <MDBContainer className="mt-5 col-8" fluid={false}>
            <MDBCard className={"p-5 text-center"}>
                <div className={"d-flex"}>
                    <img src={"https://cdn-icons-png.flaticon.com/512/2750/2750761.png"}
                         className={"w-responsive w-25 h-25"} alt={"create_disease"}/>

                    <div className={"d-flex row justify-content-center gap-2 mx-5"}>
                        <span className={"text-center text-xx-large mb-5"}>Create Disease</span>
                        <MDBInput wrapperClass='mb-4' label='Patient Number' type='number'/>
                        <DropDown title={"Lab Request Type"} actions={getLabRequestTypeActions()}/>
                        <div className={"d-flex justify-content-end"}>

                            <button type="button" className="btn btn-dark btn-outline-success btn-sm px-3">
                                <i className="fa fa-solid fa-plus"> Create Disease</i>
                            </button>
                        </div>
                    </div>
                </div>
            </MDBCard>
        </MDBContainer>
    );
}

function getLabRequestTypeActions(){
    return [<DropDownAction title={"BLOOD"} onSelect={() => {}}/>]
}
export default CreateDisease;