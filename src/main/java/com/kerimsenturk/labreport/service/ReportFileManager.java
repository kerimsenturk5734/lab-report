package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.dto.ReportDto;
import com.kerimsenturk.labreport.dto.converter.ReportFileAndOutputStreamConverter;
import com.kerimsenturk.labreport.dto.request.ReportFile;
import com.kerimsenturk.labreport.exception.ReportFileCreationException;
import com.kerimsenturk.labreport.exception.ReportFileWritingException;

import com.kerimsenturk.labreport.model.enums.ReportType;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.MessageFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class ReportFileManager {

    @Value("${directory.report.root}")
    private String REPORT_FILES_ROOT_PATH;
    @Value("${directory.report.diagnostic}")
    private String DIAGNOSTIC_REPORT_PATH;
    @Value("${directory.report.pathological}")
    private String PATHOLOGICAL_REPORT_PATH;
    @Value("${directory.report.deleted}")
    private String DELETED_REPORT_PATH;
    private final ReportFileAndOutputStreamConverter reportFileAndOutputStreamConverter;

    public ReportFileManager(ReportFileAndOutputStreamConverter reportFileAndOutputStreamConverter) {
        this.reportFileAndOutputStreamConverter = reportFileAndOutputStreamConverter;
    }

    public void saveReportFileObjectAsFile(ReportFile reportFile) {
        //Create and write the file
        try (OutputStream outputStream = new FileOutputStream(reportFile.report().getFilePath())) {
            //Convert to file the report object
            ByteArrayOutputStream os = (ByteArrayOutputStream) reportFileAndOutputStreamConverter.convert(reportFile);
            os.writeTo(outputStream);
        } catch (FileNotFoundException e) {
            throw new ReportFileCreationException(e.getMessage());
        } catch (IOException e) {
            throw new ReportFileWritingException(e.getMessage());
        }
    }

    public void deleteReportFile(ReportDto reportDto) throws IOException {
        //Moving directory
        //append file name to directory path
        String targetPath = DELETED_REPORT_PATH + "/" + new File(reportDto.getFilePath()).getName();

        //Don't delete anything just make it invisible :D
        moveFromTo(reportDto.getFilePath(), targetPath);
    }

    public String buildReportFilePath(String patientId, ReportType reportType, boolean isDeletedFile) {
        String fileName = buildReportName(patientId, reportType);

        StringBuilder filePathBuilder =
                new StringBuilder()
                        .append("/")
                        .append(fileName); //Result --> "/patientId_reportType_System.timeStamp()"

        if (isDeletedFile) {
            filePathBuilder.insert(0, DELETED_REPORT_PATH);
            // Result --> "src/main/resources/reports/deleted/patientId_reportType_System.timeStamp()"
        } else {
            switch (reportType) {
                case DIAGNOSTIC -> filePathBuilder.insert(0, DIAGNOSTIC_REPORT_PATH);
                // Result --> "src/main/resources/reports/diagnostic/patientId_reportType_System.timeStamp()"

                case PATHOLOGICAL -> filePathBuilder.insert(0, PATHOLOGICAL_REPORT_PATH);
                // Result --> "src/main/resources/reports/pathological/patientId_reportType_System.timeStamp()"
            }
        }

        return filePathBuilder.toString();
    }

    private String buildReportName(String patientId, ReportType reportType) {
        /*---------------------------------------------------------------
            File Name Pattern --> "${patientId}_${reportType}_${yyyy-MM-dd HH:mm:ss.SSS}"
         --------------------------------------------------------------------*/
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH.mm.ss.SSS");
        return MessageFormat.format(
                "{0}_{1}_{2}.pdf",
                patientId,
                reportType.toString().substring(0, 3),
                dateFormat.format(new Date()));
    }

    private void moveFromTo(String sourcePath, String targetPath) throws IOException {
        Files.move(Paths.get(sourcePath), Paths.get(targetPath));
    }
}
