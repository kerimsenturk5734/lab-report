import {api, apiNoneSecure} from "../api";
import {UserLoginRequest} from "../../../domain/payload/request/UserLoginRequest";
import {UpdateUserRequest} from "../../../domain/payload/request/UpdateUserRequest";
import {CreateUserRequest} from "../../../domain/payload/request/CreateUserRequest";
import {PatientCreateRequest} from "../../../domain/payload/request/PatientCreateRequest";

const DOMAIN_BASE_URL = "/users"
const userDao = {

    // Define your API endpoints here
    getUserById: (id:string) => api.get(DOMAIN_BASE_URL.concat(`/${id}`)),

    getAllUsers: () => api.get(DOMAIN_BASE_URL.concat('/getAllUsers')),

    loginUser: (userLoginRequest: UserLoginRequest) =>
        apiNoneSecure.post(DOMAIN_BASE_URL.concat('/login'), userLoginRequest),

    updateUser: (updateUserRequest : UpdateUserRequest) =>
        api.put(DOMAIN_BASE_URL.concat('/updateUser'), updateUserRequest),

    register: (createUserRequest : CreateUserRequest) =>
        api.post(DOMAIN_BASE_URL.concat('/register'), createUserRequest),

    registerPatient: (patientCreateRequest : PatientCreateRequest) =>
        apiNoneSecure.post(DOMAIN_BASE_URL.concat('/registerPatient'), patientCreateRequest)
};

export default userDao;