package com.kerimsenturk.labreport.auth;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


@Component
public class JwtTokenFilter extends OncePerRequestFilter {

    private final JwtTokenManager tokenManager;
    private final UserDetailsServiceCustom userDetailsServiceCustom;
    Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);
    public JwtTokenFilter(JwtTokenManager tokenManager, UserDetailsServiceCustom userDetailsServiceCustom) {
        this.tokenManager = tokenManager;
        this.userDetailsServiceCustom = userDetailsServiceCustom;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        //Get authorization header
        final String autHeader = request.getHeader("Authorization");
        String username = null;
        String token = null;

        //Authorization Header Format --> 'Bearer 3kj39fof94jmd93kle9kd020'
        //Check is present and starts with 'Bearer'
        if(autHeader != null && autHeader.startsWith("Bearer ")){

            //Then parse the token from auth header
            //Token starts at the 7th index in an auth header indicated format
            token = autHeader.substring(7);

            //Extract username from token by using tokenManager
            username = tokenManager.extractUser(token);

        }

        //Check that username and token is present
        //Check the current context has not any authentication
        if(username != null & token != null & SecurityContextHolder.getContext().getAuthentication() == null){

            //Get the userDetails of token owner
           try{
               UserDetails userDetails = userDetailsServiceCustom.loadUserByUsername(username);

               //Validate the token with related userDetails
               if(tokenManager.validate(token)){

                   UsernamePasswordAuthenticationToken usPassAuthToken =
                           new UsernamePasswordAuthenticationToken(username,null, userDetails.getAuthorities());

                   usPassAuthToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                   SecurityContextHolder.getContext().setAuthentication(usPassAuthToken);
               }
           }
           catch (Exception e){
               logger.error(e.getMessage());
           }
        }

        HttpServletResponse res = (HttpServletResponse) response;

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        res.setHeader("Access-Control-Max-Age", "3600");
        res.setHeader("Access-Control-Allow-Headers", "Authorization, Authentication, Content-Type, Accept, x-requested-with, Cache-Control, 'Content-Disposition'");

        filterChain.doFilter(request, response);
    }
}
