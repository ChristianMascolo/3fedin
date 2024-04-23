package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.BookingFlight;
import com.example.demo.model.BookingFlightId;

public interface BookingFlightRepository extends JpaRepository<BookingFlight, BookingFlightId> {
	List<BookingFlight> findAllByFlightId(long id);
	List<BookingFlight> findAllByBookingId(long id);
}
