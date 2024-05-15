package com.example.demo.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Platform;
import com.example.demo.model.PlatformId;
import com.example.demo.service.PlatformService;

@RestController
@CrossOrigin
@RequestMapping("/api/platform")
public class PlatformController {
	@Autowired
	private PlatformService ps;
	
	@GetMapping("/getPlatformByGame/{id}")
	public List<Platform> getByGame(@PathVariable long id){
		return ps.findByGame(id);
	}
	
	@GetMapping("/getPlatformByConsole/{id}")
	public List<Platform> getByConsole(@PathVariable long id){
		return ps.findByConsole(id);
	}
	
	@PostMapping("/add")
	public List<Platform> add(@RequestBody List<PlatformId> pid) {
		return ps.add(pid);
	}
}
