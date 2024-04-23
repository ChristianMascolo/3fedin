package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Console;
import com.example.demo.repository.ConsoleRepository;

@Service
public class ConsoleService {

	@Autowired
	private ConsoleRepository cr;
	
	public Console addConsole(Console c) {
		return cr.save(c);
	}
	
	public void removeConsole(long id) {
		cr.deleteById(id);
	}

	public List<Console> getAll() {
		return cr.findAll();
	}
}
