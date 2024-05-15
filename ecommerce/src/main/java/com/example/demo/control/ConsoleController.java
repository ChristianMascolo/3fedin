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

import com.example.demo.model.Console;
import com.example.demo.service.ConsoleService;

@RestController
@CrossOrigin
@RequestMapping("/api/console")
public class ConsoleController {

	@Autowired
	private ConsoleService cs;
	
	@GetMapping("/all")
	public List<Console> getAll(){
		return cs.getAll();	
	}
	
	@PostMapping("/add")
	public Console add(@RequestBody Console c) {
		return cs.addConsole(c);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable long id) {
		cs.removeConsole(id);
	}
}
