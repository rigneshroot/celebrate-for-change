import CharityCard from '@/components/CharityCard';
import { charitiesUSA } from '@/data/charities';

export default function USA() {
  return (
    <div className="space-y-16 -mx-8">
      {/* Immersive Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
          style={{ backgroundImage: 'url(/images/usa_bg.png)' }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="tesla-header text-5xl md:text-8xl text-white drop-shadow-2xl tracking-[0.4em]">
            USA
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto font-montserrat font-light tracking-[0.2em] text-xs md:text-sm leading-relaxed">
            Support verified nonprofits making a difference in the US and globally.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {charitiesUSA.map((charity) => (
          <CharityCard key={charity.name} charity={charity} />
        ))}
      </div>
    </div>
  );
}
