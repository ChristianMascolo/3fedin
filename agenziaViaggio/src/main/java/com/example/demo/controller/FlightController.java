package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Flight;
import com.example.demo.service.FlightService;

@RestController
@CrossOrigin
@RequestMapping("/api/flight")
public class FlightController {
	@Autowired
	private FlightService fs;
	
	@PostMapping("/add")
	public Flight add(@RequestBody Flight f) {
		return fs.add(f);
	}
}
