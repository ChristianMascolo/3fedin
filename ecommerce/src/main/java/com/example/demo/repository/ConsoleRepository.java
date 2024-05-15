package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Console;

public interface ConsoleRepository extends JpaRepository<Console, Long> {

}
