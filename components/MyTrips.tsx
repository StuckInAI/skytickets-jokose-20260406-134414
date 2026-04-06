'use client';

import { useState } from 'react';
import { Plane, Calendar, MapPin, Clock, ChevronRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

type TripStatus = 'upcoming' | 'completed' | 'cancelled';

interface Trip {
  id: string;
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  date: string;
  returnDate?: string;
  airline: string;
  flightNo: string;
  status: TripStatus;
  price: number;
  passengers: number;
}

const trips: Trip[] = [
  {
    id: '1',
    from: 'New York',
    to: 'London',
    fromCode: 'JFK',
    toCode: 'LHR',
    date: 'Aug 15, 2024',
    returnDate: 'Aug 22, 2024',
    airline: 'British Airways',
    flightNo: 'BA 178',
    status: 'upcoming',
    price: 489,
    passengers: 2,
  },
  {
    id: '2',
    from: 'Los Angeles',
    to: 'Tokyo',
    fromCode: 'LAX',
    toCode: 'NRT',
    date: 'Jun 10, 2024',
    returnDate: 'Jun 20, 2024',
    airline: 'Japan Airlines',
    flightNo: 'JL 062',
    status: 'completed',
    price: 1298,
    passengers: 1,
  },
  {
    id: '3',
    from: 'Chicago',
    to: 'Paris',
    fromCode: 'ORD',
    toCode: 'CDG',
    date: 'May 5, 2024',
    airline: 'Air France',
    flightNo: 'AF 066',
    status: 'cancelled',
    price: 599,
    passengers: 2,
  },
];

const statusConfig: Record<TripStatus, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  upcoming: { label: 'Upcoming', color: 'text-blue-600', bg: 'bg-blue-50', icon: AlertCircle },
  completed: { label: 'Completed', color: 'text-green-600', bg: 'bg-green-50', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'text-red-500', bg: 'bg-red-50', icon: XCircle },
};

export default function MyTrips() {
  const [activeTab, setActiveTab] = useState<TripStatus | 'all'>('all');

  const filteredTrips = activeTab === 'all' ? trips : trips.filter((t) => t.status === activeTab);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">My Trips</h1>
          <p className="text-gray-500">Manage and view all your bookings</p>
        </div>
        <button className="mt-4 sm:mt-0 btn-primary">
          + Book New Flight
        </button>
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit mb-6">
        {(['all', 'upcoming', 'completed', 'cancelled'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
              activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab === 'all' ? 'All Trips' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {filteredTrips.length === 0 ? (
        <div className="card p-12 text-center">
          <Plane className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-500 mb-2">No trips found</h3>
          <p className="text-gray-400">Start planning your next adventure!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTrips.map((trip) => {
            const config = statusConfig[trip.status];
            const StatusIcon = config.icon;
            return (
              <div key={trip.id} className="card p-6 hover:border-blue-200 border-2 border-transparent transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-bold text-gray-900">{trip.fromCode}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="font-bold text-gray-900">{trip.toCode}</span>
                        <span className={`flex items-center space-x-1 ${config.color} ${config.bg} text-xs font-semibold px-2 py-0.5 rounded-full`}>
                          <StatusIcon className="w-3 h-3" />
                          <span>{config.label}</span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {trip.from} → {trip.to}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{trip.date}</span>
                    </div>
                    {trip.returnDate && (
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Return: {trip.returnDate}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{trip.airline} · {trip.flightNo}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                    <div className="text-right">
                      <p className="text-xl font-bold text-blue-600">${trip.price}</p>
                      <p className="text-xs text-gray-400">{trip.passengers} passenger{trip.passengers > 1 ? 's' : ''}</p>
                    </div>
                    {trip.status === 'upcoming' && (
                      <div className="flex space-x-2">
                        <button className="text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 font-semibold px-3 py-1.5 rounded-lg transition-colors">
                          Manage
                        </button>
                        <button className="text-xs bg-red-50 text-red-500 hover:bg-red-100 font-semibold px-3 py-1.5 rounded-lg transition-colors">
                          Cancel
                        </button>
                      </div>
                    )}
                    {trip.status === 'completed' && (
                      <button className="text-xs bg-green-50 text-green-600 hover:bg-green-100 font-semibold px-3 py-1.5 rounded-lg transition-colors">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
