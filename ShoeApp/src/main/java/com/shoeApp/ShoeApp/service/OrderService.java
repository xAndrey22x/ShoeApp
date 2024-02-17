package com.shoeApp.ShoeApp.service;

import com.shoeApp.ShoeApp.model.OrderShoe;
import com.shoeApp.ShoeApp.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepo orderRepo;

    @Autowired
    public OrderService(OrderRepo orderRepo){
        this.orderRepo = orderRepo;
    }

    public List<OrderShoe> findAllOrders(){
        return this.orderRepo.findAll();
    }

    public OrderShoe addOrder(OrderShoe orderShoe){
        return this.orderRepo.save(orderShoe);
    }

    public void deleteOrderById(Long id){
        this.orderRepo.deleteById(id);
    }

}
