'use client';

import { useState } from 'react';

export default function ForEmployers() {
  const [staffRequestForm, setStaffRequestForm] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    staffType: '',
    location: '',
    shiftType: '',
    startDate: '',
    message: '',
  });

  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
  });

  const [staffRequestSubmitted, setStaffRequestSubmitted] = useState(false);
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [isSubmittingStaff, setIsSubmittingStaff] = useState(false);
  const [isSubmittingAppointment, setIsSubmittingAppointment] = useState(false);

  const handleStaffRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setStaffRequestForm({
      ...staffRequestForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleStaffRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingStaff(true);
    
    try {
      const response = await fetch('/api/employer-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffRequestForm),
      });

      if (response.ok) {
        setStaffRequestSubmitted(true);
        setStaffRequestForm({
          name: '',
          organisation: '',
          email: '',
          phone: '',
          staffType: '',
          location: '',
          shiftType: '',
          startDate: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmittingStaff(false);
    }
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingAppointment(true);
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentForm),
      });

      if (response.ok) {
        setAppointmentSubmitted(true);
        setAppointmentForm({
          name: '',
          organisation: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          reason: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmittingAppointment(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#D6ECFF] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A3D62]">For Employers</h1>
          <p className="text-xl text-[#0A3D62]">
            Connect with vetted healthcare professionals ready to serve your facility or home
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✅',
                title: 'Screened Candidates',
                description: 'All our healthcare professionals undergo thorough background checks, credential verification, and skills assessment.',
              },
              {
                icon: '🔄',
                title: 'Flexible Staffing Options',
                description: 'From temporary placements to long-term contracts, we offer staffing solutions that fit your schedule and needs.',
              },
              {
                icon: '📞',
                title: '24/7 Support',
                description: 'Our team is available around the clock to assist with your staffing needs and address any concerns.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#F7F8FA] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{feature.title}</h3>
                <p className="text-[#0A3D62]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Request Form */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">Staff Request Form</h2>
          <p className="text-center text-[#0A3D62] mb-8">
            Fill out the form below to request healthcare staff for your facility or home. 
            Our team will get back to you promptly.
          </p>
          
          {staffRequestSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Thank you! Your staff request has been submitted successfully. We'll contact you soon.
            </div>
          )}

          <form onSubmit={handleStaffRequestSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={staffRequestForm.name}
                  onChange={handleStaffRequestChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-2">
                  Organisation *
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  required
                  value={staffRequestForm.organisation}
                  onChange={handleStaffRequestChange}
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
                  value={staffRequestForm.email}
                  onChange={handleStaffRequestChange}
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
                  value={staffRequestForm.phone}
                  onChange={handleStaffRequestChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="staffType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Staff Needed *
                </label>
                <select
                  id="staffType"
                  name="staffType"
                  required
                  value={staffRequestForm.staffType}
                  onChange={handleStaffRequestChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                >
                  <option value="">Select staff type</option>
                  <option value="RN">Registered Nurse (RN)</option>
                  <option value="LPN">Licensed Practical Nurse (LPN)</option>
                  <option value="PSW">Personal Support Worker (PSW)</option>
                  <option value="NA">Nursing Assistant</option>
                  <option value="HHA">Home Health Aide</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={staffRequestForm.location}
                  onChange={handleStaffRequestChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="shiftType" className="block text-sm font-medium text-gray-700 mb-2">
                  Shift Type *
                </label>
                <select
                  id="shiftType"
                  name="shiftType"
                  required
                  value={staffRequestForm.shiftType}
                  onChange={handleStaffRequestChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                >
                  <option value="">Select shift type</option>
                  <option value="Day">Day Shift</option>
                  <option value="Evening">Evening Shift</option>
                  <option value="Night">Night Shift</option>
                  <option value="Weekend">Weekend</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date *
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  value={staffRequestForm.startDate}
                  onChange={handleStaffRequestChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message / Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={staffRequestForm.message}
                onChange={handleStaffRequestChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BBBAD] focus:border-transparent"
                placeholder="Please provide any additional details or specific requirements..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmittingStaff}
              className="mt-6 w-full bg-[#1B9CFC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A3D62] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmittingStaff ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">Book a Consultation</h2>
          <p className="text-center text-[#0A3D62] mb-8">
            Schedule a consultation call or meeting to discuss your staffing needs in detail. 
            We'll work with you to find the perfect solution.
          </p>

          {appointmentSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Thank you! Your consultation request has been submitted successfully. We'll contact you soon to confirm.
            </div>
          )}

          <form onSubmit={handleAppointmentSubmit} className="bg-[#F7F8FA] p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="appointment-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="appointment-name"
                  name="name"
                  required
                  value={appointmentForm.name}
                  onChange={handleAppointmentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="appointment-organisation" className="block text-sm font-medium text-gray-700 mb-2">
                  Organisation *
                </label>
                <input
                  type="text"
                  id="appointment-organisation"
                  name="organisation"
                  required
                  value={appointmentForm.organisation}
                  onChange={handleAppointmentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="appointment-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="appointment-email"
                  name="email"
                  required
                  value={appointmentForm.email}
                  onChange={handleAppointmentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="appointment-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="appointment-phone"
                  name="phone"
                  required
                  value={appointmentForm.phone}
                  onChange={handleAppointmentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  value={appointmentForm.preferredDate}
                  onChange={handleAppointmentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  required
                  value={appointmentForm.preferredTime}
                  onChange={handleAppointmentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9CFC] focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Consultation *
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={4}
                required
                value={appointmentForm.reason}
                onChange={handleAppointmentChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BBBAD] focus:border-transparent"
                placeholder="Please describe what you'd like to discuss..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmittingAppointment}
              className="mt-6 w-full bg-[#1B9CFC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A3D62] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmittingAppointment ? 'Submitting...' : 'Book Consultation'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

