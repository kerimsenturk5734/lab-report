package com.kerimsenturk.labreport.auth;

import com.kerimsenturk.labreport.exception.NotFound.ClaimNotFoundException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.token.DefaultToken;
import org.springframework.security.core.token.Token;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Service
public class JwtTokenManager {

    /** TODO: This class throwing many exceptions about claim, signature ... handle them**/
    private final int VALIDITY = 5*60*100000;
    private final String ISSUER = "com.kerimsenturk.labreport";
    private final Key KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    public Token generate(String username){
        Map<String, Object> claims = new HashMap<>();

        String tokenKey = Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuer(ISSUER)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+VALIDITY))
                .signWith(KEY)
                .compact();

        return new DefaultToken(tokenKey, new Date().getTime(),"Bearer Jwt Token");
    }

    public boolean validate(String token, UserDetails userDetails){
        return userDetails != null && !isExpired(token);
    }

    private boolean isExpired(String token){
        Claims claims = extractClaims(token);
        return claims.getExpiration().before(new Date(System.currentTimeMillis()));
    }

    public String extractUser(String token){
        Claims claims = extractClaims(token);

        assert claims != null;
        return claims.getSubject();
    }


    private Claims extractClaims(String token) {
        try{
            Claims claims = Jwts
                    .parserBuilder()
                    .setSigningKey(KEY)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            if(claims.isEmpty())
                throw new ClaimNotFoundException(Jwts.header(), claims, "Claims Not Found By "+token);

            return claims;
        }
        catch (Exception e){
            /** TODO: Handle SignatureException, signature does not match computed signature**/
            e.printStackTrace();
            return null;
        }
    }


}
