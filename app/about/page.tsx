import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Hands of Grace Health Staffing',
  description: 'Learn about Hands of Grace Health Staffing - our mission, values, story, and dedicated team of healthcare staffing professionals.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#D6ECFF] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A3D62]">About Hands of Grace</h1>
          <p className="text-xl text-[#0A3D62]">
            Dedicated to excellence in healthcare staffing solutions
          </p>
        </div>
      </section>

      {/* Agency Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-6">Who We Are</h2>
          <p className="text-lg text-[#0A3D62] leading-relaxed mb-6">
            Hands of Grace Health Staffing is a trusted healthcare staffing agency committed 
            to connecting healthcare facilities, families, and qualified healthcare professionals. 
            We understand that quality healthcare staffing is essential for providing excellent 
            patient care and maintaining high standards in healthcare settings.
          </p>
          <p className="text-lg text-[#0A3D62] leading-relaxed">
            Our team works tirelessly to ensure that every placement meets the highest standards 
            of professionalism, compassion, and expertise. We take pride in building lasting 
            relationships with both our clients and our healthcare professionals.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Mission',
                description: 'To provide exceptional healthcare staffing solutions that enhance patient care and support healthcare facilities.',
              },
              {
                icon: '💎',
                title: 'Excellence',
                description: 'We strive for excellence in every placement, ensuring quality matches between facilities and professionals.',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'Honest, transparent, and ethical practices guide all our interactions and business decisions.',
              },
              {
                icon: '❤️',
                title: 'Compassion',
                description: 'We care deeply about the well-being of patients, families, and the healthcare professionals we serve.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{value.title}</h3>
                <p className="text-[#0A3D62]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Story Image Placeholder</span>
              </div>
            </div>
            <div>
              <p className="text-lg text-[#0A3D62] leading-relaxed mb-4">
                Hands of Grace Health Staffing was founded with a simple yet powerful vision: 
                to bridge the gap between healthcare facilities in need of qualified staff and 
                dedicated healthcare professionals seeking meaningful employment opportunities.
              </p>
              <p className="text-lg text-[#0A3D62] leading-relaxed mb-4">
                Over the years, we have built a reputation for reliability, professionalism, 
                and a deep commitment to the healthcare community. We understand the challenges 
                that healthcare facilities face in finding and retaining quality staff, and 
                we are dedicated to providing solutions that work.
              </p>
              <p className="text-lg text-[#0A3D62] leading-relaxed">
                Today, we continue to grow and evolve, always keeping our core values at the 
                heart of everything we do. We are proud to be a trusted partner in healthcare 
                staffing across homes, hospitals, and long-term care facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Director of Operations',
                bio: 'With over 15 years of experience in healthcare staffing, Sarah leads our team with dedication and expertise.',
                image: '👩‍💼',
              },
              {
                name: 'Michael Chen',
                role: 'Recruitment Manager',
                bio: 'Michael specializes in finding and placing qualified healthcare professionals across various specialties.',
                image: '👨‍💼',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Client Relations Specialist',
                bio: 'Emily ensures that our clients receive exceptional service and support throughout their staffing journey.',
                image: '👩‍💻',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-2">{member.name}</h3>
                <p className="text-[#1B9CFC] font-medium mb-4">{member.role}</p>
                <p className="text-[#0A3D62]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

