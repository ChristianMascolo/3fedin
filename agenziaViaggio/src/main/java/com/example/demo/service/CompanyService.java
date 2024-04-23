package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Company;
import com.example.demo.repository.CompanyRepository;

@Service
public class CompanyService {
	
	@Autowired
	private CompanyRepository cr;
	
	public Company add(Company c) {
		return cr.save(c);
	}

	public List<Company> all(){
		return cr.findAll();
	}

	public Company findByName(String name) {
		return cr.findByName(name);
	}
}
