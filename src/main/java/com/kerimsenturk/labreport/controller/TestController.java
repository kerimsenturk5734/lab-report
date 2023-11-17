package com.kerimsenturk.labreport.controller;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.util.List;

@RestController
@RequestMapping("v1/api/test")
public class TestController {
    private final JdbcTemplate jdbcTemplate;

    public TestController(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
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


}
