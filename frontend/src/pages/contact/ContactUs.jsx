import React, { useState } from "react";
import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar page="contact" />

      <section className="relative py-20 px-6 text-center bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Contact <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
            <p className="text-gray-500 text-lg">
              Reach out to us for any queries related to courses, enrollment, or technical issues.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email</p>
                  <p className="text-gray-700 font-semibold">support@cdaccms.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Phone</p>
                  <p className="text-gray-700 font-semibold">+91 22 2756 0290</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Address</p>
                  <p className="text-gray-700 font-semibold">CDAC Kharghar, Sector 7, Kharghar, Navi Mumbai, Maharashtra 410210</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mt-6">
              <iframe
                title="CDAC Kharghar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d73.0697!3d19.0477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c247c2e2e3e3%3A0x1234567890abcdef!2sCDAC%20Kharghar!5e0!3m2!1sen!2sin!4v1620000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message ✉️</h2>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 text-green-700">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Subject</label>
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange} required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
