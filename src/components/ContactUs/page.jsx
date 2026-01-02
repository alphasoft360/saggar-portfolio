import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import data from "../../data.json";

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

  const whatsappNumber = data.profile.contact.phone.replace(/[^0-9]/g, '');

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
                  {data.profile.bio}
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
                      {data.profile.contact.address}
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
                    <a
                      href={`mailto:${data.profile.contact.email}`}
                      className="text-gray-900 font-medium hover:text-purple-600 transition-colors"
                    >
                      {data.profile.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-900 font-medium hover:text-purple-600 transition-colors"
                    >
                      {data.profile.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-3 pt-6">
                <a
                  href={data.profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-gray-200 hover:bg-purple-600 hover:border-purple-600 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-purple-600 group-hover:text-white" />
                </a>

                <a
                  href={data.profile.socials.github}
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
