package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Hotel;
import com.example.demo.service.HotelService;

@RestController
@CrossOrigin
@RequestMapping("/api/hotel")
public class HotelController {
	@Autowired
	private HotelService hs;
	
	@PostMapping("/add")
	public Hotel add(@RequestBody Hotel h) {
		return hs.add(h);
	}
	
	@GetMapping("/findByName/{name}")
	public Hotel findByName(@PathVariable String name) {
		return hs.findByName(name);
	}
}
