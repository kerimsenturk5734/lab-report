package com.kerimsenturk.labreport.model.enums;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

public enum UserRole implements GrantedAuthority {

    ADMIN(Constants.ADMIN),
    PATIENT(Constants.PATIENT),
    LAB_TECHNICIAN(Constants.LAB_TECHNICIAN),
    DOCTOR(Constants.DOCTOR);

    @Component("ROLES")
    public static class Constants{
        public static final String ADMIN = "ADMIN";
        public static final String PATIENT = "PATIENT";
        public static final String LAB_TECHNICIAN = "LAB_TECHNICIAN";
        public static final String DOCTOR = "DOCTOR";
    }

    private final String roleName;

    UserRole(String roleName){
        this.roleName = roleName;
    }
    @Override
    public String getAuthority() {
        return this.roleName;
    }
}
