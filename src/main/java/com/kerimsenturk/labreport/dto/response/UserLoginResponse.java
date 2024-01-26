package com.kerimsenturk.labreport.dto.response;


import com.kerimsenturk.labreport.dto.UserDto;
import org.springframework.security.core.token.Token;

public record UserLoginResponse(Token token, UserDto user) {
}
