package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.GiftDetails;

public interface GiftDetailsRepository extends JpaRepository<GiftDetails, Long> {
    // Define custom query methods if needed
}
