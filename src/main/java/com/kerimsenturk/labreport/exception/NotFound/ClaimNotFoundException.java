package com.kerimsenturk.labreport.exception.NotFound;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;

public class ClaimNotFoundException extends RuntimeException{
    public ClaimNotFoundException(Header header, Claims claims, String s) {
        //Create an exception message and throw
        super(header.toString() + claims.toString() + s);
    }
}
