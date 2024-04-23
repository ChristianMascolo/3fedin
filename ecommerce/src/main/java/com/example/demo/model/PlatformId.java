package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class PlatformId implements Serializable {
	private static final long serialVersionUID = -9178182386628840587L;
	@Column(name = "gameId")
	private long gameId;
	@Column(name = "consoleId")
	private long consoleId;

	public long getGameId() {
		return gameId;
	}

	public void setGameId(long gameId) {
		this.gameId = gameId;
	}

	public long getConsoleId() {
		return consoleId;
	}

	public void setConsoleId(long consoleId) {
		this.consoleId = consoleId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
