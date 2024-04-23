package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoggerController {
	private Logger logger = LogManager.getLogger(this.getClass());

	@GetMapping("/addU")
	public void log() {
		if(this.logger.isDebugEnabled()) {
			this.logger.debug("debug msg");
		}
		this.logger.warn("debug msg");
	}
}
