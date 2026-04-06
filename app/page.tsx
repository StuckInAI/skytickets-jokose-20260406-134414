import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchForm from '@/components/SearchForm';
import Features from '@/components/Features';
import PopularDestinations from '@/components/PopularDestinations';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-10 -mt-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SearchForm />
        </div>
      </div>
      <Features />
      <PopularDestinations />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}
