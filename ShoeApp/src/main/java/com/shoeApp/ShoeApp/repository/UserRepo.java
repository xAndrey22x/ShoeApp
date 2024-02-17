package com.shoeApp.ShoeApp.repository;

import com.shoeApp.ShoeApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
