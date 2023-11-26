package com.kerimsenturk.labreport.dto.converter;

import com.kerimsenturk.labreport.dto.UserDto;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.util.ObjectConverter.Convertable;
import org.springframework.stereotype.Component;

@Component
public class UserAndUserDtoConverter implements Convertable<User, UserDto> {

    @Override
    public UserDto convert(User user) {
        if(user == null)
            return new UserDto();

        return new UserDto(
                user.getUserId(),
                user.getName(),
                user.getSurname(),
                user.getRole());
    }

    @Override
    public User deConvert(UserDto userDto) {
        if(userDto == null)
            return new User();

        return new User(
                userDto.getUserId(),
                userDto.getName(),
                userDto.getSurname(),
                "",
                userDto.getRole());
    }
}
