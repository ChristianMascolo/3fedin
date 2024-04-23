package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class BookingFlightId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "bookingId")
	private long bookingId;
	@Column(name = "flightId")
	private long flightId;

	public long getBookingId() {
		return bookingId;
	}

	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}

	public long getFlightId() {
		return flightId;
	}

	public void setFlightId(long flightId) {
		this.flightId = flightId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
