package com.Trefin.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Trefin.veterinaria.model.Animal;
import com.Trefin.veterinaria.repository.AnimalRepository;

@Service
public class AnimalService {

	@Autowired
	private AnimalRepository animalRepository;

	public List<Animal> getAll() {
		return animalRepository.findAll();
	}

	public Animal add(Animal a) {
		return animalRepository.save(a);
	}

	public Animal getOne(long id) {
		return animalRepository.findById(id).get();
	}
}
