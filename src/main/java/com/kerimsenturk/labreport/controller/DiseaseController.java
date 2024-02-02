package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.DiseaseDto;
import com.kerimsenturk.labreport.dto.request.CreateDiseaseRequest;
import com.kerimsenturk.labreport.dto.validator.HospitalPersonalIdValid;
import com.kerimsenturk.labreport.dto.validator.PatientIdValid;
import com.kerimsenturk.labreport.model.enums.ReportType;
import com.kerimsenturk.labreport.service.DiseaseService;
import com.kerimsenturk.labreport.util.MessageBuilder;
import com.kerimsenturk.labreport.util.Result.SuccessDataResult;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
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
@CrossOrigin
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
    @GetMapping("/{id}")
    public ResponseEntity<?> getDiseaseById(@PathVariable int id){
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
    @GetMapping("/getDiseasesByPatientId/{patientId}")
    public ResponseEntity<?> getDiseasesByPatientId(@PathVariable @PatientIdValid String patientId){
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
    @GetMapping("/getDiseasesByDoctorId/{doctorId}")
    public ResponseEntity<?> getDiseasesByDoctorId(@HospitalPersonalIdValid @PathVariable String doctorId){
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
    @GetMapping("/getDiseasesByLabTechnicianId/{labTechnicianId}")
    public ResponseEntity<?> getDiseasesByLabTechnicianId(@HospitalPersonalIdValid @PathVariable String labTechnicianId){
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

    @GetMapping("/getActiveDiseases")
    @PreAuthorize("hasAnyAuthority(@ROLES.ADMIN, @ROLES.LAB_TECHNICIAN)")
    public ResponseEntity<?> getActiveDiseases(){
        //Get related diseases
        List<DiseaseDto> diseaseDtoList = diseaseService.getActiveDiseases();

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.diseasesFounded")
                        .params(diseaseDtoList.size())
                        .build();

        return ResponseEntity.ok(new SuccessDataResult<List<DiseaseDto>>(diseaseDtoList,message));
    }

    @PreAuthorize("hasAnyAuthority(@ROLES.ADMIN, @ROLES.LAB_TECHNICIAN)")
    @DeleteMapping("/deletePathologicalReportOf/{diseaseId}")
    public ResponseEntity<?> deletePathologicalReportOf(@PathVariable int diseaseId) {
        diseaseService.deleteReportOf(diseaseId, ReportType.PATHOLOGICAL);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PreAuthorize("hasAnyAuthority(@ROLES.ADMIN, @ROLES.DOCTOR)")
    @DeleteMapping("/deleteDiagnosticReportOf/{diseaseId}")
    public ResponseEntity<?> deleteDiagnosticReportOf(@PathVariable int diseaseId) {
        diseaseService.deleteReportOf(diseaseId, ReportType.DIAGNOSTIC);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
