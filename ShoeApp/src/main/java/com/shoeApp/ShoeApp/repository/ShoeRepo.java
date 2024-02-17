package com.shoeApp.ShoeApp.repository;

import com.shoeApp.ShoeApp.model.Shoe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShoeRepo extends JpaRepository<Shoe, Long> {
    Optional<Shoe> findShoeById(Long id);
}
