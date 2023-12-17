package com.kerimsenturk.labreport.exception.NotFound;


public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(){

    }
    public UserNotFoundException(String message){
        super(message);
    }
}
