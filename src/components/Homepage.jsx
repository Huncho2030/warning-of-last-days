import { Hero } from './Homepage/Hero';
import { IntroductionPreview } from './Homepage/IntroductionPreview';
import { NewsPanel } from './Homepage/NewsPanel';
import { FeaturedVideos } from './Homepage/FeaturedVideos';
import { BookshopHighlight } from './Homepage/BookshopHighlight';
import { MedicalMissionaryPreview } from './Homepage/MedicalMissionaryPreview';
import { SchoolPreview } from './Homepage/SchoolPreview';

export function Homepage() {
  return (
    <div>
      <Hero />
      <IntroductionPreview />
      <NewsPanel />
      <FeaturedVideos />
      <BookshopHighlight />
      <MedicalMissionaryPreview />
      <SchoolPreview />
    </div>
  );
}
