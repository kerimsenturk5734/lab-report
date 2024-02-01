import React from 'react';
import CustomModal from "./CustomModal";

function AreYouSureModal({open, question, onConfirm, onCancel}) {
    const confirm = () => {
        onConfirm()
        setTimeout(()=>{open = false}, 2000)
    }

    return (
        <CustomModal open={open} onClose={onCancel}>
            <div className={"d-flex row gap-5 p-3 justify-content-center w-75 my-2 mx-2 flex-wrap"}>
                <div className={"d-flex justify-content-center"}>
                    <img src="https://cdn-icons-png.flaticon.com/512/9149/9149364.png"
                         className={"w-responsive w-25"}
                         alt={"create_report"}/>
                </div>
                <div className={"d-flex justify-content-center text-x-large font-monospace"}>
                    <span>{question}</span>
                </div>
                <div className={"d-flex gap-5 my-5 font-monospace"}>
                    <button type="button"
                            className="btn btn-block btn-danger btn-lg p-1"
                            onClick={confirm}>

                        <i className="fa fa-solid fa-trash"> </i> Confirm
                    </button>
                    <button type="button"
                                className="btn btn-block btn-dark btn-outline-danger btn-lg"
                            onClick={onCancel}>

                        <i className="fa fa-solid fa-window-close"> </i> Cancel
                    </button>
                </div>
            </div>
        </CustomModal>
    );
}

export default AreYouSureModal;