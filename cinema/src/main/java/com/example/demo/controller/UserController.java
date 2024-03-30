package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/add")
	public User add(@RequestBody User u) {
		return userService.add(u);
	}

	@GetMapping("/all")
	public List<User> all() {
		return userService.all();
	}
	
	@PutMapping("/put/{id}")
	public User put(@RequestBody User u,@PathVariable long id) {
		return userService.put(u,id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable long id) {
		userService.delete(id);
	}
	
	@GetMapping("/searchUser/{name}/{email}")
	public User findByNameAndEmail(@PathVariable String name,@PathVariable String email) {
		return userService.findByNameAndEmail(name,email);
	}
}