package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	public List<User> getAll() {
		return userRepo.findAll();
	}
	
	public User addUser(User u) {
		return userRepo.save(u);
	}
	
	public User updatePic(long id, byte[] pic) {
		User u = userRepo.findById(id).get();
		u.setProfilePic(pic);
		return userRepo.save(u);
	}
	
	public void deleteUser(long id) {
		userRepo.deleteById(id);
	}

	public User searchByEmail(String email) {
		return userRepo.findByEmail(email);
	}
}
