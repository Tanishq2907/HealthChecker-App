package com.healthcare.service;

import com.healthcare.model.User;
import io.jsonwebtoken.Claims;

public interface JwtService {
    String generateToken(User user);
    boolean validateToken(String token);
    Claims extractClaims(String token);
}
