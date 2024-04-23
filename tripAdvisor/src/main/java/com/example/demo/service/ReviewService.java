package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Review;
import com.example.demo.repository.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository reviewRepo;
	
	public List<Review> getBarReviews(long idB){
		return reviewRepo.findAllByBarId(idB);
	}

	public Review createReviewBar(Review r) {
		return reviewRepo.save(r);
	}

	public List<Review> getUserReview(long idU) {
		return reviewRepo.findAllByUserId(idU);
	}

	public Review updateReview(Review r,long id) {
		Review newR = reviewRepo.findById(id).get();
		
		newR.setDate(r.getDate());
		newR.setDescription(r.getDescription());
		newR.setVote(r.getVote());
		
		return reviewRepo.save(newR);
	}
}
