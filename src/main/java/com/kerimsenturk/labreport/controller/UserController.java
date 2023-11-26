package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.UserDto;
import com.kerimsenturk.labreport.dto.request.CreateUserRequest;
import com.kerimsenturk.labreport.dto.request.PatientCreateRequest;
import com.kerimsenturk.labreport.dto.request.UpdateUserRequest;

import com.kerimsenturk.labreport.service.UserService;

import com.kerimsenturk.labreport.util.MessageBuilder;
import com.kerimsenturk.labreport.util.Result.SuccessDataResult;
import com.kerimsenturk.labreport.util.Result.SuccessResult;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/v1/api/users")
@Validated
public class UserController {
    private final UserService userService;
    private final MessageBuilder messageBuilder;
    public UserController(UserService userService) {
        this.userService = userService;
        this.messageBuilder = new MessageBuilder();

    }

    //This endpoint asks some authorizes to access
    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody CreateUserRequest createUserRequest){
        String id = userService.register(createUserRequest);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();

        return ResponseEntity.created(uri).build();
    }

    @PostMapping("/registerPatient")
    public ResponseEntity<?> registerPatient(@Valid @RequestBody PatientCreateRequest patientCreateRequest){
        String id = userService.registerPatient(patientCreateRequest);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/")
    public ResponseEntity<?> getUserByID(
            @RequestParam
            @Pattern(regexp = "^([0-9]+){7,11}$", message = "{pattern.unmatched.userId }")
            String id){

        //Get the user by id
        UserDto userDto = userService.getUserById(id);

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.userFoundedById")
                        .params(id)
                        .build();

        //Place the userDto into Result wrapper object
        return ResponseEntity.ok(new SuccessDataResult<UserDto>(userDto, message));
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllUsers(){
        //Get the all users
        List<UserDto> userDtoList = userService.getAllUsers();

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.usersFounded")
                        .params(userDtoList.size())
                        .build();

        //Place the userDto into Result wrapper object
        return ResponseEntity.ok(new SuccessDataResult<List<UserDto>>(userDtoList, message));
    }

    @PutMapping("/updateUser")
    public ResponseEntity<?> updateUser(UpdateUserRequest updateUserRequest){
        String updatedUserId = userService.updateUser(updateUserRequest);

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.userUpdated")
                        .params(updatedUserId)
                        .build();

        return ResponseEntity.ok(new SuccessResult(message));
    }
}
