package com.kerimsenturk.labreport;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class LabReportManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LabReportManagerApplication.class, args);
	}

}
