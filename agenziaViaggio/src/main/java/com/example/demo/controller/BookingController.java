package com.example.demo.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Booking;
import com.example.demo.model.BookingFlight;
import com.example.demo.model.BookingHotel;
import com.example.demo.service.BookingFlightService;
import com.example.demo.service.BookingHotelService;
import com.example.demo.service.BookingService;

@RestController
@CrossOrigin
@RequestMapping("/api/booking")
public class BookingController {
	@Autowired
	private BookingService bs;
	
	@Autowired
	private BookingFlightService bfs;
	
	@Autowired
	private BookingHotelService bhs;
	
	
	/*SEZIONE POST REQUEST*/
	@PostMapping("/addBooking")
	public Booking add(@RequestBody Booking b) {
		return bs.add(b);
	}
	
	@PostMapping("/addBookingHotel/{start}/{finish}/{idB}/{idH}")
	public BookingHotel addBookingHotel(@PathVariable Date start,@PathVariable Date finish,@PathVariable long idB,@PathVariable long idH) {
		return bhs.add(start, finish, idB, idH);
	}
	
	@PostMapping("/addBookingFlight/{price}/{idB}/{idF}")
	public BookingFlight addBookingFlight(@PathVariable double price,@PathVariable long idB, @PathVariable long idF) {
		return bfs.add(price, idB, idF);
	}
	
	
	/*SEZIONE GET REQUEST*/
	@GetMapping("/allBookingHotelByBooking/{id}")
	public List<BookingHotel> bhByBooking(@PathVariable long id){
		return bhs.getByBooking(id);
	}
	
	@GetMapping("/allBookingHotelByHotel/{id}")
	public List<BookingHotel> bhByHotel(@PathVariable long id){
		return bhs.getByHotel(id);
	}
	
	@GetMapping("/allBookingFlightByBooking/{id}")
	public List<BookingFlight> bfByBooking(@PathVariable long id){
		return bfs.getByBooking(id);
	}
	
	@GetMapping("/allBookingFlightByFlight/{id}")
	public List<BookingFlight> bfByFlight(@PathVariable long id){
		return bfs.getByFlight(id);
	}
}
