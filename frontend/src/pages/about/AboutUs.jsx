import React from "react";
import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";

const members = [
  { name: "Rutuja", emoji: "👩‍💻", color: "from-pink-400 to-rose-500" },
  { name: "Gayatri", emoji: "👩‍🔬", color: "from-purple-400 to-indigo-500" },
  { name: "Amit", emoji: "👨‍💻", color: "from-blue-400 to-cyan-500" },
  { name: "Aditya", emoji: "👨‍🔧", color: "from-green-400 to-teal-500" },
  { name: "Prakash", emoji: "🎨", color: "from-orange-400 to-yellow-500" },
];

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar page="about" />

      <section className="relative py-20 px-6 text-center overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            About <span className="text-yellow-300">CDAC CMS</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            A Course Management System built with passion by a team of CDAC students.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Project</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            <strong>CDAC CMS</strong> is a full-featured Course Management System designed to help
            students enroll in courses, track progress, and earn certifications — all in one place.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Built as part of our CDAC curriculum at <strong>CDAC Kharghar, Navi Mumbai</strong>.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "Courses Available", value: "50+" },
              { label: "Students Enrolled", value: "500+" },
              { label: "Certifications Issued", value: "200+" },
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <p className="text-4xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="text-gray-500 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">Meet Our Team 👥</h2>
          <p className="text-gray-500 text-lg">The brilliant minds behind CDAC CMS</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 w-52 text-center border border-gray-100"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg`}>
                {member.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <div className={`mt-3 h-1 w-12 rounded-full bg-gradient-to-r ${member.color} mx-auto`} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Mission 🚀</h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            To make quality education accessible to everyone by providing a seamless,
            interactive, and engaging learning experience. We believe in the power of
            technology to transform education for the better.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
