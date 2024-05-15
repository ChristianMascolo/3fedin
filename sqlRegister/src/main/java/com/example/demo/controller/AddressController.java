package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Address;
import com.example.demo.service.AddressService;


@CrossOrigin
@RestController
@RequestMapping("/api/address")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@GetMapping("/allA")
	public List<Address> all(){
		return addressService.all();
	}
	
	@PostMapping("/addA")
	public void add(@RequestBody Address a) {
		addressService.add(a);
	}
}
