package com.Trefin.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Trefin.veterinaria.model.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Long> {

}
