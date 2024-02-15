// package com.example.backend.service;

// import java.util.List;

// // import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.backend.model.Register;
// import com.example.backend.repository.*;

// @Service
// public class RegisterService {

//         private final RegisterRepo RegisterRepo;
    
//         // @Autowired
//         public RegisterService(RegisterRepo RegisterRepo) {
//             this.RegisterRepo = RegisterRepo;
//         }
    
//         public List<Register> getAllUsers() {
//             return RegisterRepo.findAll();
//         }
    
//         public Register getUserById(Long id) {
//             return RegisterRepo.findById(id).orElse(null);
//         }
    
//         public Register createUser(Register user) {
//             return RegisterRepo.save(user);
//         }
    
//         public Register updateUser(Long id, Register user) {
//             Register existingUser = RegisterRepo.findById(id).orElse(null);
//             if (existingUser != null) {
//                 existingUser.setName(user.getName());
//                 // existingUser.setCompany(user.getCompany());
//                 existingUser.setEmail(user.getEmail());
//                 existingUser.setPassword(user.getPassword());
//                 existingUser.setConfirmPassword(user.getConfirmPassword());
//                 existingUser.setPhoneNumber(user.getPhoneNumber());
//                 existingUser.setRole(user.getRole());
        
//                 return RegisterRepo.save(existingUser);
//             }
//             return null;
//         }
    
//         // @SuppressWarnings("null")
//         public void deleteUser(Long id) {
//             RegisterRepo.deleteById(id);
//         }
        
//     }