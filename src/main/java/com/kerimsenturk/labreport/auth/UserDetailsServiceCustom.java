package com.kerimsenturk.labreport.auth;

import com.kerimsenturk.labreport.dto.converter.UserAndUserDtoConverter;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.service.UserService;

import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDetailsServiceCustom implements UserDetailsService {
    private final UserService userService;
    private final UserAndUserDtoConverter userAndUserDtoConverter;
    public UserDetailsServiceCustom(UserService userService, UserAndUserDtoConverter userAndUserDtoConverter) {
        this.userService = userService;
        this.userAndUserDtoConverter = userAndUserDtoConverter;
    }

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        Optional<User> userOptional = Optional.of(userAndUserDtoConverter.deConvert(userService.getUserById(userId)));

        User user = userOptional.orElseThrow(() -> new UsernameNotFoundException("User not found by:"+"userId"));
        return new org.springframework.security.core.userdetails.User(userId,user.getPassword(), List.of(user.getRole()));

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
