package com.example.demo.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/addU")
	public void add(@RequestBody UserModel um) {
		userService.add(um);
	}
	
	@GetMapping("/allU")
	public List<UserModel> all(){
		return userService.all();
	}
	
	@GetMapping("/infoU")
	public UserModel info(@RequestParam String id) {
		return userService.info(id);
	}
	
	@DeleteMapping("/deleteU")
	public void delete(@RequestParam String id) {
		userService.delete(id);
	}
	
	
}
