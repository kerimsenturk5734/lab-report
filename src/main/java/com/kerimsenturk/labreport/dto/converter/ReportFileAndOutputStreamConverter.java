package com.kerimsenturk.labreport.dto.converter;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import com.kerimsenturk.labreport.dto.request.ReportFile;
import com.kerimsenturk.labreport.exception.ReportToOutputStreamConversionException;
import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.model.Report;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.ReportType;
import com.kerimsenturk.labreport.service.DiseaseService;
import com.kerimsenturk.labreport.util.ObjectConverter.Convertable;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.util.Date;


@Component
public class ReportFileAndOutputStreamConverter implements Convertable<ReportFile, OutputStream> {
    private final DiseaseService diseaseService;

    public ReportFileAndOutputStreamConverter(DiseaseService diseaseService) {
        this.diseaseService = diseaseService;
    }

    @Override
    public OutputStream convert(ReportFile reportFile){
        Disease disease = reportFile.disease();
        Report report = reportFile.report();

        Document doc = new Document();
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

        try{
            PdfWriter.getInstance(doc, byteArrayOutputStream);

            doc.open();

            StringBuilder strBuilder = new StringBuilder();

            //Build the metadata keywords
            strBuilder
                    .append("Report")
                    .append(", ")
                    .append(report.getReportType().toString())
                    .append(", ")
                    .append(disease.getPatient().getName())
                    .append(" ")
                    .append(disease.getPatient().getSurname());


            //Add meta data
            doc.addTitle("Report");
            doc.addSubject(report.getTitle());
            doc.addKeywords(strBuilder.toString());
            doc.addAuthor(String.format("%s %s", disease.getDoctor().getName(), disease.getDoctor().getSurname()));
            doc.addCreator("System");

            //Reset the string builder
            strBuilder.setLength(0);

            //Adding report id and issue date at top right and left
            Font timesLittleFont = FontFactory.getFont(FontFactory.TIMES_BOLD, 8, BaseColor.BLACK);
            strBuilder
                    .append("Report ID: ")
                    .append(report.getReportId())
                    .append("                                                                    ")
                    .append("Issue Date: ")
                    .append(new Date());

            Paragraph par = new Paragraph(strBuilder.toString(), timesLittleFont);
            par.setAlignment(Element.CCITT_ENDOFBLOCK);
            doc.add(par);

            //Some line breaks...
            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));

            //Clear the builder to build new strings...
            strBuilder.setLength(0);

            //Build the patient information as string.
            strBuilder
                    .append("Patient ID: ")
                    .append(disease.getPatient().getUserId())
                    .append("\n")
                    .append("Patient Name: ")
                    .append(disease.getPatient().getName())
                    .append("\n")
                    .append("Patient Surname: ")
                    .append(disease.getPatient().getSurname());

            Font timesFont = FontFactory.getFont(FontFactory.TIMES_BOLD, 10, BaseColor.BLACK);
            par = new Paragraph(strBuilder.toString(), timesFont);

            doc.add(par);

            //Some line breaks...
            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));


            //Clear the builder to build new strings...
            strBuilder.setLength(0);
            if(report.getReportType() == ReportType.DIAGNOSTIC)
                strBuilder.append("Diagnostic Report");
            else
                strBuilder.append("Pathologic Report");

            Font boldTimesFont = FontFactory.getFont(FontFactory.TIMES_BOLD, 14, BaseColor.BLACK);
            par = new Paragraph(strBuilder.toString(), boldTimesFont);
            par.setAlignment(Element.ALIGN_CENTER);

            doc.add(par);
            doc.add(new Paragraph("\n"));

            strBuilder.setLength(0);

            Font title2 = FontFactory.getFont(FontFactory.TIMES_BOLDITALIC, 12, BaseColor.BLACK);
            par = new Paragraph(report.getTitle(), title2);
            par.setAlignment(Element.ALIGN_CENTER);

            doc.add(par);
            doc.add(new Paragraph("\n"));

            strBuilder.setLength(0);

            Font detailsFont = FontFactory.getFont(FontFactory.TIMES, 10, BaseColor.BLACK);
            par = new Paragraph(report.getDetails(), detailsFont);
            par.setIndentationLeft(35);
            par.setIndentationRight(35);

            doc.add(par);

            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("\n"));

            User fileOwner = (report.getReportType() == ReportType.DIAGNOSTIC) ?
                    disease.getDoctor():
                    disease.getLabTechnician();

            strBuilder.append(fileOwner.getName())
                    .append(" ")
                    .append(fileOwner.getSurname())
                    .append("\n")
                    .append(fileOwner.getRole().toString());

            Font ownerFont = FontFactory.getFont(FontFactory.TIMES_BOLD, 12);
            par = new Paragraph(strBuilder.toString(), ownerFont);
            par.setAlignment(Element.ALIGN_RIGHT);
            doc.add(par);


            doc.close();

        }
        catch (Exception e){
            throw new ReportToOutputStreamConversionException(e.getMessage());
        }

        return byteArrayOutputStream;
    }

    @Override
    public ReportFile deConvert(OutputStream os) {
        return null;
    }
}
