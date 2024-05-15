package com.Trefin.veterinaria.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Trefin.veterinaria.model.Visit;

public interface VisitRepository extends JpaRepository<Visit, Long> {
	List<Visit> findAllByDoctorId(long id);
	List<Visit> findAllByAnimalId(long id);
}
