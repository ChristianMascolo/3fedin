package com.example.demo.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Review;
import com.example.demo.service.ReviewService;

@RestController
@CrossOrigin
@RequestMapping("/api/review")
public class ReviewController {

	@Autowired
	private ReviewService reviewService;
	
	@GetMapping("/getBarReviews/{idB}")
	public List<Review> getBarReviews(@PathVariable long idB){
		return reviewService.getBarReviews(idB);
	}
	
	@PostMapping("/createReviewBar")
	public Review createReviewBar(@RequestBody Review r) {
		return reviewService.createReviewBar(r);
	}
	
	@GetMapping("/getUserReviews/{idU}")
	public List<Review> getUserReviews(@PathVariable long idU){
		return reviewService.getUserReview(idU);
	}
	
	@PutMapping("/updateReview/{id}")
	public Review updateReview(@RequestBody Review r,@PathVariable long id) {
		return reviewService.updateReview(r,id);
	}
}
