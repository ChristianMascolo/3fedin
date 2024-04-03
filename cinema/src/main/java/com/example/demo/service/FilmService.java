package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Film;
import com.example.demo.repository.FilmRepository;

@Service
public class FilmService {

	@Autowired
	private FilmRepository filmRepo;
	
	public List<Film> all(){
		return filmRepo.findAll();
	}
	
	public void addFilms(List<Film> films) {
		filmRepo.saveAll(films);
	}
}
