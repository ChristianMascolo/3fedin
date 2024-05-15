package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Cart;
import com.example.demo.model.CartId;

public interface CartRepository extends JpaRepository<Cart, CartId> {

	List<Cart> findAllByUserId(long id);
	List<Cart> findAllByGameId(long id);

}
