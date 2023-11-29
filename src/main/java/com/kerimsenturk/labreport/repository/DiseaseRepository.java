package com.kerimsenturk.labreport.repository;

import com.kerimsenturk.labreport.model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiseaseRepository extends JpaRepository<Disease, Integer> {
    List<Disease> getDiseasesByPatient_UserId(String id);
    List<Disease> getDiseasesByDoctor_UserId(String id);
    List<Disease> getDiseasesByLabTechnician_UserId(String id);

}
