'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plane, Menu, X, User, Bell } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SkyBook</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/flights" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Flights
            </Link>
            <Link href="/trips" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              My Trips
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
              <User className="w-4 h-4" />
              <span className="font-medium">Sign In</span>
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-500 hover:text-blue-600 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/flights"
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Flights
              </Link>
              <Link
                href="/trips"
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                My Trips
              </Link>
              <button className="mx-4 mt-2 flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                <User className="w-4 h-4" />
                <span className="font-medium">Sign In</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
