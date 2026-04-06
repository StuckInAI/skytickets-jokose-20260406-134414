import { MapPin, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const destinations = [
  {
    city: 'Paris',
    country: 'France',
    price: 299,
    tag: 'Popular',
    gradient: 'from-pink-400 to-rose-500',
    emoji: '🗼',
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    price: 649,
    tag: 'Trending',
    gradient: 'from-red-400 to-orange-500',
    emoji: '🗾',
  },
  {
    city: 'New York',
    country: 'USA',
    price: 199,
    tag: 'Best Deal',
    gradient: 'from-blue-400 to-indigo-500',
    emoji: '🗽',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    price: 449,
    tag: 'Luxury',
    gradient: 'from-yellow-400 to-amber-500',
    emoji: '🏙️',
  },
  {
    city: 'Bali',
    country: 'Indonesia',
    price: 549,
    tag: 'Paradise',
    gradient: 'from-green-400 to-teal-500',
    emoji: '🌴',
  },
  {
    city: 'London',
    country: 'UK',
    price: 279,
    tag: 'Classic',
    gradient: 'from-purple-400 to-violet-500',
    emoji: '🎡',
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
            <p className="text-gray-500">Explore our most booked routes this season</p>
          </div>
          <Link
            href="/flights"
            className="mt-4 sm:mt-0 flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <TrendingUp className="w-4 h-4" />
            <span>View All</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link key={dest.city} href="/flights" className="group">
              <div className="card overflow-hidden">
                <div className={`bg-gradient-to-br ${dest.gradient} h-40 flex items-center justify-center relative`}>
                  <span className="text-6xl">{dest.emoji}</span>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-semibold">{dest.tag}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <h3 className="font-bold text-gray-900">{dest.city}</h3>
                      </div>
                      <p className="text-sm text-gray-500 ml-5">{dest.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">From</p>
                      <p className="text-xl font-bold text-blue-600">${dest.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
