package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;

@Entity
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private int pegi;
	private double price;
	private String name,genre,productor;
	
	@Column(columnDefinition = "TEXT")
	private String description;
	
	@OneToMany(mappedBy = "game")
	@JsonIgnore
	private List<Cart> users;
	
	@OneToMany(mappedBy = "game")
	@JsonIgnore
	private List<Platform> consoles;
	
	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] img;

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

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getProductor() {
		return productor;
	}

	public void setProductor(String productor) {
		this.productor = productor;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPegi() {
		return pegi;
	}

	public void setPegi(int pegi) {
		this.pegi = pegi;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}
	
	public List<Cart> getUsers() {
		return users;
	}
	
	public void setUsers(List<Cart> users) {
		this.users = users;
	}

	public List<Platform> getConsole() {
		return consoles;
	}

	public void setConsole(List<Platform> consoles) {
		this.consoles = consoles;
	}
	
	
}
