package com.kerimsenturk.labreport.auth;

import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.service.UserService;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsServiceCustom implements UserDetailsService {
    private final UserService userService;

    public UserDetailsServiceCustom(@Lazy UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        User user = userService.getRawUserById(userId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found by:"+userId));

        return new org.springframework.security.core.userdetails.User(
                userId, user.getPassword(), List.of(user.getRole()));
    }


}
