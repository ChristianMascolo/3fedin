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

import com.example.demo.model.Song;
import com.example.demo.service.SongService;

@RestController
@CrossOrigin
@RequestMapping("api/song")
public class SongControl {

	@Autowired
	private SongService songService;
	
	@GetMapping("/all")
	public List<Song> all(){
		return songService.all();
	}
	
	@PostMapping("/add")
	public void add(@RequestBody List<Song> songs) {
		songService.add(songs);
	}
	
	@PutMapping("/toggleFavourite/{flag}/{id}")
	public Song toggleFavourite(@PathVariable boolean flag,@PathVariable long id) {
		return songService.toggleFavourite(flag,id);
	}
	
	@GetMapping("/preferred")
	public List<Song> preferred(){
		return songService.preferred();
	}
}
