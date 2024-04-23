package com.example.demo.service;

import java.sql.Date;
import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.model.CartId;
import com.example.demo.model.Game;
import com.example.demo.model.User;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.GameRepository;
import com.example.demo.repository.UserRepository;

@Service
public class CartService {

	@Autowired
	private CartRepository cr;

	@Autowired
	private UserRepository ur;

	@Autowired
	private GameRepository gr;

	public List<Cart> getByUser(long id) {
		return cr.findAllByUserId(id);
	}

	public List<Cart> getByGame(long id) {
		return cr.findAllByGameId(id);
	}

	public Cart add(Date d, long idU, long idG) throws ParseException {
		CartId cid = new CartId();
		Cart c = new Cart();
		User u = ur.findById(idU).get();
		Game g = gr.findById(idG).get();
		
		cid.setGameId(idG);
		cid.setUserId(idU);
		
		c.setId(cid);
		c.setGame(g);
		c.setUser(u);
		c.setPurchaseDate(d);
		System.out.println(c.getPurchaseDate());

		return cr.save(c);
	}
}
