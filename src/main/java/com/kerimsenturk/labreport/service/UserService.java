package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.auth.JwtTokenManager;
import com.kerimsenturk.labreport.auth.UserDetailsServiceCustom;
import com.kerimsenturk.labreport.dto.UserDto;
import com.kerimsenturk.labreport.dto.converter.UserAndUserDtoConverter;
import com.kerimsenturk.labreport.dto.response.UserLoginResponse;
import com.kerimsenturk.labreport.exception.AlreadyExist.UserAlreadyExistException;
import com.kerimsenturk.labreport.dto.request.CreateUserRequest;
import com.kerimsenturk.labreport.dto.request.PatientCreateRequest;
import com.kerimsenturk.labreport.dto.request.UpdateUserRequest;
import com.kerimsenturk.labreport.dto.request.UserLoginRequest;
import com.kerimsenturk.labreport.exception.NotFound.UserNotFoundException;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.UserRole;
import com.kerimsenturk.labreport.repository.UserRepository;
import com.kerimsenturk.labreport.util.MessageBuilder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.token.Token;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserAndUserDtoConverter userAndUserDtoConverter;
    private final MessageBuilder messageBuilder = new MessageBuilder();

    //-----------Security injections Start-------
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenManager jwtTokenManager;

    //-------------------End---------------------

    public UserService(UserRepository userRepository, UserAndUserDtoConverter userAndUserDtoConverter,
                       PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager,
                       JwtTokenManager jwtTokenManager) {

        this.userRepository = userRepository;
        this.userAndUserDtoConverter = userAndUserDtoConverter;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtTokenManager = jwtTokenManager;
    }

    public String registerPatient(PatientCreateRequest patientCreateRequest){
        return
            register(
                    new CreateUserRequest(
                            patientCreateRequest.userId(),
                            patientCreateRequest.name(),
                            patientCreateRequest.surname(),
                            patientCreateRequest.password(),
                            UserRole.PATIENT));
    }

    public String register(CreateUserRequest createUserRequest){
        //Firstly check the userId is existing
        if(userRepository.existsById(createUserRequest.userId())){
            //Get error message
            String message =
                    messageBuilder
                            .code("formatted.userAlreadyExist")
                            .params(createUserRequest.userId())
                            .build();

            throw new UserAlreadyExistException(message);
        }

        //Create new user
        User newUser = new User(
                createUserRequest.userId(),
                createUserRequest.name(),
                createUserRequest.surname(),
                passwordEncoder.encode(createUserRequest.password()),
                createUserRequest.userRole());

        //Save the user inside the db
        return userRepository.save(newUser).getUserId();
    }

    public UserLoginResponse login(UserLoginRequest userLoginRequest){
        Authentication auth = authenticationManager
                .authenticate(new
                        UsernamePasswordAuthenticationToken(userLoginRequest.userId(), userLoginRequest.password()));

        if(auth.isAuthenticated())
            return new UserLoginResponse(
                    jwtTokenManager.generate(userLoginRequest.userId()), getUserById(userLoginRequest.userId()));

        throw new UsernameNotFoundException("User Id or password incorrect");
    }

    public String updateUser(UpdateUserRequest updateUserRequest, String authHeader){
        //Parse token from 'Authorization' header
        String token = authHeader.substring(7);

        //Extract user by using token
        String userId = Optional.of(jwtTokenManager.extractUser(token)).orElse("");

        //String userId = updateUserRequest.username().orElse("");
        //Call getUserById to handle UserNotFoundException
        //If there is not an error at this line now we can get the real user
        getUserById(userId);

        //Get the real user object
        //No need to check is it present or not because getUserById() did it above line
        User user = getRawUserById(userId).get();

        //Update the object
        //If fields not present in updateRequest, don't change the fields
        user.setName(updateUserRequest.name().orElse(user.getName()));
        user.setSurname(updateUserRequest.surname().orElse(user.getSurname()));

        //Set don't updated password as initial this pwd already encrypted
        String pwd = user.getPassword();

        //Encrypt the raw password coming from optional if presents
        if(updateUserRequest.password().isPresent())
            pwd = passwordEncoder.encode(updateUserRequest.password().get());

        user.setPassword(pwd);

        //return updated userId
        return userRepository.save(user).getUserId();
    }

    public UserDto getUserById(String id){
        Optional<User> userOptional = userRepository.findById(id);

        //Get error message
        String message =
                messageBuilder
                        .code("formatted.userNotFoundById")
                        .params(id)
                        .build();

        //If it is present convert to dto object else throw exception
        //return converted UserDto
        return userAndUserDtoConverter
                .convert(userOptional.orElseThrow(() -> new UserNotFoundException(message)));
    }
    public Optional<User> getRawUserById(String id){
        return userRepository.findById(id);
    }

    public List<UserDto> getAllUsers(){
        //Get all users
        List<User> userList = userRepository.findAll();

        //Convert them to dto object and return
        return userList
                .stream()
                .map(userAndUserDtoConverter::convert)
                .collect(Collectors.toList());
    }

    public boolean isTokenValid(String tokenKey){
        return  jwtTokenManager.validate(tokenKey);
    }
}
