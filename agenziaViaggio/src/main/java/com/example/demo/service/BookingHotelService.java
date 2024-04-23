package com.example.demo.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Booking;
import com.example.demo.model.BookingHotel;
import com.example.demo.model.BookingHotelId;
import com.example.demo.model.Hotel;
import com.example.demo.repository.BookingHotelRepository;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.HotelRepository;

@Service
public class BookingHotelService {
	@Autowired
	private BookingHotelRepository bhr;
	
	@Autowired
	private BookingRepository br;
	
	@Autowired
	private HotelRepository hr;
	
	public BookingHotel add(Date start,Date finish,long idB,long idH) {
		BookingHotelId bhi = new BookingHotelId();
		BookingHotel bh = new BookingHotel();
		Booking b = br.findById(idB).get();
		Hotel h = hr.findById(idH).get();
		
		bhi.setBookingId(idB);
		bhi.setHotelId(idH);
		
		bh.setBooking(b);
		bh.setHotel(h);
		bh.setStart(start);
		bh.setFinish(finish);
		
		return bhr.save(bh);
	}
	
	public void remove(BookingHotelId bhi, long idB, long idH) {
		br.deleteById(idB);
		hr.deleteById(idH);
		bhr.deleteById(bhi);
	}
	
	public List<BookingHotel> getByBooking(long id){
		return bhr.findAllByBookingId(id);
	}
	
	public List<BookingHotel> getByHotel(long id){
		return bhr.findAllByHotelId(id);
	}
}
