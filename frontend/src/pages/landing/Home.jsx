import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";
import { faGraduationCap, faAward, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import c1 from "../../assets/images/c1.jpg";
import c2 from "../../assets/images/html.png";
import c3 from "../../assets/images/sql.jpg";
import c4 from "../../assets/images/python.jpg";
import c5 from "../../assets/images/java.png";
import c6 from "../../assets/images/css.png";
import bannerImg from "../../assets/images/home-banner.png";

function Home() {
  const navigate = useNavigate();

  const courses = [
    { id: 1, title: "JavaScript Beginner Course", img: c1, price: 499 },
    { id: 2, title: "HTML Complete Course", img: c2, price: 499 },
    { id: 3, title: "SQL Beginner Course", img: c3, price: 499 },
    { id: 4, title: "Python Master Course", img: c4, price: 499 },
    { id: 5, title: "Java Essentials", img: c5, price: 499 },
    { id: 6, title: "CSS Complete Course", img: c6, price: 499 },
  ];

  const featureData = [
    {
      icon: faGraduationCap,
      title: "Scholarship Facility",
      desc: "Originality is the essence of true scholarship.",
      color: "primary"
    },
    {
      icon: faStar,
      title: "Valuable Courses",
      desc: "Online education is like a rising tide—it lifts all boats.",
      color: "warning"
    },
    {
      icon: faAward,
      title: "Global Certification",
      desc: "A certificate without knowledge is like a gun without bullets.",
      color: "accent"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar page="home" />

      {/* Hero Section */}
      <section className="relative text-center px-6 h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="EduVerse Banner"
            className="w-full h-full object-cover blur-md opacity-80 brightness-50"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6 text-gray-100 animate-fadeInUp">
            Enhance your future with <br />
            <span className="sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-white">
              CDAC CMS
            </span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl animate-fadeInUp delay-200">
            Unlock your potential with hundreds of courses, certifications, and skills to grow your career.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fadeInUp delay-400">
            <button
              onClick={() => navigate("/courses")}
              className="px-6 py-3 rounded-xl bg-warning/80 text-black font-semibold hover:bg-warning transition"
            >
              Explore Courses
            </button>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Awesome Features</h1>
        <p className="text-gray-600 mb-10">Chance to enhance yourself</p>
        <div className="grid md:grid-cols-3 gap-8 md:px-24">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className={`text-${feature.color}-500 text-4xl text-warning-dark mb-4`}
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="course" className="px-6 py-16 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-4">
          Our Popular Courses
        </h1>
        <p className="text-gray-600 text-center mb-10">10,000+ enrolled</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-24">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h6 className="text-lg font-semibold mb-2">{course.title}</h6>
                <div className="flex items-center text-warning mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                  <span className="ml-2 text-gray-500">(239)</span>
                </div>
                <div className="text-primary font-bold">
                  ₹{course.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default Home;
