package com.Trefin.veterinaria.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Trefin.veterinaria.model.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {

	List<Medicine> findAllByVisitId(long id);

}
