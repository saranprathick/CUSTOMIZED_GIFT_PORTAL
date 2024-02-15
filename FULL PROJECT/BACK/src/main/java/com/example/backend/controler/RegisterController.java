// package com.example.backend.controler;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;


// import com.example.backend.model.Register;
// import com.example.backend.service.RegisterService;

// @RestController
// @RequestMapping("/api/register")
// @CrossOrigin(origins = "http://your-frontend-domain.com")

// public class RegisterController {

//     private final RegisterService registerService;

//     @Autowired
//     public RegisterController(RegisterService registerService) {
//         this.registerService = registerService;
//     }

//     @GetMapping
//     public List<Register> getAllUsers() {
//         return registerService.getAllUsers();
//     }

//     @GetMapping("/{id}")
//     public Register getUserById(@PathVariable long id) {
//         return registerService.getUserById(id);
//     }

//     @PostMapping
//     public Register createUser(@RequestBody Register user) {
//     return registerService.createUser(user);
//     }


//     @PutMapping("/{id}")
//     public Register updateUser(@PathVariable long id, @RequestBody Register user) {
//         return registerService.updateUser(id, user);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteUser(@PathVariable long id) {
//         registerService.deleteUser(id);
//     }
// }