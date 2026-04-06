import { Search, CreditCard, Plane } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Search Flights',
    description: 'Enter your departure city, destination, travel dates, and number of passengers.',
    color: 'bg-blue-600',
  },
  {
    step: '02',
    icon: CreditCard,
    title: 'Compare & Choose',
    description: 'Browse through hundreds of options and choose the best flight for your budget.',
    color: 'bg-indigo-600',
  },
  {
    step: '03',
    icon: Plane,
    title: 'Book & Fly',
    description: 'Complete your booking securely and receive your e-ticket instantly via email.',
    color: 'bg-purple-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-500">Book your flight in 3 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"></div>

          {steps.map((step, index) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-gray-100 text-gray-500 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
