package com.kerimsenturk.labreport.dto.validator;

import com.kerimsenturk.labreport.util.MessageBuilder;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.apache.commons.lang3.StringUtils;


public class HospitalPersonalIdValidator implements ConstraintValidator<HospitalPersonalIdValid, String> {

    private final MessageBuilder messageBuilder = new MessageBuilder();

    @Override
    public void initialize(HospitalPersonalIdValid constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        String message = messageBuilder
                .code("validation.unmatched.hospitalPersonalId")
                .build();

        context.disableDefaultConstraintViolation();
        context.buildConstraintViolationWithTemplate(message).addConstraintViolation();

        return (value.length() == 7) && (StringUtils.isNumeric(value));
    }
}
