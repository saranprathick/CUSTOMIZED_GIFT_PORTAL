package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.backend.entity.GiftDetails;
import com.example.backend.repository.GiftDetailsRepository;

@Service
public class GiftDetailsService {
    @Autowired
    private GiftDetailsRepository giftDetailsRepository;
    
    public GiftDetails save(GiftDetails gift) {
        return giftDetailsRepository.save(gift);
    }
    
    public void deleteById(Long id) {
        giftDetailsRepository.deleteById(id);
    }
    
    public GiftDetails findById(Long id) {
        return giftDetailsRepository.findById(id).orElse(null);
    }

    public List<GiftDetails> getAllGifts() {
        return giftDetailsRepository.findAll();
    }
    
    public ResponseEntity<GiftDetails> update(Long id, GiftDetails updatedGift) {
        GiftDetails gift = giftDetailsRepository.findById(id).orElse(null);
        if (gift != null) {
            // Update the fields of the existing gift
            gift.setGiftName(updatedGift.getGiftName());
            gift.setGiftTheme(updatedGift.getGiftTheme());
            gift.setPrice(updatedGift.getPrice());
            
            // Save the updated gift
            GiftDetails savedGift = giftDetailsRepository.save(gift);
            return new ResponseEntity<>(savedGift, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    // Other CRUD operations as needed
}
