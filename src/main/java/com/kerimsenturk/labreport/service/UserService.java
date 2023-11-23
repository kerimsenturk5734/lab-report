package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.dto.UserDto;
import com.kerimsenturk.labreport.dto.converter.UserAndUserDtoConverter;
import com.kerimsenturk.labreport.exception.UserAlreadyExistException;
import com.kerimsenturk.labreport.dto.request.CreateUserRequest;
import com.kerimsenturk.labreport.dto.request.PatientCreateRequest;
import com.kerimsenturk.labreport.dto.request.UpdateUserRequest;
import com.kerimsenturk.labreport.dto.request.UserLoginRequest;
import com.kerimsenturk.labreport.exception.UserNotFoundException;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.UserRole;
import com.kerimsenturk.labreport.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserAndUserDtoConverter userAndUserDtoConverter;

    public UserService(UserRepository userRepository, UserAndUserDtoConverter userAndUserDtoConverter) {
        this.userRepository = userRepository;
        this.userAndUserDtoConverter = userAndUserDtoConverter;
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
    //That function will implement when developing the API Authentication package
    public void login(UserLoginRequest userLoginRequest){

    }

    public void updateUser(UpdateUserRequest updateUserRequest){

    }

    public UserDto getUserById(String id){
        Optional<User> userOptional = userRepository.findById(id);

        //If it is present convert to dto object and assign to userDto else throw exception
        UserDto userDto = userAndUserDtoConverter
                .convert(userOptional
                        .orElseThrow(() ->
                                new UserNotFoundException(String.format("Indicated user not found by id: %s", id))));

        //return converted UserDto
        return userDto;
    }

    public List<UserDto> getAllUsers(){
        //Get all users
        List<User> userList = userRepository.findAll();

        //Convert them to dto object and return
        return userList
                .stream()
                .map(userAndUserDtoConverter::convert)
                .collect(Collectors.toList());
    }
}
