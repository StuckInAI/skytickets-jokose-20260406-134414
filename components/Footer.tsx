import { Plane, Twitter, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SkyBook</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for booking flights worldwide. Compare prices, find deals, and travel smarter.
            </p>
            <div className="flex space-x-3">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Careers', 'Press', 'Blog', 'Partners'].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {['Help Center', 'Contact Us', 'Cancellation Policy', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>support@skybook.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+1 (800) 759-2665</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-xl text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2024 SkyBook. All rights reserved.</p>
          <p className="text-sm mt-2 sm:mt-0">Made with ❤️ for travelers worldwide</p>
        </div>
      </div>
    </footer>
  );
}
