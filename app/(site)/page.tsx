import { HeroSection } from '@/src/features/site/components/hero-section';
import { MissionSection } from '@/src/features/site/components/mission-section';
import { StatsStrip } from '@/src/features/site/components/stats-strip';
import { ServicesSection } from '@/src/features/site/components/services-section';
import { GoalsSection } from '@/src/features/site/components/goals-section';
import { GallerySection } from '@/src/features/site/components/gallery-section';
import { NewsSection } from '@/src/features/site/components/news-section';
import { ChairMessageSection } from '@/src/features/site/components/chair-message-section';
import { ContactSection } from '@/src/features/site/components/contact-section';

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <MissionSection />
      <ServicesSection />
      <GoalsSection />
      <GallerySection />
      <NewsSection />
      <ChairMessageSection />
      <ContactSection />
    </>
  );
}
