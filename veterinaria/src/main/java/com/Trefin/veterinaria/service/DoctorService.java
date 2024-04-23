package com.Trefin.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Trefin.veterinaria.model.Doctor;
import com.Trefin.veterinaria.repository.DoctorRepository;

@Service
public class DoctorService {

	@Autowired
	private DoctorRepository doctorRepository;

	public List<Doctor> all() {
		return doctorRepository.findAll();
	}

	public Doctor add(Doctor d) {
		return doctorRepository.save(d);
	}

	public Doctor getOne(long id) {
		return doctorRepository.findById(id).get();
	}
}
