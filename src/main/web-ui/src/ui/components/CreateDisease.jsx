import {useEffect, useState} from 'react';
import {MDBCard, MDBContainer, MDBInput} from "mdb-react-ui-kit";

import {DropDown, DropDownAction} from "./TooledSearchBar";
import {LabRequestType} from "../../domain/model/Disease";
import {CreateDiseaseRequest} from "../../domain/payload/request/CreateDiseaseRequest";
import {LocalStorageManager} from "../../util/localStorageManager";
import {jsonBeautifier} from "../../util/JsonBeautifier";
import {toast} from "react-toastify";
import {useCreateDisease} from "../../domain/usecase/disease/CreateDiseaseUseCase";

function CreateDisease(props) {
    const {state, createDisease} = useCreateDisease()

    const [labRequestType, setLabRequestType] = useState(null)
    const [patientIdInput, setPatientIdInput] = useState()

    const handlePatientIdChange = (e) => {
        const input = e.target.value;
        setPatientIdInput(input);
    }

    const buildPayload = ()  => {
        if(Object.values(LabRequestType).includes(labRequestType))
            return new CreateDiseaseRequest(patientIdInput, LocalStorageManager.loadUser().userId, labRequestType)

        else{
            let toastOptions =
                {position:'top-left', hideProgressBar: true, theme:'colored'}

            toast.warning(jsonBeautifier.getPreOfJson('Please select a valid request type!!!'), toastOptions)
        }
    }

    const handleDiseaseCreation = () => {
        let payload = buildPayload()
        if(![undefined, null].includes(payload))
            createDisease(payload)
    }

    useEffect(() => {
        if(state.successMessage.length > 0){
            let toastOptions =
                {position:'top-left', hideProgressBar: true, theme:'colored'}
            toast.success(jsonBeautifier.getPreOfJson(state.successMessage), toastOptions)
            state.successMessage = ''

            setTimeout(()=>{window.location.reload()}, 2000)
        }
    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0){
            let toastOptions =
                {position:'top-left', hideProgressBar: true, theme:'colored', style:{width:'400px'}}
            toast.error(jsonBeautifier.getPreOfJson(state.errorMessage), toastOptions)
            state.errorMessage = ''
        }
    }, [state.errorMessage]);

    return (
        <MDBContainer className="mt-5 col-8" fluid={false}>
            <MDBCard className={"p-5 text-center"}>
                <div className={"d-flex"}>
                    <img src={"https://cdn-icons-png.flaticon.com/512/2750/2750761.png"}
                         className={"w-responsive w-25 h-25"} alt={"create_disease"}/>

                    <div className={"d-flex row justify-content-center gap-2 mx-5"}>
                        <span className={"text-center text-xx-large mb-5"}>Create Disease</span>

                        <div className={"d-flex justify-content-start w-responsive gap-2 w-75"}>
                            <div className={"d-flex"}>
                                <DropDown title={(labRequestType !== null) ? labRequestType : "Select a Request Type"}
                                          actions={getLabRequestTypeActions({onSelect: setLabRequestType})}/>
                            </div>
                            <MDBInput label='Patient Number' type='text'
                                      maxLength={11} value={patientIdInput} onChange={handlePatientIdChange}/>
                        </div>

                        <div className={"d-flex justify-content-end mt-5 w-75"}>
                            <button type="button" className="btn btn-dark btn-outline-success btn-sm px-3"
                                    onClick={handleDiseaseCreation}>
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