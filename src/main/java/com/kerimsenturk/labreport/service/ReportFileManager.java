package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.model.Report;
import com.kerimsenturk.labreport.model.enums.ReportType;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.File;
import java.text.MessageFormat;

@Component
public class ReportFileManager {

    @Value("${directory.report.root}")
    private static String REPORT_FILES_ROOT_PATH;
    @Value("${directory.report.root.diagnostic}")
    private static String DIAGNOSTIC_REPORT_PATH;
    @Value("${directory.report.root.pathological}")
    private static String PATHOLOGICAL_REPORT_PATH;
    @Value("${directory.report.root.deleted}")
    private static String DELETED_REPORT_PATH;

    public void saveReportObject(Report report){
        //Convert to file the report object

        //Save the file

    }

    public void deleteReportFile(String directory){
        //Delete the file
    }

    public void moveTheFileTo(String fileDirectory, String movingDirectory){

    }

    public String buildReportFilePath(String patientId, ReportType reportType, boolean isDeletedFile){
        /*---------------------------------------------------------------
            File Name Pattern --> "${patientId}_${reportType}_${System.timeStamp()}"
         --------------------------------------------------------------------*/

        String fileName = MessageFormat.format(
                "{0}_{1}_{2}",
                patientId,
                reportType.toString().substring(0, 3),
                System.currentTimeMillis()); // Result --> "patientId_reportType_System.timeStamp()"

        StringBuilder filePathBuilder =
                new StringBuilder()
                        .append("/")
                        .append(fileName); //Result --> "/patientId_reportType_System.timeStamp()"

        if(isDeletedFile){
            filePathBuilder.insert(0, DELETED_REPORT_PATH);
            // Result --> "src/main/resources/reports/deleted/patientId_reportType_System.timeStamp()"
        }
        else{
            switch (reportType){
                case DIAGNOSTIC -> filePathBuilder.insert(0, DIAGNOSTIC_REPORT_PATH);
                    // Result --> "src/main/resources/reports/diagnostic/patientId_reportType_System.timeStamp()"

                case PATHOLOGICAL -> filePathBuilder.insert(0, PATHOLOGICAL_REPORT_PATH);
                    // Result --> "src/main/resources/reports/pathological/patientId_reportType_System.timeStamp()"
            }
        }


        return filePathBuilder.toString();
    }
    private void saveFile(File file){
        //Save the file

    }

}
