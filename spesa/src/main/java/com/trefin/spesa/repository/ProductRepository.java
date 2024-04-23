package com.trefin.spesa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trefin.spesa.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
