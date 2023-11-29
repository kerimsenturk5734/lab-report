package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.DiseaseDto;
import com.kerimsenturk.labreport.dto.request.CreateDiseaseRequest;
import com.kerimsenturk.labreport.service.DiseaseService;
import com.kerimsenturk.labreport.util.MessageBuilder;
import com.kerimsenturk.labreport.util.Result.SuccessDataResult;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/v1/api/diseases")
public class DiseaseController {
    private final DiseaseService diseaseService;
    private final MessageBuilder messageBuilder;

    public DiseaseController(DiseaseService diseaseService, MessageBuilder messageBuilder) {
        this.diseaseService = diseaseService;
        this.messageBuilder = messageBuilder;
    }

    @PostMapping("/createDisease")
    public ResponseEntity<?> createDisease(@RequestBody CreateDiseaseRequest createDiseaseRequest){
        int id = diseaseService.create(createDiseaseRequest);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/")
    public ResponseEntity<?> getDiseaseById(@RequestParam int id){
        //Get the disease by id
        DiseaseDto diseaseDto = diseaseService.getDiseaseById(id);

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.diseaseFoundById")
                        .params(id)
                        .build();

        //Place the userDto into Result wrapper object
        return ResponseEntity.ok(new SuccessDataResult<DiseaseDto>(diseaseDto, message));
    }

    @GetMapping("/getAllDiseases")
    public ResponseEntity<?> getAllDiseases(){
        //Get all diseases
        List<DiseaseDto> diseaseDtoList = diseaseService.getAllDiseases();

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.diseasesFounded")
                        .params(diseaseDtoList.size())
                        .build();

        //Place the diseases into Result wrapper object
        return ResponseEntity.ok(new SuccessDataResult<List<DiseaseDto>>(diseaseDtoList, message));
    }

    @GetMapping("/getDiseasesByPatientId")
    public ResponseEntity<?> getDiseasesByPatientId(@RequestParam String patientId){
        //Get related diseases
        List<DiseaseDto> diseaseDtoList = diseaseService.getDiseasesByPatientId(patientId);

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.diseasesFounded")
                        .params(diseaseDtoList.size())
                        .build();

        return ResponseEntity.ok(new SuccessDataResult<List<DiseaseDto>>(diseaseDtoList,message));
    }
    @GetMapping("/getDiseasesByDoctorId")
    public ResponseEntity<?> getDiseasesByDoctorId(@RequestParam String doctorId){
        //Get related diseases
        List<DiseaseDto> diseaseDtoList = diseaseService.getDiseasesByDoctorId(doctorId);

        //Create successful message
         /**
         *  TODO: Getting the messages is not good practise inside controller.
         *        Add new message resolver methods in /utils/result.class and exceptions
         *        --> New Formats following:
         *              new SuccessDataResult<>(T data, "{message.code}") or
         *              throw new BlaBlaException("{message.code}")
         */
        String message =
                messageBuilder
                        .code("formatted.diseasesFounded")
                        .params(diseaseDtoList.size())
                        .build();

        return ResponseEntity.ok(new SuccessDataResult<List<DiseaseDto>>(diseaseDtoList,message));
    }
    @GetMapping("/getDiseasesByLabTechnicianId")
    public ResponseEntity<?> getDiseasesByLabTechnicianId(@RequestParam String labTechnicianId){
        //Get related diseases
        List<DiseaseDto> diseaseDtoList = diseaseService.getDiseasesByLabTechnicianId(labTechnicianId);

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.diseasesFounded")
                        .params(diseaseDtoList.size())
                        .build();

        return ResponseEntity.ok(new SuccessDataResult<List<DiseaseDto>>(diseaseDtoList,message));
    }
}
