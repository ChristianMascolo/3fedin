package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class Platform {

	@EmbeddedId
	private PlatformId id;
	
	@ManyToOne
	@MapsId("consoleId")
	@JoinColumn(name = "console_id")
	private Console console;
	
	@ManyToOne
	@MapsId("gameId")
	@JoinColumn(name = "game_id")
	@JsonIgnore
	private Game game;
	
	public PlatformId getId() {
		return id;
	}
	public void setId(PlatformId id) {
		this.id = id;
	}
	public Console getConsole() {
		return console;
	}
	public void setConsole(Console console) {
		this.console = console;
	}
	public Game getGame() {
		return game;
	}
	public void setGame(Game game) {
		this.game = game;
	}

	
}
