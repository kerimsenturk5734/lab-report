package com.kerimsenturk.labreport.exception;

public class ReportFileWritingException extends RuntimeException{
    public ReportFileWritingException(){

    }
    public ReportFileWritingException(String message){
        super(message);
    }
}
