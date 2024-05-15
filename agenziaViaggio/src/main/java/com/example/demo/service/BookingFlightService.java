package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Booking;
import com.example.demo.model.BookingFlight;
import com.example.demo.model.BookingFlightId;
import com.example.demo.model.Flight;
import com.example.demo.repository.BookingFlightRepository;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.FlightRepository;

@Service
public class BookingFlightService {

	@Autowired
	private BookingFlightRepository bfr;

	@Autowired
	private BookingRepository br;

	@Autowired
	private FlightRepository fr;

	public BookingFlight add(double price, long idB, long idF) {
		BookingFlightId bfi = new BookingFlightId();
		BookingFlight bf = new BookingFlight();
		Booking b = br.findById(idB).get();
		Flight f = fr.findById(idF).get();

		bfi.setBookingId(idB);
		bfi.setFlightId(idF);

		bf.setBooking(b);
		bf.setFlight(f);
		bf.setId(bfi);
		bf.setPrice(price);

		return bfr.save(bf);
	}

	public void remove(BookingFlightId bid,long idB,long idF) {
		br.deleteById(idB);
		fr.deleteById(idF);
		bfr.deleteById(bid);
	}
	
	public List<BookingFlight> getByBooking(long id) {
		return bfr.findAllByBookingId(id);
	}

	public List<BookingFlight> getByFlight(long id) {
		return bfr.findAllByFlightId(id);
	}
}
