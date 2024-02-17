package com.shoeApp.ShoeApp.service;

import com.shoeApp.ShoeApp.model.User;
import com.shoeApp.ShoeApp.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User getUser() {
        return userRepo.findById(1L).orElse(null);
    }

}
