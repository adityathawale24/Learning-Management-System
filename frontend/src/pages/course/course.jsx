import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { courseService } from "../../api/course.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  // Handle youtu.be short links
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  // Handle youtube.com/watch?v=
  const longMatch = url.match(/[?&]v=([^&]+)/);
  if (longMatch) return `https://www.youtube.com/embed/${longMatch[1]}`;
  // Already an embed or other link — return as-is
  return url;
};

const Course = () => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const courseId = location.pathname.split("/")[2];

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await courseService.getCourseById(courseId);
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }
    fetchCourse();
  }, [courseId]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Something went wrong!</div>;

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/learnings")}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-4 rounded-lg shadow-2xl transition-all duration-200 hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faBackward} />
            Back
          </button>
          <div className="flex-1 mx-6">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-xl p-3 text-center shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-white italic">
                The Complete {course.course_name} Course – 2025 Edition
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={getYouTubeEmbedUrl(course.y_link)}
            title={course.course_name}
            width="100%"
            height="500px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="block"
          />
        </div>

        <div className="mt-8 bg-white shadow-2xl rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-semibold text-neutral">Description</h4>
          </div>
          <p className="text-gray-600 italic">{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;