import Navbar from '@/components/Navbar';
import FlightResults from '@/components/FlightResults';
import Footer from '@/components/Footer';
import SearchFormCompact from '@/components/SearchFormCompact';

export default function FlightsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="bg-blue-700 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <SearchFormCompact />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <FlightResults />
      </div>
      <Footer />
    </main>
  );
}
