package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Appointment;
import com.example.demo.service.AppointmentService;

@RestController
@CrossOrigin
@RequestMapping("/api/appointment")
public class AppointmentController {
	@Autowired
	private AppointmentService as;
	
	
	@PostMapping("/add")
	public Appointment add(@RequestBody Appointment a) {
		return as.add(a);
	}
	
	@GetMapping("/all")
	public List<Appointment> all(){
		return as.all();
	}
	
	@GetMapping("/findByUser/{idU}")
	public List<Appointment> findByUser(@PathVariable long idU){
		return as.findByUser(idU);
	}
	
	@GetMapping("/findByProperty/{idP}")
	public List<Appointment> findByProperty(@PathVariable long idP){
		return as.findByProperty(idP);
	}
	
	@DeleteMapping("/delete/{id}")
	public void remove(@PathVariable long id) {
		as.delete(id);
	}
	
	@PutMapping("/update/{id}")
	public Appointment update(@PathVariable long id, @RequestBody Appointment a) {
		return as.update(id,a);
	}
}
