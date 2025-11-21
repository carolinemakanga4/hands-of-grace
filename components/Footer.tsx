import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-[#1B9CFC] mb-4">
              Hands of Grace Health Staffing
            </h3>
            <p className="text-gray-300 text-sm">
              Connecting healthcare facilities and families with qualified, 
              compassionate healthcare professionals. Your trusted partner 
              in healthcare staffing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#1B9CFC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#2BBBAD] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#2BBBAD] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/for-employers" className="text-gray-300 hover:text-[#2BBBAD] transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/for-job-seekers" className="text-gray-300 hover:text-[#2BBBAD] transition-colors">
                  For Job Seekers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#2BBBAD] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="font-medium">Address:</span>
                <br />
                123 Healthcare Avenue
                <br />
                Sarnia, ON N7T 1A1
              </li>
              <li>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+1234567890" className="hover:text-[#1B9CFC] transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:info@handsofgracehs.com" className="hover:text-[#1B9CFC] transition-colors">
                  info@handsofgracehs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1B9CFC]/30 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Hands of Grace Health Staffing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

