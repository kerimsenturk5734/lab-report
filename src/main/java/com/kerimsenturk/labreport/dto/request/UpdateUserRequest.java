package com.kerimsenturk.labreport.dto.request;

import java.util.Optional;

public record UpdateUserRequest(
        //User might be change only one field or few, not whole fields.
        //That is why these fields are optional
        Optional<String> username,
        Optional<String> name,
        Optional<String> surname,
        Optional<String> password) {
}
