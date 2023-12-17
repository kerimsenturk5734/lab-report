package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.DiseaseDto;
import com.kerimsenturk.labreport.dto.ReportDto;
import com.kerimsenturk.labreport.dto.UserDto;
import com.kerimsenturk.labreport.dto.converter.DiseaseAndDiseaseDtoConverter;
import com.kerimsenturk.labreport.dto.converter.ReportAndReportDtoConverter;
import com.kerimsenturk.labreport.dto.converter.UserAndUserDtoConverter;
import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.model.Report;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.UserRole;
import com.kerimsenturk.labreport.repository.DiseaseRepository;
import com.kerimsenturk.labreport.repository.ReportRepository;
import com.kerimsenturk.labreport.repository.UserRepository;
import com.kerimsenturk.labreport.service.ReportFileManager;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.sql.DataSource;
import java.util.List;

@RequestMapping("v1/api/test")
public class TestController {
    private final JdbcTemplate jdbcTemplate;
    private final UserRepository userRepository;
    private final UserAndUserDtoConverter userAndUserDtoConverter;
    private final DiseaseAndDiseaseDtoConverter diseaseAndDiseaseDtoConverter;
    private final DiseaseRepository diseaseRepository;
    private final ReportRepository reportRepository;
    private final ReportAndReportDtoConverter reportAndReportDtoConverter;
    private final ReportFileManager reportFileManager;
    public TestController(DataSource dataSource, UserRepository userRepository, UserAndUserDtoConverter userAndUserDtoConverter, DiseaseAndDiseaseDtoConverter diseaseAndDiseaseDtoConverter, DiseaseRepository diseaseRepository, ReportRepository reportRepository, ReportAndReportDtoConverter reportAndReportDtoConverter, ReportFileManager reportFileManager) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.userRepository = userRepository;
        this.userAndUserDtoConverter = userAndUserDtoConverter;
        this.diseaseAndDiseaseDtoConverter = diseaseAndDiseaseDtoConverter;
        this.diseaseRepository = diseaseRepository;
        this.reportRepository = reportRepository;
        this.reportAndReportDtoConverter = reportAndReportDtoConverter;
        this.reportFileManager = reportFileManager;
    }

    @RequestMapping("/")
    public String test(){
        return "Hello Lab Report Manager Users";
    }
    @RequestMapping("/getAllDiseases")
    public List<?> getAllDiseasesTest(){
        return jdbcTemplate.queryForList("select id from diseases", Integer.class);
    }

    @RequestMapping("/getAllUsers")
    public List<?> getAllUsersTest(){
        return jdbcTemplate.queryForList("select user_id from users", String.class);
    }

    @RequestMapping("/converter/userAndUserDtoConvertTest")
    public UserDto userAndUserDtoConverterTest(){
        User user = userRepository.findById("65458165404").get();
        return userAndUserDtoConverter.convert(user);
    }

    @RequestMapping("/converter/userAndUserDtoDeConvertTest")
    public User userAndUserDtoDeConvertTest(){
        UserDto userDto = new UserDto("12345678900", "Utku", "Aksoy", UserRole.PATIENT);
        return userAndUserDtoConverter.deConvert(userDto);
    }

    @RequestMapping("/converter/reportAndReportDtoConvertTest")
    public ReportDto reportAndReportDtoConvertTest(){
        Report report = reportRepository.findById("55666491440_19-11-23").get();
        return reportAndReportDtoConverter.convert(report);
    }

    @RequestMapping("/converter/reportAndReportDtoDeConvertTest")
    public Report reportAndReportDtoDeConvertTest(){
        Report report = reportRepository.findById("55666491440_19-11-23").get();
        ReportDto reportDto = reportAndReportDtoConverter.convert(report);
        return reportAndReportDtoConverter.deConvert(reportDto);
    }

    @RequestMapping("/converter/diseaseAndDiseaseDtoConvertTest")
    public DiseaseDto diseaseAndDiseaseDtoConvertTest(){
        Disease disease = diseaseRepository.findById(1).get();
        return diseaseAndDiseaseDtoConverter.convert(disease);
    }


    @RequestMapping("/converter/diseaseAndDiseaseDtoDeConvertTest")
    public Disease diseaseAndDiseaseDtoDeConvertTest(){
        Disease disease = diseaseRepository.findById(1).get();
        DiseaseDto diseaseDto = diseaseAndDiseaseDtoConverter.convert(disease);
        return diseaseAndDiseaseDtoConverter.deConvert(diseaseDto);
    }

}
