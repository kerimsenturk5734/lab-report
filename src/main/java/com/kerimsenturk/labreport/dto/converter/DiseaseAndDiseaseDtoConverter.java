package com.kerimsenturk.labreport.dto.converter;

import com.kerimsenturk.labreport.dto.DiseaseDto;
import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.util.ObjectConverter.Convertable;
import org.springframework.stereotype.Component;

@Component
public class DiseaseAndDiseaseDtoConverter implements Convertable<Disease, DiseaseDto> {
    private final UserAndUserDtoConverter userAndUserDtoConverter;
    private final ReportAndReportDtoConverter reportAndReportDtoConverter;

    public DiseaseAndDiseaseDtoConverter(UserAndUserDtoConverter userAndUserDtoConverter, ReportAndReportDtoConverter reportAndReportDtoConverter) {
        this.userAndUserDtoConverter = userAndUserDtoConverter;
        this.reportAndReportDtoConverter = reportAndReportDtoConverter;
    }

    @Override
    public DiseaseDto convert(Disease disease) {
        if(disease == null)
            return null;

        return new DiseaseDto(
                disease.getId(),
                userAndUserDtoConverter.convert(disease.getPatient()),
                userAndUserDtoConverter.convert(disease.getLabTechnician()),
                userAndUserDtoConverter.convert(disease.getDoctor()),
                disease.getLabRequestType(),
                reportAndReportDtoConverter.convert(disease.getPathologicReport()),
                reportAndReportDtoConverter.convert(disease.getDiagnosticReport()),
                disease.getDiseaseState(),
                disease.getCreationDate());
    }

    @Override
    public Disease deConvert(DiseaseDto diseaseDto) {
        if(diseaseDto == null)
            return null;

        return new Disease(
                diseaseDto.getId(),
                userAndUserDtoConverter.deConvert(diseaseDto.getPatient()),
                userAndUserDtoConverter.deConvert(diseaseDto.getLabTechnician()),
                userAndUserDtoConverter.deConvert(diseaseDto.getDoctor()),
                diseaseDto.getLabRequestType(),
                reportAndReportDtoConverter.deConvert(diseaseDto.getPathologicReport()),
                reportAndReportDtoConverter.deConvert(diseaseDto.getDiagnosticReport()),
                diseaseDto.getDiseaseState(),
                diseaseDto.getCreationDate());
    }
}
