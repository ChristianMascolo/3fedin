package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Song;
import com.example.demo.repository.SongRepository;

@Service
public class SongService {

	@Autowired
	private SongRepository songR;
	
	public List<Song> all() {
		return songR.findAll();
	}

	public void add(List<Song> songs) {
		songR.saveAll(songs);
	}

	public Song toggleFavourite(boolean flag,long id) {
		Song s = songR.findById(id).get();
		s.setFavourite(flag);
		return songR.save(s);
	}
	
	public List<Song> preferred(){
		return songR.findByFavouriteTrue();
	}
}
