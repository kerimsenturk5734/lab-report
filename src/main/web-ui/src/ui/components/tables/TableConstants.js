export const HEADS = {
    "DOCTOR" : [
        "ID", "DATE", "PATIENT ID", "REQUEST", "STATUS",
        "LAB TECHNICIAN", "PATHOLOGIC REPORT", "DIAGNOSTIC REPORT", "ACTIONS"],
    "PATIENT" : [
        "ID", "DATE", "DOCTOR", "REQUEST", "STATUS", "PATHOLOGIC REPORT", "DIAGNOSTIC REPORT"],
}

export const DataTypes = {
    "DOCTOR" : {
        "SEARCH_BY" : {
            "ID" : "ID",
            "PATIENT_ID" : "PATIENT ID",
            "LAB_TECHNICIAN" : "LAB TECHNICIAN"
        },
        "ORDER_BY" : {
            "ID_ASC" : "ID Ascending",
            "ID_DESC" : "ID Descending",
            "PATIENT_ID_ASC" : "PATIENT ID Ascending",
            "PATIENT_ID_DESC" : "PATIENT ID Descending",
            "DATE_NEW_TO_OLD" : "DATE New to Old",
            "DATE_OLD_TO_NEW" : "DATE Old to New"
        }
    },
    "PATIENT" : {
        "SEARCH_BY" : {
            "ID" : "ID",
            "DOCTOR" : "DOCTOR",
        },
        "ORDER_BY" : {
            "ID_ASC" : "ID Ascending",
            "ID_DESC" : "ID Descending",
            "DATE_NEW_TO_OLD" : "DATE New to Old",
            "DATE_OLD_TO_NEW" : "DATE Old to New"
        }
    }
}