import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Marquee from '@/components/Marquee';
import FitnessPlan from '@/components/FitnessPlan';
import Transformation from '@/components/Transformation';
import ScheduleAppointment from '@/components/ScheduleAppointment';
import Mentors from '@/components/Mentors';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <OurStory />
      <Marquee />
      <FitnessPlan />
      <Transformation />
      <ScheduleAppointment />
      <Mentors />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
