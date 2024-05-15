package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class BookingHotelId implements Serializable{
	private static final long serialVersionUID = 1L;

	@Column(name = "bookingId")
	private long bookingId;
	
	@Column(name = "hotelId")
	private long hotelId;

	public long getBookingId() {
		return bookingId;
	}

	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}

	public long getHotelId() {
		return hotelId;
	}

	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}
	
	
}
