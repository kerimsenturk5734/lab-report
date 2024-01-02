package com.kerimsenturk.labreport.repository;

import com.kerimsenturk.labreport.model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DiseaseRepository extends JpaRepository<Disease, Integer> {
    List<Disease> getDiseasesByPatient_UserId(String id);
    List<Disease> getDiseasesByDoctor_UserId(String id);
    List<Disease> getDiseasesByLabTechnician_UserId(String id);
    Optional<Disease> getDiseasesByDiagnosticReport_ReportId(String reportId);
    Optional<Disease> getDiseasesByPathologicReport_ReportId(String reportId);
}
