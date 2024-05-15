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

import com.Trefin.veterinaria.model.Medicine;
import com.Trefin.veterinaria.service.MedicineService;

@RestController
@CrossOrigin
@RequestMapping("/api/medicine")
public class MedicineController {

	@Autowired
	private MedicineService ms;
	
	@GetMapping("/visitMedicines/{id}")
	public List<Medicine> getVisitMedicines(@PathVariable long id){
		return ms.getVisitMedicines(id);
	}
	
	@GetMapping("/all")
	public List<Medicine> getAll(){
		return ms.getAll();
	}

	@PostMapping("/add")
	public Medicine add(@RequestBody Medicine m) {
		return ms.save(m);
	}
}
