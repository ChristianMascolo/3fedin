package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Appointment;
import com.example.demo.repository.AppointmentRepository;

@Service
public class AppointmentService {
	@Autowired
	private AppointmentRepository appointmentRepo;
	
	public Appointment add(Appointment a) {
		return appointmentRepo.save(a);
	}

	public List<Appointment> all() {
		return appointmentRepo.findAll();
	}

	public List<Appointment> findByUser(long idU) {
		return appointmentRepo.findByUserId(idU);
	}

	public List<Appointment> findByProperty(long idP) {
		return appointmentRepo.findByPropertyId(idP);
	}

	public void delete(long id) {
		appointmentRepo.deleteById(id);
	}

	public Appointment update(long id, Appointment a) {
		Appointment na = appointmentRepo.findById(id).get();

		na.setDate(a.getDate());
		na.setProperty(a.getProperty());
		na.setUser(a.getUser());
		
		return appointmentRepo.save(na);
	}
}
