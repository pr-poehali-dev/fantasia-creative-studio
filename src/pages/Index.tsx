import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CoursesSection from '@/components/sections/CoursesSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import GallerySection from '@/components/sections/GallerySection';
import PricesSection from '@/components/sections/PricesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoursesSection />
      <ScheduleSection />
      <GallerySection />
      <PricesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
