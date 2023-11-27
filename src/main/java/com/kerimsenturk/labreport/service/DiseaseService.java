package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.dto.DiseaseDto;
import com.kerimsenturk.labreport.dto.converter.DiseaseAndDiseaseDtoConverter;
import com.kerimsenturk.labreport.dto.converter.UserAndUserDtoConverter;
import com.kerimsenturk.labreport.dto.request.CreateDiseaseRequest;
import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.DiseaseState;
import com.kerimsenturk.labreport.repository.DiseaseRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DiseaseService {
    private final DiseaseRepository diseaseRepository;
    private final DiseaseAndDiseaseDtoConverter diseaseAndDiseaseDtoConverter;
    private final UserAndUserDtoConverter userAndUserDtoConverter;
    private final UserService userService;

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


}
