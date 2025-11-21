'use client';

import { useState } from 'react';

export default function ForJobSeekers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    desiredRole: '',
    yearsExperience: '',
    availability: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Mock file validation - just check if file is selected
    if (e.target.files && e.target.files[0]) {
      console.log('File selected:', e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/job-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          desiredRole: '',
          yearsExperience: '',
          availability: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#D6ECFF] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A3D62]">Apply as a Job Seeker</h1>
          <p className="text-xl text-[#0A3D62]">
            Join our team of dedicated healthcare professionals and make a difference
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-[#0A3D62] leading-relaxed">
            At Hands of Grace Health Staffing, we value our healthcare professionals and are 
            committed to providing rewarding career opportunities. We offer competitive compensation, 
            flexible scheduling, and ongoing support to help you succeed in your healthcare career.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📜',
                title: 'Certifications',
                description: 'Valid professional licenses and certifications relevant to your role (RN, LPN, PSW, etc.).',
              },
              {
                icon: '💼',
                title: 'Experience',
                description: 'Relevant healthcare experience in your field of expertise. We welcome both experienced and new professionals.',
              },
              {
                icon: '🔒',
                title: 'Background Check',
                description: 'Successful completion of background checks and reference verification.',
              },
            ].map((requirement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{requirement.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{requirement.title}</h3>
                <p className="text-[#0A3D62]">{requirement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Benefits of Working with Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📅',
                title: 'Flexible Scheduling',
                description: 'Choose shifts that work with your lifestyle. We offer day, evening, night, and weekend options.',
              },
              {
                icon: '💰',
                title: 'Competitive Pay',
                description: 'We offer competitive compensation packages that reflect your skills and experience.',
              },
              {
                icon: '📈',
                title: 'Professional Development',
                description: 'Access to training opportunities and career growth support to advance your healthcare career.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#F7F8FA] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{benefit.title}</h3>
                <p className="text-[#0A3D62]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Form */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">Job Application Form</h2>
          <p className="text-center text-[#0A3D62] mb-8">
            Fill out the form below to apply for a position with Hands of Grace Health Staffing. 
            We'll review your application and get back to you soon.
          </p>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Thank you! Your application has been submitted successfully. We'll review it and contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="desiredRole" className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Role *
                </label>
                <select
                  id="desiredRole"
                  name="desiredRole"
                  required
                  value={formData.desiredRole}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                >
                  <option value="">Select role</option>
                  <option value="RN">Registered Nurse (RN)</option>
                  <option value="LPN">Licensed Practical Nurse (LPN)</option>
                  <option value="PSW">Personal Support Worker (PSW)</option>
                  <option value="NA">Nursing Assistant</option>
                  <option value="HHA">Home Health Aide</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  type="number"
                  id="yearsExperience"
                  name="yearsExperience"
                  required
                  min="0"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload CV (Optional)
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                Availability *
              </label>
              <textarea
                id="availability"
                name="availability"
                rows={3}
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BBBAD] focus:border-transparent"
                placeholder="Please describe your availability (e.g., days, times, flexibility)..."
              />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BBBAD] focus:border-transparent"
                placeholder="Tell us about yourself, your experience, and why you'd like to join our team..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-[#1B9CFC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A3D62] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

