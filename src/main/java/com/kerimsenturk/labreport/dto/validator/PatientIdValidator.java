package com.kerimsenturk.labreport.dto.validator;

import com.kerimsenturk.labreport.util.MessageBuilder;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.apache.commons.lang3.StringUtils;

public class PatientIdValidator implements ConstraintValidator<PatientIdValid, String> {
    private final MessageBuilder messageBuilder = new MessageBuilder();



    @Override
    public void initialize(PatientIdValid constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String val, ConstraintValidatorContext context) {

        String message = messageBuilder
                .code("validation.unmatched.patientId")
                .build();

        context.disableDefaultConstraintViolation();
        context.buildConstraintViolationWithTemplate(message).addConstraintViolation();

        return (val != null) && (val.length() == 11) && (StringUtils.isNumeric(val));
    }
}
