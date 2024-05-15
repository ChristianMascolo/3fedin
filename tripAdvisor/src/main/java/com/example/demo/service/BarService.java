package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Bar;
import com.example.demo.repository.BarRepository;

@Service
public class BarService {

	@Autowired
	private BarRepository barRepo;

	public List<Bar> getAll() {
		return barRepo.findAll();
	}

	public Bar addBar(Bar b) {
		return barRepo.save(b);
	}

	public void removeBar(long idB) {
		barRepo.deleteById(idB);
	}
}
