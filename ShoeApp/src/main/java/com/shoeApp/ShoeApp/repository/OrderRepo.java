package com.shoeApp.ShoeApp.repository;

import com.shoeApp.ShoeApp.model.OrderShoe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<OrderShoe, Long> {
}
