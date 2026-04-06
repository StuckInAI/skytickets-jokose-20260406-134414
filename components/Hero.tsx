import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">Trusted by 2M+ travelers worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Book Flights
            <span className="block text-yellow-400">Effortlessly</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Compare hundreds of airlines, find the best prices, and manage all your trips in one place.
            Your next adventure is just a few clicks away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/flights"
              className="inline-flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              <span>Search Flights</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/trips"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border border-white/20 transition-all duration-200 active:scale-95"
            >
              <span>My Trips</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center space-x-2 text-blue-100">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">Secure Booking</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-100">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-100">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm">Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
