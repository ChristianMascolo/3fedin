package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Property;
import com.example.demo.service.PropertyService;

@RestController
@CrossOrigin
@RequestMapping("/api/property")
public class PropertyController {
	@Autowired
	private PropertyService ps;
	
	@PostMapping("/add")
	public Property add(@RequestBody Property p) {
		return ps.add(p);
	}
	
	@GetMapping("/all")
	public List<Property> all(){
		return ps.all();
	}
	
	@GetMapping("/getOne/{id}")
	public Property getOne(@PathVariable long id) {
		return ps.findOne(id);
	}
	
	@PutMapping("/update/{id}")
	public Property update(@PathVariable long id, @RequestBody Property p) {
		return ps.update(id,p);
	}
}
