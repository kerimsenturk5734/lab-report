package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.DiseaseDto;
import com.kerimsenturk.labreport.dto.request.CreateDiseaseRequest;
import com.kerimsenturk.labreport.dto.validator.HospitalPersonalIdValid;
import com.kerimsenturk.labreport.dto.validator.PatientIdValid;
import com.kerimsenturk.labreport.service.DiseaseService;
import com.kerimsenturk.labreport.util.MessageBuilder;
import com.kerimsenturk.labreport.util.Result.SuccessDataResult;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@SecurityRequirement(name = "Bearer Authentication")
@RestController
@RequestMapping("/v1/api/diseases")
@Validated
public class DiseaseController {
    private final DiseaseService diseaseService;
    private final MessageBuilder messageBuilder;

    public DiseaseController(DiseaseService diseaseService, MessageBuilder messageBuilder) {
        this.diseaseService = diseaseService;
        this.messageBuilder = messageBuilder;
    }

    @PreAuthorize("hasAnyAuthority(@ROLES.ADMIN, @ROLES.DOCTOR)")
    @PostMapping("/createDisease")
    public ResponseEntity<?> createDisease(@Valid @RequestBody CreateDiseaseRequest createDiseaseRequest){
        int id = diseaseService.create(createDiseaseRequest);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PreAuthorize("hasAuthority(@ROLES.ADMIN)")
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

    @PreAuthorize("hasAuthority(@ROLES.ADMIN)")
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

    @PreAuthorize("hasAnyAuthority(@ROLES.ADMIN, @ROLES.PATIENT)")
    @GetMapping("/getDiseasesByPatientId")
    public ResponseEntity<?> getDiseasesByPatientId(@PatientIdValid @RequestParam String patientId){
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

    @PreAuthorize("hasAnyAuthority(@ROLES.ADMIN, @ROLES.DOCTOR)")
    @GetMapping("/getDiseasesByDoctorId")
    public ResponseEntity<?> getDiseasesByDoctorId(@HospitalPersonalIdValid @RequestParam String doctorId){
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
    @PreAuthorize("hasAnyAuthority(@ROLES.ADMIN, @ROLES.LAB_TECHNICIAN)")
    @GetMapping("/getDiseasesByLabTechnicianId")
    public ResponseEntity<?> getDiseasesByLabTechnicianId(@HospitalPersonalIdValid @RequestParam String labTechnicianId){
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
