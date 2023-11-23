package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.UserDto;
import com.kerimsenturk.labreport.dto.request.CreateUserRequest;
import com.kerimsenturk.labreport.dto.request.PatientCreateRequest;
import com.kerimsenturk.labreport.service.UserService;
import com.kerimsenturk.labreport.util.ObjectConverter.Result.SuccessDataResult;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/v1/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //This endpoint asks some authorizes to access
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody CreateUserRequest createUserRequest){
        String id = userService.register(createUserRequest);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PostMapping("/registerPatient")
    public ResponseEntity<?> registerPatient(@RequestBody PatientCreateRequest patientCreateRequest){
        String id = userService.registerPatient(patientCreateRequest);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/")
    public ResponseEntity<?> getUserByID(@RequestParam String id){
        //Get the user by id
        UserDto userDto = userService.getUserById(id);

        //Place the userDto into Result wrapper object
        return ResponseEntity.ok(
                new SuccessDataResult<UserDto>(
                        userDto,
                        String.format("User founded by id : %s", id)));
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllUsers(){
        //Get the all users
        List<UserDto> userDtoList = userService.getAllUsers();

        //Place the userDto into Result wrapper object
        return ResponseEntity.ok(
                new SuccessDataResult<List<UserDto>>(
                        userDtoList,
                        String.format("%d users founded", userDtoList.size())));
    }
}
