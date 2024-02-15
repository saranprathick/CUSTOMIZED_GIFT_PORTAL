package com.example.backend.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.entity.Order;
import com.example.backend.service.OrderService;
@RestController
@RequestMapping("/orders")
// @CrossOrigin(origins = "`*`")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {
    @Autowired
    private OrderService orderService;
    
    @GetMapping("/{username}")
    public ResponseEntity<Order> getOrderByUsername(@PathVariable String username) {
        Order order = orderService.findByUsername(username);
        if (order != null) {
            return new ResponseEntity<>(order, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
    
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.save(order);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    @PutMapping("/{username}")
    public ResponseEntity<Order> updateOrderByUsername(@PathVariable String username, @RequestBody Order updatedOrder) {
        ResponseEntity<Order> response = orderService.updateByUsername(username, updatedOrder);
        return response;
    }
    
    @DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteOrderByUsername(@PathVariable String username) {
        orderService.deleteByUsername(username);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

