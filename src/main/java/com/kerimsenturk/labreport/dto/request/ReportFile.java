package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.model.Report;

public record ReportFile(Report report, Disease disease) {
}
