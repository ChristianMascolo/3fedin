package com.example.demo.model;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class BookingFlight {
	@EmbeddedId
	private BookingFlightId id;
	
	@ManyToOne
	@MapsId("bookingId")
	@JoinColumn(name="booking_id")
	private Booking booking;
	
	@ManyToOne
	@MapsId("flightId")
	@JoinColumn(name="flight_id")
	private Flight flight;

	private double price;

	public BookingFlightId getId() {
		return id;
	}

	public void setId(BookingFlightId id) {
		this.id = id;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public Flight getFlight() {
		return flight;
	}

	public void setFlight(Flight flight) {
		this.flight = flight;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	
}
