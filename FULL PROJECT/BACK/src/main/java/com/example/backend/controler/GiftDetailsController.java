package com.example.backend.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.entity.GiftDetails;
import com.example.backend.service.GiftDetailsService;

@RestController
@RequestMapping("/gifts")
public class GiftDetailsController {
    @Autowired
    private GiftDetailsService giftDetailsService;
    
    @GetMapping("/{id}")
    public ResponseEntity<GiftDetails> getGiftById(@PathVariable Long id) {
        GiftDetails gift = giftDetailsService.findById(id);
        if (gift != null) {
            return new ResponseEntity<>(gift, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<GiftDetails>> getAllGifts() {
        List<GiftDetails> gifts = giftDetailsService.getAllGifts();
        return new ResponseEntity<>(gifts, HttpStatus.OK);
    }
    
    @PostMapping
    public ResponseEntity<GiftDetails> createGift(@RequestBody GiftDetails gift) {
        GiftDetails savedGift = giftDetailsService.save(gift);
        return new ResponseEntity<>(savedGift, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GiftDetails> updateGift(@PathVariable Long id, @RequestBody GiftDetails updatedGift) {
        ResponseEntity<GiftDetails> response = giftDetailsService.update(id, updatedGift);
        return response;
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGift(@PathVariable Long id) {
        giftDetailsService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

