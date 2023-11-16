package com.kerimsenturk.labreport.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/api/test")
public class TestController {
    @RequestMapping("/")
    public String test(){
        return "Hello Lab Report Manager Users";
    }
}
