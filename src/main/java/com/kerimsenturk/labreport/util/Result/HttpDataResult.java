package com.kerimsenturk.labreport.util.Result;

import org.springframework.http.HttpStatus;

public class HttpDataResult<T> extends DataResult<T>{
    private HttpStatus status;

    public HttpDataResult(T data, boolean success, String message, HttpStatus status) {
        super(data, success, message);
        this.status = status;
    }

    public HttpDataResult(T data, boolean success, HttpStatus status) {
        super(data, success);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public static <T> HttpDataResult<T> notFoundResult(String message){
        return new HttpDataResult<T>(
                null,
                false,
                message,
                HttpStatus.NOT_FOUND);
    }

    public static <T> HttpDataResult<T> notFoundResult(T data, String message){
        return new HttpDataResult<T>(
                data,
                false,
                message,
                HttpStatus.NOT_FOUND);
    }
}
