'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

export default function SearchFormCompact() {
  const router = useRouter();
  const [from, setFrom] = useState('New York (JFK)');
  const [to, setTo] = useState('London (LHR)');
  const [departDate, setDepartDate] = useState('2024-08-15');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/flights');
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-wrap gap-3 items-end">
      <div className="flex-1 min-w-[140px]">
        <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">From</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 min-w-[140px]">
        <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">To</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 min-w-[140px]">
        <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">Date</label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
          <input
            type="date"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
          />
        </div>
      </div>

      <div className="min-w-[120px]">
        <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">Passengers</label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
          <select
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="w-full pl-9 pr-3 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm appearance-none"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n} className="text-gray-900">
                {n} {n === 1 ? 'Pax' : 'Pax'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2.5 px-6 rounded-xl transition-all duration-200 flex items-center space-x-2 whitespace-nowrap"
      >
        <Search className="w-4 h-4" />
        <span>Search</span>
      </button>
    </form>
  );
}
