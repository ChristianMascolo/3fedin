package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Platform;
import com.example.demo.model.PlatformId;

public interface PlatformRepository extends JpaRepository<Platform, PlatformId> {
	List<Platform> findAllByGameId(long id);
	List<Platform> findAllByConsoleId(long id);
}
