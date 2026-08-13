import React, { useState, useEffect } from "react";
import Navbar from "../../Components/common/Navbar";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { courseService } from "../../api/course.service";
import { learningService } from "../../api/learning.service";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("id");
  const authToken = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesRes = await courseService.getAllCourses();
        if (coursesRes.success) setCourses(coursesRes.data);

        if (userId) {
          const enrollmentsRes = await learningService.getEnrollments(userId);
          if (enrollmentsRes.success) {
            setEnrolled(enrollmentsRes.data.map((item) => item.course_id));
          }
        }
      } catch (err) {
        console.error("Error loading courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  const enrollCourse = async (courseId) => {
    if (!authToken) {
      message.error("You need to login to continue");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }
    const res = await learningService.enrollCourse(userId, courseId);
    if (res.success && res.data === "Enrolled successfully") {
      message.success("Course Enrolled successfully");
      setTimeout(() => navigate(`/course/${courseId}`), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar page="courses" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : courses.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-64 text-center">
            <p className="text-gray-500 text-lg mb-2">No courses found</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.course_id}
                className="bg-white rounded-2xl shadow-lg border-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.p_link}
                    alt={course.course_name}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      ₹{course.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {course.course_name.length < 8 ? `${course.course_name} Tutorial` : course.course_name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-6 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    by {course.instructor}
                  </p>

                  {enrolled.includes(course.course_id) ? (
                    <button
                      onClick={() => navigate("/learnings")}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 font-semibold hover:from-green-100 hover:to-emerald-100 transition-all duration-200 border border-green-200 shadow-md hover:shadow-lg"
                    >
                      ✓ Enrolled
                    </button>
                  ) : (
                    <button
                      onClick={() => enrollCourse(course.course_id)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Enroll Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
