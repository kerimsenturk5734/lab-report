package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.dto.request.CreateUserRequest;
import com.kerimsenturk.labreport.dto.request.PatientCreateRequest;
import com.kerimsenturk.labreport.dto.request.UpdateUserRequest;
import com.kerimsenturk.labreport.dto.request.UserLoginRequest;
import com.kerimsenturk.labreport.model.enums.UserRole;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    public void registerPatient(PatientCreateRequest patientCreateRequest){
        register(
                new CreateUserRequest(
                        patientCreateRequest.userId(),
                        patientCreateRequest.name(),
                        patientCreateRequest.surname(),
                        patientCreateRequest.password(),
                        UserRole.PATIENT));
    }
    public void register(CreateUserRequest createUserRequest){

    }

    //It might return some login credentials to access API (Bearer Token)
    //Some authentications necessary inside this function
    //That function will implement when developing the API Authentication
    public void login(UserLoginRequest userLoginRequest){

    }

    public void updateUser(UpdateUserRequest updateUserRequest){

    }
}
