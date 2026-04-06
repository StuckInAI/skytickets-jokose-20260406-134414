import { Zap, Shield, CreditCard, Headphones, Globe, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Book your flight in seconds with our streamlined checkout process.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Your payment information is always protected with bank-level security.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: CreditCard,
    title: 'Best Price Match',
    description: "Find a lower price? We'll match it and give you a $25 credit.",
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our travel experts are available around the clock to help you.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: Globe,
    title: '500+ Airlines',
    description: 'Access flights from over 500 airlines to any destination worldwide.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: RefreshCw,
    title: 'Free Cancellation',
    description: 'Plans change. Cancel or modify your booking within 24 hours for free.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose SkyBook?</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We make flight booking simple, affordable, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card p-6 group">
              <div className={`${feature.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
