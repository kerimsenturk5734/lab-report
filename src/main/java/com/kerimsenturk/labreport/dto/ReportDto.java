package com.kerimsenturk.labreport.dto;

import com.kerimsenturk.labreport.model.enums.ReportType;

import java.util.Date;

public class ReportDto {
    String reportId;
    String title;
    String details;
    Date issueDate;
    String filePath;
    ReportType reportType;

    public ReportDto() {
    }

    public ReportDto(String reportId, String title, String details, Date issueDate, String filePath, ReportType reportType) {
        this.reportId = reportId;
        this.title = title;
        this.details = details;
        this.issueDate = issueDate;
        this.filePath = filePath;
        this.reportType = reportType;
    }

    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public ReportType getReportType() {
        return reportType;
    }

    public void setReportType(ReportType reportType) {
        this.reportType = reportType;
    }
}
