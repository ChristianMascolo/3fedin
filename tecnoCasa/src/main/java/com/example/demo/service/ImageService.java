package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Image;
import com.example.demo.repository.ImageRepository;

@Service
public class ImageService {
	@Autowired
	private ImageRepository ir;

	public List<Image> add(List<Image> i) {
		return ir.saveAll(i);
	}

	public List<Image> byProperty(long id) {
		return ir.findByPropertyId(id);
	}
}
