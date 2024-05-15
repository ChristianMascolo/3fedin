package com.Trefin.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Trefin.veterinaria.model.Visit;
import com.Trefin.veterinaria.repository.VisitRepository;

@Service
public class VisitService {

	@Autowired
	private VisitRepository visitRepository;

	public List<Visit> getDoctorVisits(long id) {
		return visitRepository.findAllByDoctorId(id);
	}
	
	public List<Visit> getAnimalVisits(long id) {
		return visitRepository.findAllByAnimalId(id);
	}

	public Visit addVisit(Visit v) {
		return visitRepository.save(v);
	}
	
	public Visit updateVisit(long id, Visit oldV) {
		Visit newV = visitRepository.findById(id).get();
		
		newV.setDone(oldV.isDone());
		newV.setDate(oldV.getDate());
		newV.setDescription(oldV.getDescription());
		
		return visitRepository.save(newV);
	}

	public Visit doneVisit(long id, boolean flag) {
		Visit newV = visitRepository.findById(id).get();
		
		newV.setDone(flag);
		
		return visitRepository.save(newV);
	}
}
