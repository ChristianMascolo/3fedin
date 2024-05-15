package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class CartId implements Serializable {
	private static final long serialVersionUID = 3899129062878979343L;

	@Column(name = "gameId")
	private long gameId;
	@Column(name = "userId")
	private long userId;

	
	public long getGameId() {
		return gameId;
	}

	public void setGameId(long gameId) {
		this.gameId = gameId;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

}
