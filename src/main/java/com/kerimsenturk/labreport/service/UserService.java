package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.exception.UserAlreadyExistException;
import com.kerimsenturk.labreport.dto.request.CreateUserRequest;
import com.kerimsenturk.labreport.dto.request.PatientCreateRequest;
import com.kerimsenturk.labreport.dto.request.UpdateUserRequest;
import com.kerimsenturk.labreport.dto.request.UserLoginRequest;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.UserRole;
import com.kerimsenturk.labreport.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String registerPatient(PatientCreateRequest patientCreateRequest){
        return
            register(
                    new CreateUserRequest(
                            patientCreateRequest.userId(),
                            patientCreateRequest.name(),
                            patientCreateRequest.surname(),
                            patientCreateRequest.password(),
                            UserRole.PATIENT));
    }

    public String register(CreateUserRequest createUserRequest){
        //Firstly check the userId is exists
        if(userRepository.existsById(createUserRequest.userId()))
            throw new UserAlreadyExistException(String.format("A user already exists with this id : %s", createUserRequest.userId()));

        //Create new user
        User newUser = new User(
                createUserRequest.userId(),
                createUserRequest.name(),
                createUserRequest.surname(),
                createUserRequest.password(),
                createUserRequest.userRole());

        //Save the user inside the db
        return userRepository.save(newUser).getUserId();
    }

    //It might return some login credentials to access API (Bearer Token)
    //Some authentications necessary inside this function
    //That function will implement when developing the API Authentication
    public void login(UserLoginRequest userLoginRequest){

    }

    public void updateUser(UpdateUserRequest updateUserRequest){

    }
}
