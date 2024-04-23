package com.Trefin.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Trefin.veterinaria.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}
