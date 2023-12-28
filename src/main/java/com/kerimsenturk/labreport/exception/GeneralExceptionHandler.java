package com.kerimsenturk.labreport.exception;

import com.kerimsenturk.labreport.exception.AlreadyExist.ReportAlreadyExistForException;
import com.kerimsenturk.labreport.exception.AlreadyExist.UserAlreadyExistException;
import com.kerimsenturk.labreport.exception.NotFound.DiseaseNotFoundException;
import com.kerimsenturk.labreport.exception.NotFound.ReportFileNotFoundException;
import com.kerimsenturk.labreport.exception.NotFound.ReportNotFoundException;
import com.kerimsenturk.labreport.exception.NotFound.UserNotFoundException;
import com.kerimsenturk.labreport.util.Result.ErrorResult;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.beanvalidation.MethodValidationPostProcessor;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestControllerAdvice
public class GeneralExceptionHandler extends ResponseEntityExceptionHandler {

    //This method handles validation exceptions and returns a message related to the incorrect fields
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatusCode status,
                                                                  WebRequest request) {

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach(error ->{
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();

            errors.put(fieldName, errorMessage);
        });

        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {UserAlreadyExistException.class, ReportAlreadyExistForException.class})
    protected ResponseEntity<Object> handleConflict(RuntimeException ex, WebRequest request) {
        return handleExceptionInternal(ex, new ErrorResult(ex.getMessage()), new HttpHeaders(), HttpStatus.CONFLICT, request);
    }

    @ExceptionHandler(
            value = {
                    UserNotFoundException.class,
                    DiseaseNotFoundException.class,
                    ReportNotFoundException.class,
                    ReportFileNotFoundException.class})
    protected ResponseEntity<Object> handleNotFound(RuntimeException ex, WebRequest request) {
        return handleExceptionInternal(ex, new ErrorResult(ex.getMessage()), new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }

    @ExceptionHandler(value = {ReportFileCreationException.class, ReportFileWritingException.class, ReportToOutputStreamConversionException.class})
    protected ResponseEntity<Object> handleExceptionInternal(RuntimeException ex, WebRequest request) {
        return handleExceptionInternal(ex, new ErrorResult(ex.getMessage()), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR, request);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Object> handle(ConstraintViolationException constraintViolationException) {
        Set<ConstraintViolation<?>> violations = constraintViolationException.getConstraintViolations();
        String errorMessage;
        if (!violations.isEmpty()) {
            StringBuilder builder = new StringBuilder();

            violations.forEach(violation -> {
                String[] paramNamePathSplit = violation.getPropertyPath()
                        .toString().split("\\.");

                String paramName = paramNamePathSplit[paramNamePathSplit.length-1];
                builder
                        .append('"').append(paramName).append('"')
                        .append(" : ")
                        .append('"').append(violation.getMessage()).append('"');
            });


            errorMessage = builder.toString();
        } else {
            errorMessage = "ConstraintViolationException occurred.";
        }
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }

    @Bean
    public MethodValidationPostProcessor methodValidationPostProcessor() {
        return new MethodValidationPostProcessor();
    }


}
