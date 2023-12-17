package com.kerimsenturk.labreport.exception.NotFound;

public class ReportNotFoundException extends RuntimeException{
    public ReportNotFoundException(){

    }
    public ReportNotFoundException(String message){
        super(message);
    }
}
