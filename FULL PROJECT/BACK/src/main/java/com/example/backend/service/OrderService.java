package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.backend.entity.Order;
import com.example.backend.repository.OrderRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    
    public Order save(Order order) {
        return orderRepository.save(order);
    }
    
    public void deleteByUsername(String username) {
        Order order = orderRepository.findByUsername(username);
        if (order != null) {
            orderRepository.delete(order);
        }
    }
    
    public Order findByUsername(String username) {
        return orderRepository.findByUsername(username);
    }
    
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
    
    public ResponseEntity<Order> updateByUsername(String username, Order updatedOrder) {
        Order order = orderRepository.findByUsername(username);
        if (order != null) {
            // Update the fields of the existing order
            order.setUsername(updatedOrder.getUsername());
            order.setEmail(updatedOrder.getEmail());
            order.setAddress(updatedOrder.getAddress());
            order.setPhoneNumber(updatedOrder.getPhoneNumber());
            order.setGiftName(updatedOrder.getGiftName());
            order.setPrice(updatedOrder.getPrice());
            
            // Save the updated order
            Order savedOrder = orderRepository.save(order);
            return new ResponseEntity<>(savedOrder, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

