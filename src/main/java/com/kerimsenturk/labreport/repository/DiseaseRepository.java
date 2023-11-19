package com.kerimsenturk.labreport.repository;

import com.kerimsenturk.labreport.model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseRepository extends JpaRepository<Disease, Integer> {
}
