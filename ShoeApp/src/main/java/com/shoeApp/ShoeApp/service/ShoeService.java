package com.shoeApp.ShoeApp.service;

import com.shoeApp.ShoeApp.exception.ShoeNotFoundException;
import com.shoeApp.ShoeApp.model.Shoe;
import com.shoeApp.ShoeApp.repository.ShoeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ShoeService {

    private final ShoeRepo shoeRepo;

    @Autowired
    public ShoeService(ShoeRepo shoeRepo) {
        this.shoeRepo = shoeRepo;
    }

    public Shoe addShoe(Shoe shoe){
        shoe.setShoeCode(UUID.randomUUID().toString());
        return shoeRepo.save(shoe);
    }

    public List<Shoe> findAllShoes(){
        return shoeRepo.findAll();
    }

    public Shoe updateShoe(Shoe shoe){
        return shoeRepo.save(shoe);
    }

    public Shoe findShoeById(Long id){
        return shoeRepo.findShoeById(id)
                .orElseThrow(() -> new ShoeNotFoundException("Shoe by id " + id + " was not found"));
    }

    public void deleteShoe(Long id){
        shoeRepo.deleteById(id);
    }

    public Shoe updateQuantity(Long id, int newQuantity){
        Shoe shoe = findShoeById(id);
        shoe.setQuantity(newQuantity);
        return updateShoe(shoe);
    }

}
