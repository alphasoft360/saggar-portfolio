import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";

/* =========================
   PROFILE DATA
========================= */
const profileData = {
  name: "Saggar Farid",
  role: "Senior Software Engineer | Technical Lead - Alphasoft360",
  bio: "Senior Software Engineer and Technical Lead with extensive experience in full-stack development, backend architecture, and delivering enterprise and freelance solutions for global platforms.",
  contact: {
    email: "Saggar.farid@gmail.com",
    phone: "+92-304-7527264",
    address: "Pakistan",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/saggar-farid-6811b3111/",
    github: "https://github.com/gaftaaus",
  },
};

/* =========================
   COMPONENT
========================= */
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Let&apos;s discuss your Project
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  {profileData.bio}
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-6 pt-4">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-900 font-medium">
                      {profileData.contact.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-medium">
                      {profileData.contact.email}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900 font-medium">
                      {profileData.contact.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-3 pt-6">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-gray-200 hover:bg-purple-600 hover:border-purple-600 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-purple-600 group-hover:text-white" />
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-gray-200 hover:bg-purple-600 hover:border-purple-600 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Github className="w-5 h-5 text-purple-600 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="space-y-6">
              <p className="text-gray-500 leading-relaxed">
                I&apos;m always open to discussing enterprise software, backend
                systems, or freelance opportunities.
              </p>

              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 border-b border-gray-300 focus:border-purple-600 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 border-b border-gray-300 focus:border-purple-600 outline-none"
              />

              <input
                type="text"
                name="location"
                placeholder="Location*"
                value={formData.location}
                onChange={handleChange}
                className="w-full py-3 border-b border-gray-300 focus:border-purple-600 outline-none"
              />

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget*"
                  value={formData.budget}
                  onChange={handleChange}
                  className="py-3 border-b border-gray-300 focus:border-purple-600 outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className="py-3 border-b border-gray-300 focus:border-purple-600 outline-none"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message*"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full py-3 border-b border-gray-300 focus:border-purple-600 outline-none resize-none"
              />

              <button
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Submit Message
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
