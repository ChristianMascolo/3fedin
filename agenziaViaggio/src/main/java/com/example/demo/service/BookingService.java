package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Booking;
import com.example.demo.repository.BookingRepository;

@Service
public class BookingService {

	@Autowired
	private BookingRepository br;
	
	public Booking add(Booking b) {
		return br.save(b);
	}
	
	public void remove(long id) {
		br.deleteById(id);
	}
}
