package com.Trefin.veterinaria.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Trefin.veterinaria.model.Visit;
import com.Trefin.veterinaria.service.VisitService;

@CrossOrigin
@RestController
@RequestMapping("/api/visit")
public class VisitController {

	@Autowired
	private VisitService visitService;
	
	@GetMapping("/getDoctorVisits/{id}")
	public List<Visit> getDoctorVisits(@PathVariable long id){
		return visitService.getDoctorVisits(id);
	}
	
	@GetMapping("/getAnimalVisits/{id}")
	public List<Visit> getAnimalVisits(@PathVariable long id){
		return visitService.getAnimalVisits(id);
	}
	
	@PostMapping("/addVisit")
	public Visit addVisit(@RequestBody Visit v) {
		return visitService.addVisit(v);
	}
	
	@PutMapping("/updateVisit/{id}")
	public Visit updateVisit(@RequestBody Visit v, @PathVariable long id) {
		return visitService.updateVisit(id, v);
	}
	
	@PatchMapping("/doneVisit/{id}/{flag}")
	public Visit doneVisit(@PathVariable long id,  @PathVariable boolean flag) {
		return visitService.doneVisit(id,flag);
	}
}
