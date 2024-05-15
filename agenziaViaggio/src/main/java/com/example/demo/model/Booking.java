package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToMany(mappedBy = "booking")
	@JsonIgnore
	private List<BookingHotel> hotels;
	
	@OneToMany(mappedBy = "booking")
	@JsonIgnore
	private List<BookingFlight> flights;

	@ManyToOne
	@JoinColumn(name = "company_id")
	private Company company;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<BookingHotel> getHotels() {
		return hotels;
	}

	public void setHotels(List<BookingHotel> hotels) {
		this.hotels = hotels;
	}

	public List<BookingFlight> getFlights() {
		return flights;
	}

	public void setFlights(List<BookingFlight> flights) {
		this.flights = flights;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
}
