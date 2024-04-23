package com.example.demo.service;

import java.util.List;

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

	public User findById(long id) {
		return ur.findById(id).get();
	}

	public List<User> all() {
		return ur.findAll();
	}
}
