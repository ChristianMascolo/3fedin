package com.example.demo.control;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/getAll")
	public List<User> getall() {
		return userService.getAll();
	}

	@PostMapping("/addUser")
	public User addUser(@RequestBody User u) {
		return userService.addUser(u);
	}

	@DeleteMapping("/deleteUser/{id}")
	public void deleteUser(@PathVariable long id) {
		userService.deleteUser(id);
	}

	@PatchMapping("/updateProfilePic/{id}")
	public User updateProfilePic(@PathVariable long id, @RequestParam("pic") MultipartFile pic) {
		try {
			return userService.updatePic(id, pic.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			return userService.updatePic(id, null);
		}
	}

	@GetMapping("/searchByEmail/{email}")
	public User searchByEmail(@PathVariable String email) {
		return userService.searchByEmail(email);
	}
}
