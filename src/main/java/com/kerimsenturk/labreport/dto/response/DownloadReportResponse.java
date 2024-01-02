package com.kerimsenturk.labreport.dto.response;

import org.springframework.http.MediaType;

import java.io.InputStream;

public record DownloadReportResponse(InputStream in, String fileName, MediaType mediaType) {
}
