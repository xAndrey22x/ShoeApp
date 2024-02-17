package com.shoeApp.ShoeApp;

import com.shoeApp.ShoeApp.model.OrderShoe;
import com.shoeApp.ShoeApp.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderResource {

    private final OrderService orderService;

    public OrderResource(OrderService orderService){
        this.orderService = orderService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderShoe>> getAllOrders(){
        List<OrderShoe> orderShoes = this.orderService.findAllOrders();
        return new ResponseEntity<>(orderShoes, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<OrderShoe> addOrder(@RequestBody OrderShoe orderShoe){
        OrderShoe orderShoe1 = this.orderService.addOrder(orderShoe);
        return new ResponseEntity<>(orderShoe1, HttpStatus.OK);
    }

    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable("id") Long id){
        this.orderService.deleteOrderById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
