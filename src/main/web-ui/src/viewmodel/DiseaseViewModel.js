
export default class DiseaseViewModel{
    getDummyDoctorDiseases = () => {
        return {
            "success": true,
            "message": "1 diseases founded",
            "data": [
                {
                    "id": 1,
                    "patient": {
                        "userId": "45298506781",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kaya",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "DIAGNOSTIC_RESULTED"
                },
                {
                    "id": 2,
                    "patient": {
                        "userId": "45298126781",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Utku",
                        "surname": "Şensoy",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 3,
                    "patient": {
                        "userId": "12345678901",
                        "name": "Ayse",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "98765432108",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 4,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 5,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "DIAGNOSTIC_RESULTED"
                },
                {
                    "id": 6,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayse",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "75279146800",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 7,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician":null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 8,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician":null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 9,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayse",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "98765432108",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "PATHOLOGICAL_RESULTED"
                },
                {
                    "id": 10,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "75279146800",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 11,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "75279146800",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 12,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayse",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "98765432108",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                }
            ]
        }
    }
    getDummyLabTechnicianDiseases = () => {
        return {
            "success": true,
            "message": "1 diseases founded",
            "data": [
                {
                    "id": 2,
                    "patient": {
                        "userId": "45298506781",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Utku",
                        "surname": "Şensoy",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 3,
                    "patient": {
                        "userId": "12345678901",
                        "name": "Ayse",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "98765432108",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 4,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 6,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayse",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "75279146800",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 7,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician":null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 8,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician":null,
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 9,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayse",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "98765432108",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "PATHOLOGICAL_RESULTED"
                },
                {
                    "id": 10,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "75279146800",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 11,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayşe",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "75279146800",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                },
                {
                    "id": 12,
                    "patient": {
                        "userId": "98765432109",
                        "name": "Ayse",
                        "surname": "Solmaz",
                        "role": "PATIENT"
                    },
                    "labTechnician": {
                        "userId": "98765432108",
                        "name": "Melike",
                        "surname": "Kaba",
                        "role": "LAB_TECHNICIAN"
                    },
                    "doctor": {
                        "userId": "1234567",
                        "name": "Burak",
                        "surname": "Kara",
                        "role": "DOCTOR"
                    },
                    "labRequestType": "BLOOD_ANALYSIS",
                    "pathologicReport": null,
                    "diagnosticReport": null,
                    "diseaseState": "WAITING_RESULTS"
                }
            ]
        }
    }
}