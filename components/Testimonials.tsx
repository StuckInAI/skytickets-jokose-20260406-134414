import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Frequent Traveler',
    content: 'SkyBook made my trip planning so much easier. Found the best prices and the booking process was seamless!',
    rating: 5,
    initials: 'SJ',
    color: 'bg-blue-500',
  },
  {
    name: 'Michael Chen',
    role: 'Business Traveler',
    content: 'I travel every week for work and SkyBook saves me hours of searching. The price comparison feature is incredible.',
    rating: 5,
    initials: 'MC',
    color: 'bg-green-500',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Adventure Seeker',
    content: 'Booked flights to 5 different countries last year through SkyBook. Always great deals and amazing customer support!',
    rating: 5,
    initials: 'ER',
    color: 'bg-purple-500',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-gray-500">Join millions of happy travelers who trust SkyBook</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card p-6">
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`${testimonial.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex space-x-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
