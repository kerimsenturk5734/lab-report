package com.kerimsenturk.labreport.exception.NotFound;

public class DiseaseNotFoundException extends RuntimeException{
    public DiseaseNotFoundException(){

    }

    public DiseaseNotFoundException(String message){
        super(message);
    }
}
