package com.lms.dev.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.lms.dev.dto.EnrollRequest;
import com.lms.dev.entity.Course;
import com.lms.dev.entity.Learning;
import com.lms.dev.entity.User;
import com.lms.dev.repository.CourseRepository;
import com.lms.dev.repository.LearningRepository;
import com.lms.dev.repository.UserRepository;
import java.util.*;

@RequiredArgsConstructor
@Service
public class LearningService {

    private final LearningRepository learningRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    public List<Course> getLearningCourses(UUID userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            List<Course> learningCourses = new ArrayList<>();
            for (Learning learning : user.getLearningCourses()) {
                learningCourses.add(learning.getCourse());
            }
            return learningCourses;
        }
        return null;
    }

    public List<Learning> getEnrollments() {
        return learningRepository.findAll();
    }

    public String enrollCourse(EnrollRequest enrollRequest) {
        User user = userRepository.findById(enrollRequest.getUserId()).orElse(null);
        Course course = courseRepository.findById(enrollRequest.getCourseId()).orElse(null);

        if (user != null && course != null) {
            Learning existingLearning = learningRepository.findByUserAndCourse(user, course);
            if (existingLearning != null) {
                return "Course already enrolled";
            }
            Learning learning = new Learning();
            learning.setUser(user);
            learning.setCourse(course);
            learningRepository.save(learning);
            return "Enrolled successfully";
        }
        return "Failed to enroll";
    }

    public void unenrollCourse(UUID id) {
        learningRepository.deleteById(id);
    }
}

