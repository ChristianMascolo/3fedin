package com.example.demo.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Bar;
import com.example.demo.service.BarService;

@RestController
@CrossOrigin
@RequestMapping("/api/bar")
public class BarController {

	@Autowired
	private BarService barService;
	
	@GetMapping("/getAll")
	public List<Bar> getall(){
		return barService.getAll();
	}
	
	@PostMapping("/addBar")
	public Bar addBar(@RequestBody Bar b) {
		return barService.addBar(b);
	}
	
	@DeleteMapping("/removeBar/{idB}")
	public void removeBar(@PathVariable long idB) {
		barService.removeBar(idB);
	}
	
}
