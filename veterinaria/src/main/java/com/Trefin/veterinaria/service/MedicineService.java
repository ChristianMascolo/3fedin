package com.Trefin.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Trefin.veterinaria.model.Medicine;
import com.Trefin.veterinaria.repository.MedicineRepository;

@Service
public class MedicineService {

	@Autowired
	private MedicineRepository mr;
	
	public List<Medicine> getVisitMedicines(long id){
		return mr.findAllByVisitId(id);
	}

	public List<Medicine> getAll() {
		return mr.findAll();
	}

	public Medicine save(Medicine m) {
		return mr.save(m);
	}
}
