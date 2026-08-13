package com.lms.dev.repository;

import com.lms.dev.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.dev.entity.User;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

	User findByEmail(String email);

    boolean existsByRole(UserRole role);

    // NOTE: findByEmailAndPassword removed — plain text password comparison dangerous hai.
    // Authentication Spring Security BCrypt se hoti hai AuthController mein.
}
