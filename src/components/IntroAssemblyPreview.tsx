import Header from './Header';
import Hero from './Hero';
import FeaturedWork from './FeaturedWork';

export default function IntroAssemblyPreview() {
  return (
    <div className="portfolio-assembly-preview-root flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero isReady={false} />
        <FeaturedWork />
      </main>
    </div>
  );
}

