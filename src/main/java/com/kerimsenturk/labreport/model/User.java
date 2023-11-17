package com.kerimsenturk.labreport.model;

import com.kerimsenturk.labreport.model.enums.UserRole;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "user_id")
    String userId;
    @Column(name = "name")
    String name;
    @Column(name = "surname")
    String surname;
    @Column(name = "password")
    String password;
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    UserRole role;

    public User() {
    }

    public User(String userId, String name, String surname, String password, UserRole role) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.password = password;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}
