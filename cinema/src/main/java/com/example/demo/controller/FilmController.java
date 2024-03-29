package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Film;
import com.example.demo.service.FilmService;

@CrossOrigin
@RestController
@RequestMapping("/api/film")
public class FilmController {
	
	@Autowired
	private FilmService filmService;
	
	@GetMapping("/all")
	public List<Film> all(){
		return filmService.all();
	}
	
	@PostMapping("/add")
	public void addFilms(@RequestBody List<Film> films) {
		filmService.addFilms(films);
	}
}
