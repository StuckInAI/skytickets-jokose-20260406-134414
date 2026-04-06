import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MyTrips from '@/components/MyTrips';

export default function TripsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <MyTrips />
      </div>
      <Footer />
    </main>
  );
}
