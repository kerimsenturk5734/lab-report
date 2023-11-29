package com.kerimsenturk.labreport.exception;

public class DiseaseNotFoundException extends RuntimeException{
    public DiseaseNotFoundException(){

    }

    public DiseaseNotFoundException(String message){
        super(message);
    }
}
