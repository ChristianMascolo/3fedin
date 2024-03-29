package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Film;
import com.example.demo.model.Ticket;
import com.example.demo.model.User;
import com.example.demo.repository.FilmRepository;
import com.example.demo.repository.TicketRepository;
import com.example.demo.repository.UserRepository;

@Service
public class TicketService {

	@Autowired
	private TicketRepository ticketRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired 
	private FilmRepository filmRepo;
	
	
	public Ticket add(Ticket t,long idF,long idU) {
		User u = userRepo.findById(idU).get();
		Film f = filmRepo.findById(idF).get();
		t.setUser(u);
		t.setFilm(f);
		return ticketRepo.save(t);
	}
}
