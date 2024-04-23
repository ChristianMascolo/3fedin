package com.example.demo.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	
	@GetMapping("/findByUsername/{username}")
	public User findByUsername(@PathVariable String username) {
		return us.findByUsername(username);
	}
	
	@GetMapping("/all")
	public List<User> getAll(){
		return us.all();
	}
	
	@PostMapping("/addUser")
	public User addUser(@RequestBody User u) {
		return us.addUser(u);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable long id) {
		us.removeUser(id);
	}
	
}
