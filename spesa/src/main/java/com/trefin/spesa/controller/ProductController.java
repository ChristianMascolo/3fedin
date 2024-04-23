package com.trefin.spesa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trefin.spesa.model.Product;
import com.trefin.spesa.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/api/product")
public class ProductController {

	@Autowired
	private ProductService ps;
	
	
	@GetMapping("/all")
	public List<Product> all(){
		return ps.all();
	}
	
	@PostMapping("/add")
	public List<Product> add(@RequestBody List<Product> p){
		return ps.add(p);
	}
	
	@DeleteMapping("/deleteMore")
	public void deleteMore(@RequestBody List<Product> p) {
		ps.deleteMore(p);
	}
	
	@DeleteMapping("/deleteOne/{id}")
	public void deleteOne(@PathVariable long id) {
		ps.delete(id);
	}
	
	@PatchMapping("/patch/{id}")
	public Product patch(@PathVariable long id,@RequestBody Product p) {
		return ps.patch(id,p);
	}
}
