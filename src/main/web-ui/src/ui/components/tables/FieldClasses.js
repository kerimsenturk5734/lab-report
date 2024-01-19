import {DiseaseState} from "../../../domain/model/Disease";

export const getBgClassByStatus = (status) => {
    switch (status){
        case DiseaseState.WAITING_RESULTS : return 'bg-secondary'
        case DiseaseState.DIAGNOSTIC_RESULTED : return 'bg-success'
        case DiseaseState.PATHOLOGIC_RESULTED : return 'bg-warning'
        case DiseaseState.UPDATED : return 'bg-info'
        case DiseaseState.DELETED : return 'bg-danger'
    }
};

export const getTextClassByStatus = (status) => {
    switch (status){
        case DiseaseState.WAITING_RESULTS : return 'text-secondary'
        case DiseaseState.DIAGNOSTIC_RESULTED : return 'text-success'
        case DiseaseState.PATHOLOGIC_RESULTED : return 'text-warning'
        case DiseaseState.UPDATED : return 'text-info'
        case DiseaseState.DELETED : return 'text-danger'
    }
};