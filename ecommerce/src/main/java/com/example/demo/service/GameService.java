package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Game;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.GameRepository;
import com.example.demo.repository.PlatformRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository gr;
	
	@Autowired
	private CartRepository cr;
	
	@Autowired
	private PlatformRepository pr;
	
	public List<Game> all(){
		return gr.findAll();
	}
	
	public Game add(Game g) {
		return gr.save(g);
	}
	
	public Game getOne(long id) {
		return gr.findById(id).get();
	}

	public void delete(long id) {
		Game tmp = gr.findById(id).get();
		
		cr.deleteAll(tmp.getUsers());
		pr.deleteAll(tmp.getConsole());
		gr.delete(tmp);
	}
}
