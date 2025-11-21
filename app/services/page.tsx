import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Hands of Grace Health Staffing',
  description: 'Comprehensive healthcare staffing services including Registered Nurses, LPNs, PSWs, Nursing Assistants, and Home Health Aides.',
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#D6ECFF] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A3D62]">Our Services</h1>
          <p className="text-xl text-[#0A3D62]">
            Comprehensive healthcare staffing solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-6">Healthcare Staffing Excellence</h2>
          <p className="text-lg text-[#0A3D62] leading-relaxed">
            At Hands of Grace Health Staffing, we provide a wide range of healthcare staffing 
            services to meet the diverse needs of healthcare facilities, hospitals, and families. 
            Our team of qualified professionals is ready to deliver exceptional care and support 
            in various healthcare settings.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Our Staffing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '👩‍⚕️',
                title: 'Registered Nurses',
                description: 'Experienced RNs with expertise in various specialties including medical-surgical, critical care, emergency, and long-term care. Our registered nurses are fully licensed and ready to provide expert patient care.',
              },
              {
                icon: '💉',
                title: 'Licensed Practical Nurses',
                description: 'Qualified LPNs offering compassionate patient care, medication administration, wound care, and support in hospitals, clinics, and long-term care facilities.',
              },
              {
                icon: '🏠',
                title: 'Personal Support Workers',
                description: 'Dedicated PSWs providing essential personal care, assistance with daily living activities, and companionship for clients in home care and facility settings.',
              },
              {
                icon: '🤲',
                title: 'Nursing Assistants',
                description: 'Trained and certified nursing assistants ready to support patient care, assist with mobility, monitor vital signs, and provide essential healthcare services.',
              },
              {
                icon: '❤️',
                title: 'Home Health Aides',
                description: 'Compassionate home health aides specializing in in-home care, providing personal care, meal preparation, light housekeeping, and companionship.',
              },
              {
                icon: '🩺',
                title: 'Specialized Care Staff',
                description: 'Healthcare professionals with specialized training in areas such as dementia care, palliative care, pediatric care, and rehabilitation support.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-[#F7F8FA] shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{service.title}</h3>
                <p className="text-[#0A3D62]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: '🔍',
                title: 'Screening',
                description: 'We conduct thorough background checks, verify credentials, and assess qualifications to ensure every healthcare professional meets our high standards.',
              },
              {
                step: '2',
                icon: '📍',
                title: 'Placement',
                description: 'Our team matches qualified professionals with facilities based on skills, experience, and specific requirements to ensure the best fit.',
              },
              {
                step: '3',
                icon: '🤝',
                title: 'Ongoing Support',
                description: 'We provide continuous support and communication to both facilities and staff, ensuring successful placements and addressing any concerns.',
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#F7F8FA] rounded-lg"
              >
                <div className="text-5xl mb-4">{process.icon}</div>
                <div className="text-3xl font-bold text-[#1B9CFC] mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{process.title}</h3>
                <p className="text-[#0A3D62]">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

