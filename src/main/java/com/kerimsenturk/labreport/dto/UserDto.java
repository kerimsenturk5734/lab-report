package com.kerimsenturk.labreport.dto;

import com.kerimsenturk.labreport.model.enums.UserRole;

public class UserDto {
    String userId;
    String name;
    String surname;
    UserRole role;

    //We do not want to show secret information in JSON like password.
    //String password;

    public UserDto() {
    }

    public UserDto(String userId, String name, String surname, UserRole role) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.role = role;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}
