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

import com.Trefin.veterinaria.model.Doctor;
import com.Trefin.veterinaria.service.DoctorService;

@CrossOrigin
@RestController
@RequestMapping("/api/doctor")
public class DoctorController {

	@Autowired
	private DoctorService doctorService;
	
	@GetMapping("/getAll")
	public List<Doctor> getAll(){
		return doctorService.all();
	}
	
	@PostMapping("/addDoctor")
	public Doctor addDoctor(@RequestBody Doctor d) {
		return doctorService.add(d);
	}
	
	@GetMapping("/getOne/{id}")
	public Doctor getOne(@PathVariable long id) {
		return doctorService.getOne(id);
	}
}
