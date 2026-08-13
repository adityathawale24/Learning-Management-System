package com.lms.dev.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.lms.dev.entity.User;
import com.lms.dev.repository.UserRepository;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        // FIX: Password field ko null karo — security leak tha (password hash bhi expose nahi hona chahiye)
        users.forEach(u -> u.setPassword(null));
        return users;
    }

    public User getUserById(UUID id) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) user.setPassword(null); // FIX: password hide karo
        return user;
    }

    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public void updateUserProfile(MultipartFile file, UUID id) throws IOException {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) return;
        user.setProfileImage(file.getBytes());
        userRepository.save(user);
    }

    public User updateUser(UUID id, User updatedUser) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setDob(updatedUser.getDob());
            existingUser.setMobileNumber(updatedUser.getMobileNumber());
            existingUser.setGender(updatedUser.getGender());
            existingUser.setLocation(updatedUser.getLocation());
            existingUser.setProfession(updatedUser.getProfession());
            existingUser.setLinkedin_url(updatedUser.getLinkedin_url());
            existingUser.setGithub_url(updatedUser.getGithub_url());
            if (updatedUser.getIsActive() != null)
                existingUser.setIsActive(updatedUser.getIsActive());
            if (updatedUser.getRole() != null)
                existingUser.setRole(updatedUser.getRole());
            return userRepository.save(existingUser);
        }
        return null;
    }
    
    public User getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) user.setPassword(null); // FIX: password hide karo
        return user;
    }

    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }
}

