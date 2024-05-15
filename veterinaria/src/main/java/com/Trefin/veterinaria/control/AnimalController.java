package com.Trefin.veterinaria.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Trefin.veterinaria.model.Animal;
import com.Trefin.veterinaria.service.AnimalService;

@RestController
@CrossOrigin
@RequestMapping("/api/animals")
public class AnimalController {

	@Autowired
	private AnimalService animalService;

	@GetMapping("/getAll")
	public List<Animal> getAll(){
		return animalService.getAll();
	}
	
	@PostMapping("/add")
	public Animal add(@RequestBody Animal a) {
		return animalService.add(a);
	}

	@GetMapping("/getOne/{id}")
	public Animal getOne(@PathVariable long id) {
		return animalService.getOne(id);
	}
}
