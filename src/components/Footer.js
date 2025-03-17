import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Badlaav Foundation</h3>
            <p className="text-gray-400">
              We work towards creating awareness about various issues faced by children 
              in shelter homes and actively support their development and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-400 hover:text-white transition">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                <div>
                  <p className="text-gray-400">+91 863 066 8493</p>
                  <p className="text-gray-400">+91 863 066 8493</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                <p className="text-gray-400">contact@badlaavfoundation.in</p>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                <p className="text-gray-400">Dehradun, Uttarakhand</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on our work and impact.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              />
              <button type="submit" className="btn btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Badlaav Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 