import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Hands of Grace Health Staffing',
  description: 'Trusted healthcare staffing for homes, hospitals & facilities. Connect with qualified healthcare professionals or apply to join our team.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#D6ECFF] py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A3D62]">
              Trusted Healthcare Staffing for Homes, Hospitals & Facilities
            </h1>
            <p className="text-xl mb-8 text-[#0A3D62]">
              Connecting you with qualified, compassionate healthcare professionals 
              who are ready to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/for-employers"
                className="bg-[#1B9CFC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A3D62] transition-colors text-center"
              >
                Hire Staff
              </Link>
              <Link
                href="/for-job-seekers"
                className="bg-white border-2 border-[#0A3D62] text-[#0A3D62] px-8 py-3 rounded-lg font-semibold hover:bg-[#F7F8FA] transition-colors text-center"
              >
                Apply as a Caregiver
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-full max-w-xl">
              <Image
                src="/CG.jpeg"
                alt="Healthcare caregiver assisting elderly patient"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-6">Welcome to Hands of Grace</h2>
          <p className="text-lg text-[#0A3D62] leading-relaxed">
            Hands of Grace Health Staffing is dedicated to providing exceptional healthcare 
            staffing solutions. We understand the critical importance of having reliable, 
            qualified healthcare professionals. Our mission is to bridge the gap between 
            healthcare facilities, families, and skilled caregivers, ensuring the highest 
            standards of care and service.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '👩‍⚕️',
                title: 'Registered Nurses',
                description: 'Experienced RNs ready to provide expert care in various healthcare settings.',
              },
              {
                icon: '💉',
                title: 'Licensed Practical Nurses',
                description: 'Qualified LPNs offering compassionate patient care and support.',
              },
              {
                icon: '🏠',
                title: 'Personal Support Workers',
                description: 'Dedicated PSWs for home care and long-term care facilities.',
              },
              {
                icon: '🤲',
                title: 'Nursing Assistants',
                description: 'Trained assistants providing essential patient care services.',
              },
              {
                icon: '❤️',
                title: 'Home Health Aides',
                description: 'Compassionate aides for in-home care and support services.',
              },
              {
                icon: '🩺',
                title: 'Specialized Care',
                description: 'Custom staffing solutions for specialized healthcare needs.',
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

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3D62] mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: '⭐',
                title: 'Experience',
                description: 'Years of expertise in healthcare staffing and placement.',
              },
              {
                icon: '✅',
                title: 'Qualified Staff',
                description: 'Thoroughly screened and certified healthcare professionals.',
              },
              {
                icon: '🔄',
                title: 'Reliable',
                description: 'Dependable staffing solutions when you need them most.',
              },
              {
                icon: '📞',
                title: '24/7 Support',
                description: 'Round-the-clock assistance for all your staffing needs.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{feature.title}</h3>
                <p className="text-[#0A3D62]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1B9CFC] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let us help you find the perfect healthcare staffing solution for your needs.
          </p>
          <Link
            href="/for-employers"
            className="inline-block bg-white text-[#0A3D62] px-8 py-3 rounded-lg font-semibold hover:bg-[#F7F8FA] transition-colors"
          >
            Request Staffing Today
          </Link>
        </div>
      </section>
    </div>
  );
}
