package com.example.demo.control;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
public class UserControl {

	@Autowired
	private UserService us;

	@GetMapping("/all")
	public List<User> all(){
		return us.all();
	}
	
	@PostMapping("/add")
	public User addUser(@RequestBody User user) {
		return us.add(user);
	}
	
	@GetMapping("/findById/{id}")
	public User findById(@PathVariable long id) {
		return us.findById(id);
	}
	
	
	@PutMapping("/addImg/{id}")
	public User addImgs(@RequestParam("qr") MultipartFile qr, @RequestParam("profilePic") MultipartFile profilePic,@PathVariable long id) {
		User u = us.findById(id);
		try {
			u.setQr(qr.getBytes());
			u.setProfilePic(profilePic.getBytes());
			return us.add(u);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
}
