import {useState} from 'react';
import {MDBCard, MDBContainer, MDBInput} from "mdb-react-ui-kit";

import {DropDown, DropDownAction} from "./TooledSearchBar";
import {LabRequestType} from "../../domain/model/Disease";

function CreateDisease(props) {
    const [labRequestType, setLabRequestType] = useState(null)

    return (
        <MDBContainer className="mt-5 col-8" fluid={false}>
            <MDBCard className={"p-5 text-center"}>
                <div className={"d-flex"}>
                    <img src={"https://cdn-icons-png.flaticon.com/512/2750/2750761.png"}
                         className={"w-responsive w-25 h-25"} alt={"create_disease"}/>

                    <div className={"d-flex row justify-content-center gap-2 mx-5"}>
                        <span className={"text-center text-xx-large mb-5"}>Create Disease</span>

                        <div className={"d-flex gap-4"}>
                            <span>Patient Number : </span>
                            <MDBInput wrapperClass='mb-4 w-50' label='Patient Number' type='number'/>
                        </div>

                        <div className={"d-flex gap-5"}>
                            <span>Request Type : </span>
                            <div >
                                <DropDown title={(labRequestType !== null) ? labRequestType : "Select a Request Type"}
                                          actions={getLabRequestTypeActions({onSelect: setLabRequestType})}/>
                            </div>
                        </div>

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

function getLabRequestTypeActions({onSelect}) {
    return Object.entries(LabRequestType).map(([key, value]) => (
        <div  className={"rounded-3"} key={key}>
            {DropDownAction({
                title: `${value}`, onSelect: () => {
                    onSelect(value)
                }
            })}
        </div>
    ))
}

export default CreateDisease;