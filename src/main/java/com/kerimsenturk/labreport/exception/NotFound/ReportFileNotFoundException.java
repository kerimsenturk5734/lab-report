package com.kerimsenturk.labreport.exception.NotFound;

public class ReportFileNotFoundException extends RuntimeException{
    public ReportFileNotFoundException(){

    }
    public ReportFileNotFoundException(String message){
        super(message);
    }
}
