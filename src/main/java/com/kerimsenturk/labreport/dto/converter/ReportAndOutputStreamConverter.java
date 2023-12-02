package com.kerimsenturk.labreport.dto.converter;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import com.kerimsenturk.labreport.exception.ReportToOutputStreamConversionException;
import com.kerimsenturk.labreport.model.Report;
import com.kerimsenturk.labreport.util.ObjectConverter.Convertable;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;


@Component
public class ReportAndOutputStreamConverter implements Convertable<Report, OutputStream> {
    @Override
    public OutputStream convert(Report report){
        Document doc = new Document();
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

        try{
            PdfWriter.getInstance(doc, byteArrayOutputStream);

            doc.open();

            //Add meta data
            doc.addTitle("My first PDF");
            doc.addSubject("Using iText");
            doc.addKeywords("Java, PDF, iText");
            doc.addAuthor("Lars Vogel");
            doc.addCreator("Lars Vogel");

            Font font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLACK);
            Chunk chunk = new Chunk("Hello World", font);
            doc.add(chunk);

            doc.close();

        }
        catch (Exception e){
            throw new ReportToOutputStreamConversionException(e.getMessage());
        }

        return byteArrayOutputStream;
    }

    @Override
    public Report deConvert(OutputStream os) {
        return null;
    }

}
