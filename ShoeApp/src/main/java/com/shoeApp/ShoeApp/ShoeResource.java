package com.shoeApp.ShoeApp;

import com.shoeApp.ShoeApp.model.Shoe;
import com.shoeApp.ShoeApp.service.ShoeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/shoe")
public class ShoeResource {
    private final ShoeService shoeService;

    public ShoeResource(ShoeService shoeService) {
        this.shoeService = shoeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Shoe>> getAllShoes() {
        List<Shoe> shoes = shoeService.findAllShoes();
        return new ResponseEntity<>(shoes, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Shoe> getShoeById(@PathVariable("id") Long id) {
        Shoe shoe = shoeService.findShoeById(id);
        return new ResponseEntity<>(shoe, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Shoe> addShoe(@RequestBody Shoe shoe) {
        Shoe shoe1 = shoeService.addShoe(shoe);
        return new ResponseEntity<>(shoe1, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Shoe> updateShoe(@RequestBody Shoe shoe) {
        Shoe shoe1 = shoeService.updateShoe(shoe);
        return new ResponseEntity<>(shoe1, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteShoe(@PathVariable("id") Long id) {
        shoeService.deleteShoe(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/updateQuantity/{id}")
    public ResponseEntity<Shoe> updateQuantity(@PathVariable("id") Long id, @RequestBody Map<String, Integer> requestBody){
        int newQuantity = requestBody.get("newQuantity");
        Shoe shoe1 = shoeService.updateQuantity(id, newQuantity);
        return new ResponseEntity<>(shoe1, HttpStatus.OK);
    }
}
