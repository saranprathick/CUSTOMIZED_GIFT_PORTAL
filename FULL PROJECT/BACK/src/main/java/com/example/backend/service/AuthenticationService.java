package com.example.backend.service;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.request.AuthenticationRequest;
import com.example.backend.dto.request.RegisterRequest;
import com.example.backend.dto.response.AuthenticationResponse;
import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        if (userRepository.existsByName(request.getName())) {
            throw new IllegalArgumentException("Name already exists");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new IllegalArgumentException("Phone number already exists");
        }
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new IllegalArgumentException("Passwords do not match");
        }

        Role role = request.getRole();

        var user = User
                .builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .confirmPassword(request.getConfirmPassword())
                .phoneNumber(request.getPhoneNumber())
                .role(role)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);

        String message = (role == Role.ADMIN) ? "Admin registered successfully" : "User registered successfully";
        String roll = (role == Role.ADMIN) ? "ADMIN" : "USER";
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message(message)
                .roll(roll)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        Role role = request.getRole();

        var user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        var jwtToken = jwtService.generateToken(user);

        String message = (role == Role.ADMIN) ? "Admin logged in successfully" : "User logged in successfully";
        String roll = (role == Role.ADMIN) ? "ADMIN" : "USER";
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message(message)
                .roll(roll)
                .build();
    }
}
