package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository ur;

	public User save(User u) {
		if(ur.findByEmail(u.getEmail()) != null) {
			return null;
		}
		return ur.save(u);
	}

	public User checkLogin(String email, String pwd) {
		User u = ur.findByEmail(email);
		if(u != null) {
			if(u.getPassword().equals(pwd)) {
				return u;
			}
		}
		return null;
	}
}
