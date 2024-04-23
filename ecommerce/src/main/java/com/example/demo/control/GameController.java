package com.example.demo.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Game;
import com.example.demo.service.GameService;

@RestController
@CrossOrigin
@RequestMapping("/api/game")
public class GameController {
	@Autowired
	private GameService gs;
	
	@GetMapping("/all")
	public List<Game> getAll(){
		return gs.all();
	}
	
	@GetMapping("/getById/{id}")
	public Game getById(@PathVariable long id) {
		return gs.getOne(id);
	}
	
	@PostMapping("/add")
	public Game add(@RequestBody Game g) {
		return gs.add(g);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable long id) {
		gs.delete(id);
	}
}
