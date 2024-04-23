package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Flight;
import com.example.demo.repository.FlightRepository;

@Service
public class FlightService {

	@Autowired
	private FlightRepository fr;
	
	public Flight add(Flight f) {
		return fr.save(f);
	}
}
