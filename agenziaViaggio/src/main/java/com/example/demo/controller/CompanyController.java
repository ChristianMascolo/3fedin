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

import com.example.demo.model.Company;
import com.example.demo.service.CompanyService;

@RestController
@CrossOrigin
@RequestMapping("/api/company")
public class CompanyController {
	@Autowired
	private CompanyService cs;
	
	@PostMapping("/add")
	public Company add(@RequestBody Company c) {
		return cs.add(c);
	}
	
	@GetMapping("/all")
	public List<Company> all(){
		return cs.all();
	}
	
	@GetMapping("/findByName/{name}")
	public Company findByName(@PathVariable String name) {
		return cs.findByName(name);
	}
}
