package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository ur;
	
	public User add(User u) {
		return ur.save(u);
	}
	
	public User findByEmail(String email) {
		return ur.findByEmail(email);
	}
}
