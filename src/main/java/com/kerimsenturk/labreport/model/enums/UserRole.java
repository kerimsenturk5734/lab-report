package com.kerimsenturk.labreport.model.enums;

import org.springframework.security.core.GrantedAuthority;

public enum UserRole implements GrantedAuthority {

    ADMIN("ADMIN"),
    PATIENT("PATIENT"),
    LAB_TECHNICIAN("LAB_TECHNICIAN"),
    DOCTOR("DOCTOR");

    private final String roleName;
    UserRole(String roleName){
        this.roleName = roleName;
    }

    @Override
    public String getAuthority() {
        return this.roleName;
    }
}
