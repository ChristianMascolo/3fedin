package com.example.demo.model;

import java.sql.Date;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class BookingHotel {
	@EmbeddedId
	private BookingHotelId id;

	@ManyToOne
	@MapsId("hotelId")
	@JoinColumn(name = "hotel_id")
	private Hotel hotel;

	@ManyToOne
	@MapsId("bookingId")
	@JoinColumn(name = "booking_id")
	private Booking booking;
	private Date start,finish;

	public BookingHotelId getId() {
		return id;
	}

	public void setId(BookingHotelId id) {
		this.id = id;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public Date getStart() {
		return start;
	}

	public void setStart(Date start) {
		this.start = start;
	}

	public Date getFinish() {
		return finish;
	}

	public void setFinish(Date finish) {
		this.finish = finish;
	}


}
