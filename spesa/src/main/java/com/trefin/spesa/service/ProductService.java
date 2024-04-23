package com.trefin.spesa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trefin.spesa.model.Product;
import com.trefin.spesa.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository pr;
	
	public List<Product> add(List<Product> p){
		return pr.saveAll(p);
	}
	
	public List<Product> all(){
		return pr.findAll();
	}
	
	public void delete(long id){
		pr.deleteById(id);;
	}
	
	public Product patch(long id,Product n) {
		Product old = pr.findById(id).get();
		
		old.setName(n.getName());
		old.setCategory(n.getCategory());
		old.setPrice(n.getPrice());
		
		return pr.save(old);
	}

	public void deleteMore(List<Product> p) {
		pr.deleteAll(p);
	}
	
}
