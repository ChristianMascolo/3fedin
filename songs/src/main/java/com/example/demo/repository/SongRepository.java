package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Song;

public interface SongRepository extends JpaRepository<Song, Long> {

	List<Song> findByFavouriteTrue();

}
