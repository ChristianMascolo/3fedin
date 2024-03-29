package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Ticket;
import com.example.demo.service.TicketService;

@CrossOrigin
@RestController
@RequestMapping("/api/ticket")
public class TicketController {

	@Autowired
	private TicketService ts;
	
	@PostMapping("/add/{idF}/{idU}")
	public Ticket add(@RequestBody Ticket t,@PathVariable long idF, @PathVariable long idU) {
		return ts.add(t,idF,idU);
	}
}
