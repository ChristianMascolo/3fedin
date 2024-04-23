package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Hotel;
import com.example.demo.repository.HotelRepository;

@Service
public class HotelService {

	@Autowired
	private HotelRepository hr;
	
	public Hotel add(Hotel h) {
		return hr.save(h);
	}
	
	public Hotel findByName(String name) {
		return hr.findByName(name);
	}
}
