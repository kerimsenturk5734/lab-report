package com.kerimsenturk.labreport.config;

import com.kerimsenturk.labreport.auth.JwtTokenFilter;
import com.kerimsenturk.labreport.auth.UserDetailsServiceCustom;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.concurrent.atomic.AtomicBoolean;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class WebSecurityConfig {
    private final JwtTokenFilter jwtTokenFilter;
    private final UserDetailsServiceCustom userDetailsServiceCustom;
    private final PasswordEncoder passwordEncoder;

    public WebSecurityConfig(JwtTokenFilter jwtTokenFilter,
                             UserDetailsServiceCustom userDetailsServiceCustom,
                             PasswordEncoder passwordEncoder) {

        this.jwtTokenFilter = jwtTokenFilter;
        this.userDetailsServiceCustom = userDetailsServiceCustom;
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    public DaoAuthenticationProvider authProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsServiceCustom);
        authProvider.setPasswordEncoder(passwordEncoder);
        return authProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        AtomicBoolean isAccessDenied = new AtomicBoolean(false);
        return httpSecurity
                //Disable CSRF, Login Form
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .formLogin(AbstractHttpConfigurer::disable)

                //Authorize the requests coming to endpoints at the matchers pattern
                .authorizeHttpRequests(x -> x

                        //Allow every user to want to access login and register endpoints
                        .requestMatchers("**/users/login","**/users/registerPatient").permitAll()

                        //Allow swagger docs
                        .requestMatchers("**/api-docs/**", "**/swagger-ui/**").permitAll()

                        //Authenticate the all other requests coming to API except the endpoints indicated above
                        .requestMatchers("/v1/api/**").authenticated())

                .sessionManagement(x -> x.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authProvider())
                .addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling(e -> e
                        .authenticationEntryPoint((request, response, authException) -> {
                            if(isAccessDenied.get()){
                                isAccessDenied.set(false);
                                response.sendError(HttpServletResponse.SC_FORBIDDEN, "Forbidden");
                            }
                            else
                                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
                        })
                        .accessDeniedHandler((request, response, accessDeniedException) -> {
                            // AccessDeniedException durumunda sadece 403 dön
                            isAccessDenied.set(true);
                            System.out.println("AccessDeniedException:" + accessDeniedException.getMessage());
                            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Forbidden");
                        })
                )
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }


}
