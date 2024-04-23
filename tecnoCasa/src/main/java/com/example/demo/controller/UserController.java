package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
	@Autowired
	private UserService us;
	
	@PostMapping("/add")
	public User add(@RequestBody User u) {
		return us.save(u);
	}
	
	@GetMapping("/checkLogin/{email}/{pwd}")
	public User checkLogin(@PathVariable String email, @PathVariable String pwd) {
		return us.checkLogin(email,pwd);
	}
}
