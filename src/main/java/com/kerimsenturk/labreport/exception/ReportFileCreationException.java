package com.kerimsenturk.labreport.exception;


public class ReportFileCreationException extends RuntimeException {
    public ReportFileCreationException(){

    }
    public ReportFileCreationException(String message){
        super(message);
    }
}
