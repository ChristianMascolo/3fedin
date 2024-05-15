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
	
	public User findByUsername(String username) {
		return ur.findByUsername(username);
	}
	
	public User addUser(User u) {
		return ur.save(u);
	}
	
	public void removeUser(long id) {
		ur.deleteById(id);
	}

	public List<User> all() {
		return ur.findAll();
	}
}
