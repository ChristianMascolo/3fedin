package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Property;
import com.example.demo.repository.PropertyRepository;

@Service
public class PropertyService {

	@Autowired
	private PropertyRepository pr;

	public Property add(Property p) {
		return pr.save(p);
	}

	public List<Property> all() {
		return pr.findAll();
	}

	public Property update(long id, Property p) {
		Property tmp = pr.findById(id).get();
		
		tmp.setAddress(p.getAddress());
		tmp.setDescription(p.getDescription());
		tmp.setDimension(p.getDimension());
		tmp.setPrice(p.getPrice());
		tmp.setType(p.getType());
		
		return pr.save(tmp);
	}

	public Property findOne(long id) {
		return pr.findById(id).get();
	}
}
