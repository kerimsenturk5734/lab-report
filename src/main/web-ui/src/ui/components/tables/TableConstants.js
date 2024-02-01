export const HEADS = {
    "DOCTOR" : [
        "ID", "DATE", "PATIENT ID", "PATIENT", "REQUEST", "STATUS",
        "LAB TECH.", "PATHOLOGIC", "DIAGNOSTIC", "REPORT ACT."],
    "PATIENT" : [
        "ID", "DATE", "DOCTOR", "REQUEST", "STATUS", "PATHOLOGIC REPORT", "DIAGNOSTIC REPORT"],
    "LAB_TECHNICIAN" : [
        "ID", "DATE", "DOCTOR", "REQUEST", "LAB TECHNICIAN", "STATUS", "PATHOLOGIC REPORT"],
}

export const DataTypes = {
    "DOCTOR" : {
        "SEARCH_BY" : {
            "ID" : "ID",
            "PATIENT_ID" : "PATIENT ID",
            "LAB_TECHNICIAN" : "LAB TECHNICIAN",
            "PATIENT_FULL_NAME" : "PATIENT FULL NAME"
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
    },
    "LAB_TECHNICIAN" : {
        "SEARCH_BY" : {
            "ID" : "ID",
            "DOCTOR" : "DOCTOR",
            "LAB_TECHNICIAN" : "LAB TECHNICIAN"
        },
        "ORDER_BY" : {
            "ID_ASC" : "ID Ascending",
            "ID_DESC" : "ID Descending",
            "DATE_NEW_TO_OLD" : "DATE New to Old",
            "DATE_OLD_TO_NEW" : "DATE Old to New"
        }
    }
}