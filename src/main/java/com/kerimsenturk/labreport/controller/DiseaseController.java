package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.request.CreateDiseaseRequest;
import com.kerimsenturk.labreport.service.DiseaseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/v1/api/diseases")
public class DiseaseController {
    private final DiseaseService diseaseService;

    public DiseaseController(DiseaseService diseaseService) {
        this.diseaseService = diseaseService;
    }

    @PostMapping("/createDisease")
    public ResponseEntity<?> createDisease(@RequestBody CreateDiseaseRequest createDiseaseRequest){
        int id = diseaseService.create(createDiseaseRequest);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
        return ResponseEntity.created(uri).build();
    }

}
