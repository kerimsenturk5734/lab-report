package com.kerimsenturk.labreport.exception.AlreadyExist;

public class ReportAlreadyExistForException extends RuntimeException{
    public ReportAlreadyExistForException(){

    }

    public ReportAlreadyExistForException(String message){
        super(message);
    }
}
