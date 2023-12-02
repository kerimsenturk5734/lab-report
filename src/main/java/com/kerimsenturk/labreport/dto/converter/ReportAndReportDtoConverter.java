package com.kerimsenturk.labreport.dto.converter;

import com.kerimsenturk.labreport.dto.ReportDto;
import com.kerimsenturk.labreport.model.Report;
import com.kerimsenturk.labreport.util.ObjectConverter.Convertable;
import org.springframework.stereotype.Component;

@Component
public class ReportAndReportDtoConverter implements Convertable<Report, ReportDto> {
    @Override
    public ReportDto convert(Report report) {
        if(report == null)
            return null;

        return new ReportDto(
                report.getReportId(),
                report.getTitle(),
                report.getDetails(),
                report.getIssueDate(),
                report.getFilePath(),
                report.getReportType());
    }

    @Override
    public Report deConvert(ReportDto reportDto) {
        if(reportDto == null)
            return null;

        return new Report(
                reportDto.getReportId(),
                reportDto.getTitle(),
                reportDto.getDetails(),
                reportDto.getIssueDate(), 
                reportDto.getFilePath(),
                reportDto.getReportType());
    }
}
