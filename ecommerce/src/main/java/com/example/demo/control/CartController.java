package com.example.demo.control;

import java.sql.Date;
import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.service.CartService;

@RestController
@CrossOrigin
@RequestMapping("/api/cart")
public class CartController {
	@Autowired
	private CartService cs;
	
	@GetMapping("/getCartByUser/{id}")
	public List<Cart> getByUser(@PathVariable long id){
		return cs.getByUser(id);
	}
	
	@GetMapping("/getCartByGame/{id}")
	public List<Cart> getByGame(@PathVariable long id){
		return cs.getByGame(id);
	}
	
	@PostMapping("/add/{idU}/{idG}")
	public Cart addCart(@RequestParam Date date, @PathVariable long idU, @PathVariable long idG) throws ParseException {
		return cs.add(date,idU,idG);
	}
}
