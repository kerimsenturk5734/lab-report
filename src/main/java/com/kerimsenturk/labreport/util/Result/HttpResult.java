package com.kerimsenturk.labreport.util.Result;

import org.springframework.http.HttpStatus;

public class HttpResult extends Result{
    private HttpStatus status;

    public HttpResult(boolean success, HttpStatus status) {
        super(success);
        this.status = status;
    }

    public HttpResult(boolean success, String message, HttpStatus status) {
        super(success, message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public static HttpResult notFoundResult(String message){
        return new HttpResult(
                false,
                message,
                HttpStatus.NOT_FOUND);
    }
}
