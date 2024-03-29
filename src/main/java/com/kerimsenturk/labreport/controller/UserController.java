package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.UserDto;
import com.kerimsenturk.labreport.dto.request.CreateUserRequest;
import com.kerimsenturk.labreport.dto.request.PatientCreateRequest;
import com.kerimsenturk.labreport.dto.request.UpdateUserRequest;

import com.kerimsenturk.labreport.dto.request.UserLoginRequest;
import com.kerimsenturk.labreport.dto.response.UserLoginResponse;
import com.kerimsenturk.labreport.service.UserService;
import com.kerimsenturk.labreport.util.MessageBuilder;
import com.kerimsenturk.labreport.util.Result.SuccessDataResult;
import com.kerimsenturk.labreport.util.Result.SuccessResult;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;


import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.token.Token;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@SecurityRequirement(name = "Bearer Authentication")
@RestController
@RequestMapping("/v1/api/users")
@Validated
@CrossOrigin
public class UserController {
    private final UserService userService;
    private final MessageBuilder messageBuilder;
    public UserController(UserService userService) {
        this.userService = userService;
        this.messageBuilder = new MessageBuilder();
    }

    @GetMapping("/isTokenValid/{token}")
    public ResponseEntity<Boolean> isTokenValid(@PathVariable String token){
        return ResponseEntity.ok(userService.isTokenValid(token));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody UserLoginRequest userLoginRequest){
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
        return ResponseEntity
                .created(uri)
                .body(new SuccessDataResult<>(userService.login(userLoginRequest), "Login successful"));
    }

    @PreAuthorize("hasAuthority(@ROLES.ADMIN)")
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

    @PreAuthorize("hasAuthority(@ROLES.ADMIN)")
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserByID(@PathVariable String id){

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

    @PreAuthorize("hasAuthority(@ROLES.ADMIN)")
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
    public ResponseEntity<?> updateUser(@Valid @RequestBody UpdateUserRequest updateUserRequest,
                                        @RequestHeader("Authorization") String authHeader){

        String updatedUserId = userService.updateUser(updateUserRequest, authHeader);

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.userUpdated")
                        .params(updatedUserId)
                        .build();

        return ResponseEntity.ok(new SuccessResult(message));
    }
}
