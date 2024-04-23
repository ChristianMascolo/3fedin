package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name,surname,street,city,cap;
	private int civico;
	@Lob
	@Column(length = 9999)
	private byte[] qr;
	@Lob
	@Column(length = 9999)
	private byte[] profilePic;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCap() {
		return cap;
	}
	public void setCap(String cap) {
		this.cap = cap;
	}
	public int getCivico() {
		return civico;
	}
	public void setCivico(int civico) {
		this.civico = civico;
	}
	public byte[] getQr() {
		return qr;
	}
	public void setQr(byte[] qr) {
		this.qr = qr;
	}
	public byte[] getProfilePic() {
		return profilePic;
	}
	public void setProfilePic(byte[] profilePic) {
		this.profilePic = profilePic;
	}

	
	
}
