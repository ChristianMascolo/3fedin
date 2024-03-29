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
	
	public List<User> all(){
		return userRepo.findAll();
	}
	
	public void add(User u) {
		userRepo.save(u);
	}

	public User put(User newU,long id) {
		User oldU = userRepo.findById(id).get();
		
		newU.setId(id);
		newU.setName(oldU.getName());
		newU.setSurname(oldU.getSurname());
		newU.setTickets(oldU.getTickets());
		
		return userRepo.save(newU);
	}

	public void delete(long id) {
		userRepo.deleteById(id);
	}
	
	public User findByName(String name, String email) {
		return userRepo.findByNameAndEmail(name,email);
	}
}
