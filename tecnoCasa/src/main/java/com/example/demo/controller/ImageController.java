package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Image;
import com.example.demo.service.ImageService;

@RestController
@CrossOrigin
@RequestMapping("/api/image")
public class ImageController {

	@Autowired
	private ImageService is;
	
	@PostMapping("/add")
	public List<Image> add(@RequestBody List<Image> i) {
		return is.add(i);
	}

	@GetMapping("/getByProperty/{id}")
	public List<Image> getByProperty(@PathVariable long id){
		return is.byProperty(id);
	}
}
