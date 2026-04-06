'use client';

import { useState } from 'react';
import { Plane, Clock, ArrowRight, Filter, ChevronDown, Wifi, Utensils, Tv } from 'lucide-react';

interface Flight {
  id: string;
  airline: string;
  logo: string;
  from: string;
  to: string;
  departTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: number;
  originalPrice: number;
  class: string;
  amenities: string[];
}

const flights: Flight[] = [
  {
    id: '1',
    airline: 'British Airways',
    logo: 'BA',
    from: 'JFK',
    to: 'LHR',
    departTime: '08:30',
    arrivalTime: '20:45',
    duration: '7h 15m',
    stops: 0,
    price: 489,
    originalPrice: 649,
    class: 'Economy',
    amenities: ['wifi', 'meal', 'entertainment'],
  },
  {
    id: '2',
    airline: 'Delta Airlines',
    logo: 'DL',
    from: 'JFK',
    to: 'LHR',
    departTime: '11:15',
    arrivalTime: '23:30',
    duration: '7h 15m',
    stops: 0,
    price: 529,
    originalPrice: 699,
    class: 'Economy',
    amenities: ['wifi', 'meal'],
  },
  {
    id: '3',
    airline: 'American Airlines',
    logo: 'AA',
    from: 'JFK',
    to: 'LHR',
    departTime: '14:00',
    arrivalTime: '03:20+1',
    duration: '8h 20m',
    stops: 1,
    price: 349,
    originalPrice: 499,
    class: 'Economy',
    amenities: ['meal'],
  },
  {
    id: '4',
    airline: 'Virgin Atlantic',
    logo: 'VS',
    from: 'JFK',
    to: 'LHR',
    departTime: '17:45',
    arrivalTime: '06:00+1',
    duration: '7h 15m',
    stops: 0,
    price: 599,
    originalPrice: 799,
    class: 'Premium Economy',
    amenities: ['wifi', 'meal', 'entertainment'],
  },
  {
    id: '5',
    airline: 'United Airlines',
    logo: 'UA',
    from: 'JFK',
    to: 'LHR',
    departTime: '21:30',
    arrivalTime: '10:45+1',
    duration: '8h 15m',
    stops: 1,
    price: 319,
    originalPrice: 459,
    class: 'Economy',
    amenities: ['wifi'],
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-3.5 h-3.5" />,
  meal: <Utensils className="w-3.5 h-3.5" />,
  entertainment: <Tv className="w-3.5 h-3.5" />,
};

export default function FlightResults() {
  const [sortBy, setSortBy] = useState<'price' | 'duration' | 'departure'>('price');
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);
  const [maxStops, setMaxStops] = useState<number>(2);

  const sortedFlights = [...flights]
    .filter((f) => f.stops <= maxStops)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
      return a.departTime.localeCompare(b.departTime);
    });

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <aside className="lg:w-64 flex-shrink-0">
        <div className="card p-5 sticky top-20">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-4 h-4 text-blue-600" />
            <h3 className="font-bold text-gray-900">Filters</h3>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Stops</h4>
            <div className="space-y-2">
              {[0, 1, 2].map((stops) => (
                <label key={stops} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="stops"
                    checked={maxStops === stops}
                    onChange={() => setMaxStops(stops)}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-600">
                    {stops === 0 ? 'Non-stop only' : stops === 1 ? 'Up to 1 stop' : 'Up to 2 stops'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Airlines</h4>
            <div className="space-y-2">
              {['British Airways', 'Delta Airlines', 'American Airlines', 'Virgin Atlantic', 'United Airlines'].map((airline) => (
                <label key={airline} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="text-blue-600 rounded" />
                  <span className="text-sm text-gray-600">{airline}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Price Range</h4>
            <div className="space-y-2">
              <input type="range" min="200" max="800" defaultValue="800" className="w-full accent-blue-600" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>$200</span>
                <span>$800</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">
            <span className="font-bold text-gray-900">{sortedFlights.length}</span> flights found
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'duration' | 'departure')}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="price">Lowest Price</option>
                <option value="duration">Shortest Duration</option>
                <option value="departure">Earliest Departure</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {sortedFlights.map((flight) => (
            <div
              key={flight.id}
              className={`card p-5 cursor-pointer border-2 transition-all duration-200 ${
                selectedFlight === flight.id ? 'border-blue-500 shadow-lg' : 'border-transparent'
              }`}
              onClick={() => setSelectedFlight(selectedFlight === flight.id ? null : flight.id)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center space-x-3 sm:w-40">
                  <div className="bg-blue-600 text-white text-xs font-bold w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {flight.logo}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{flight.airline}</p>
                    <p className="text-xs text-gray-400">{flight.class}</p>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900">{flight.departTime}</p>
                    <p className="text-sm text-gray-500">{flight.from}</p>
                  </div>

                  <div className="flex flex-col items-center px-4">
                    <p className="text-xs text-gray-400 mb-1">{flight.duration}</p>
                    <div className="flex items-center space-x-1">
                      <div className="w-12 sm:w-20 h-px bg-gray-300"></div>
                      <Plane className="w-4 h-4 text-blue-500" />
                      <div className="w-12 sm:w-20 h-px bg-gray-300"></div>
                    </div>
                    <p className="text-xs mt-1">
                      {flight.stops === 0 ? (
                        <span className="text-green-500 font-medium">Non-stop</span>
                      ) : (
                        <span className="text-orange-500 font-medium">{flight.stops} stop</span>
                      )}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900">{flight.arrivalTime}</p>
                    <p className="text-sm text-gray-500">{flight.to}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:flex-col sm:items-end sm:w-32">
                  <div className="text-right">
                    <p className="text-xs text-gray-400 line-through">${flight.originalPrice}</p>
                    <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
                    <p className="text-xs text-gray-400">per person</p>
                  </div>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl text-sm transition-colors flex items-center space-x-1"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <span>Select</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-gray-100">
                {flight.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-1 text-gray-400">
                    {amenityIcons[amenity]}
                    <span className="text-xs capitalize">{amenity}</span>
                  </div>
                ))}
                <div className="ml-auto">
                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                    Save ${flight.originalPrice - flight.price}
                  </span>
                </div>
              </div>

              {selectedFlight === flight.id && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">Flight Duration</p>
                      <p className="font-semibold text-gray-900">{flight.duration}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">Class</p>
                      <p className="font-semibold text-gray-900">{flight.class}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">Baggage</p>
                      <p className="font-semibold text-gray-900">23kg included</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">Cancellation</p>
                      <p className="font-semibold text-green-600">Free 24h</p>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center space-x-2">
                    <span>Book Now for ${flight.price}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
