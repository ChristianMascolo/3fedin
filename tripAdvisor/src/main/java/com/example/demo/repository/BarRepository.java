package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Bar;

public interface BarRepository extends JpaRepository<Bar, Long> {

}
