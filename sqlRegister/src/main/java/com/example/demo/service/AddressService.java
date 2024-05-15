package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Address;
import com.example.demo.repository.AddressRepository;

@Service
public class AddressService {

	@Autowired
	private AddressRepository addressRepo;
	
	public List<Address> all() {
		// TODO Auto-generated method stub
		return addressRepo.findAll();
	}

	public void add(Address a) {
		// TODO Auto-generated method stub
		addressRepo.save(a);
	}

}
