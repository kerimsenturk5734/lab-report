package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.dto.DiseaseDto;
import com.kerimsenturk.labreport.dto.converter.DiseaseAndDiseaseDtoConverter;
import com.kerimsenturk.labreport.dto.converter.UserAndUserDtoConverter;
import com.kerimsenturk.labreport.dto.request.CreateDiseaseRequest;

import com.kerimsenturk.labreport.exception.DiseaseNotFoundException;
import com.kerimsenturk.labreport.exception.InvalidUserRoleException;

import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.DiseaseState;
import com.kerimsenturk.labreport.model.enums.UserRole;
import com.kerimsenturk.labreport.repository.DiseaseRepository;
import com.kerimsenturk.labreport.util.MessageBuilder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DiseaseService {
    private final DiseaseRepository diseaseRepository;
    private final DiseaseAndDiseaseDtoConverter diseaseAndDiseaseDtoConverter;
    private final UserAndUserDtoConverter userAndUserDtoConverter;
    private final UserService userService;
    private final MessageBuilder messageBuilder = new MessageBuilder();

    public DiseaseService(DiseaseRepository diseaseRepository, DiseaseAndDiseaseDtoConverter diseaseAndDiseaseDtoConverter, UserAndUserDtoConverter userAndUserDtoConverter, UserService userService) {
        this.diseaseRepository = diseaseRepository;
        this.diseaseAndDiseaseDtoConverter = diseaseAndDiseaseDtoConverter;
        this.userAndUserDtoConverter = userAndUserDtoConverter;
        this.userService = userService;
    }

    public int create(CreateDiseaseRequest createDiseaseRequest){
        //Get patient, doctor, lab personal
        User patient = userAndUserDtoConverter
                .deConvert(userService.getUserById(createDiseaseRequest.patientId()));

        User doctor = userAndUserDtoConverter
                .deConvert(userService.getUserById(createDiseaseRequest.doctorId()));

        //Create new Disease object
        Disease disease = new Disease();

        /*
            TODO: A diseaseBuilder may be creatable to set fields easily.
         */

        //Set the necessary fields
        disease.setPatient(patient);
        disease.setDoctor(doctor);
        disease.setLabRequestType(createDiseaseRequest.labRequestType());
        disease.setDiseaseState(DiseaseState.WAITING_RESULTS);

        //Save it
        return diseaseRepository.save(disease).getId();
    }


    public DiseaseDto getDiseaseById(int id){
        //Get the optional disease
        Optional<Disease> diseaseOptional = diseaseRepository.findById(id);

        //Get error message
        String message =
                messageBuilder
                        .code("formatted.diseaseNotFoundById")
                        .params(id)
                        .build();

        //Check the is it present or not, else throw exception
        Disease disease = diseaseOptional.orElseThrow(() -> new DiseaseNotFoundException(message));

        //Convert the disease to diseaseDto and return the diseaseDto
        return diseaseAndDiseaseDtoConverter.convert(disease);
    }

    public List<DiseaseDto> getAllDiseases(){
        //Get all diseases
        List<Disease> diseaseList = diseaseRepository.findAll();

        //Convert them to dto object and return
        return convertToDtoList(diseaseList);
    }

    public List<DiseaseDto> getDiseasesByPatientId(String patientId){
        return getDiseasesByUserIdAndUserRole(patientId, UserRole.PATIENT);
    }

    public List<DiseaseDto> getDiseasesByDoctorId(String doctorId){
        return getDiseasesByUserIdAndUserRole(doctorId, UserRole.DOCTOR);
    }

    public List<DiseaseDto> getDiseasesByLabTechnicianId(String labTechnicianId){
        return getDiseasesByUserIdAndUserRole(labTechnicianId, UserRole.LAB_TECHNICIAN);
    }

    private List<DiseaseDto> getDiseasesByUserIdAndUserRole(String userId, UserRole userRole){
        switch (userRole){
            case PATIENT -> {
                //Get related diseases from repository layer
                List<Disease> diseaseList = diseaseRepository.getDiseasesByPatient_UserId(userId);

                //Convert them to dto object and return
                return convertToDtoList(diseaseList);
            }
            case DOCTOR -> {
                //Get related diseases from repository layer
                List<Disease> diseaseList = diseaseRepository.getDiseasesByDoctor_UserId(userId);

                //Convert them to dto object and return
                return convertToDtoList(diseaseList);
            }
            case LAB_TECHNICIAN -> {
                //Get related diseases from repository layer
                List<Disease> diseaseList = diseaseRepository.getDiseasesByLabTechnician_UserId(userId);

                //Convert them to dto object and return
                return convertToDtoList(diseaseList);
            }
            case ADMIN -> {}//It might be necessary later. Then implement it
            default -> throw new InvalidUserRoleException();
        }

        return Collections.emptyList();
    }

    private List<DiseaseDto> convertToDtoList(List<Disease> diseaseList){
        return diseaseList
                .stream()
                .map(diseaseAndDiseaseDtoConverter::convert)
                .collect(Collectors.toList());
    }
}
