// package com.example.backend.model;

// // import java.util.List;
// // import jakarta.annotation.Nonnull;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// // import jakarta.persistence.OneToMany;
// // import jakarta.persistence.OneToOne;



// @Entity
// public class Register {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String name;
//     // private String company;
//     private String email;
//     private String password;
//     private String confirmPassword;
//     private String phoneNumber;
//     private String role;


//     public Register() {
//     }

//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     // public String getCompany() {
//     //     return company;
//     // }

//     // public void setCompany(String company) {
//     //     this.company = company;
//     // }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public String getConfirmPassword() {
//         return confirmPassword;
//     }

//     public void setConfirmPassword(String confirmPassword) {
//         this.confirmPassword = confirmPassword;
//     }

//     public String getPhoneNumber() {
//         return phoneNumber;
//     }

//     public void setPhoneNumber(String phoneNumber) {
//         this.phoneNumber = phoneNumber;
//     }

//     public String getRole() {
//         return role;
//     }

//     public void setRole(String role) {
//         this.role = role;
//     }

//     @Override
//     public String toString() {
//         return "Register [id=" + id + ", name=" + name + ", email=" + email + ", password="
//                 + password + ", confirmPassword=" + confirmPassword + ", phoneNumber=" + phoneNumber + ", role=" + role
//                 + "]";
//     }

//     public Register(Long id, String name, String email, String password, String confirmPassword,
//     String phoneNumber, String role) {
// this.id = id;
// this.name = name;
// this.email = email;
// this.password = password;
// this.confirmPassword = confirmPassword;
// this.phoneNumber = phoneNumber;
// this.role = role;
// }

// }