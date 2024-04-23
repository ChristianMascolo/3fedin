package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Console;
import com.example.demo.model.Game;
import com.example.demo.model.Platform;
import com.example.demo.model.PlatformId;
import com.example.demo.repository.ConsoleRepository;
import com.example.demo.repository.GameRepository;
import com.example.demo.repository.PlatformRepository;

@Service
public class PlatformService {
	@Autowired
	private PlatformRepository pr;
	
	@Autowired
	private ConsoleRepository cr;
	
	@Autowired
	private GameRepository gr;
	
	public List<Platform> findByGame(long id){
		return pr.findAllByGameId(id);
	}
	
	public List<Platform> findByConsole(long id){
		return pr.findAllByConsoleId(id);
	}

	public List<Platform> add(List<PlatformId> pid) {
		List<Platform> platforms = new ArrayList<>();
		
		for(PlatformId tmp: pid) {
			Game g = gr.findById(tmp.getGameId()).get();
			Console c = cr.findById(tmp.getConsoleId()).get();
			Platform p = new Platform();
			p.setConsole(c);
			p.setGame(g);
			p.setId(tmp);
			platforms.add(p);
		}
		
		return pr.saveAll(platforms);
	}
	
}
