package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.BookingHotel;
import com.example.demo.model.BookingHotelId;

public interface BookingHotelRepository extends JpaRepository<BookingHotel, BookingHotelId> {
	List<BookingHotel> findAllByHotelId(long id);
	List<BookingHotel> findAllByBookingId(long id);
}
