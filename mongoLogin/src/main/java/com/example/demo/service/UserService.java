package com.example.demo.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserModel;
import com.example.demo.repository.UserRepository;

@Service
public class UserService{
	
	@Autowired
	private UserRepository userRepo;

	public void add(UserModel um) {
		userRepo.save(um);
	}

	public List<UserModel> all() {
		return userRepo.findAll();
	}

	public void delete(String id) {
		userRepo.deleteById(id);
	}

	public UserModel info(String id) {
		return userRepo.findById(id).get();
	}
}