package com.kerimsenturk.labreport.dto.validator;

import com.kerimsenturk.labreport.util.MessageBuilder;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.apache.commons.lang3.StringUtils;

public class UserIdValidator implements ConstraintValidator<UserIdValid, String> {
    private final MessageBuilder messageBuilder = new MessageBuilder();

    @Override
    public void initialize(UserIdValid constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String val, ConstraintValidatorContext context) {
        String message = messageBuilder
                .code("validation.unmatched.userId")
                .build();

        context.disableDefaultConstraintViolation();
        context.buildConstraintViolationWithTemplate(message).addConstraintViolation();

        return (StringUtils.isNumeric(val)) & ((val.length() == 11) || (val.length() == 7))  ;
    }
}
