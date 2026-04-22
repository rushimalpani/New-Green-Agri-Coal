import { Sparkles } from "./ui/sparkles";
import { InfiniteSlider } from './ui/infinite-slider';
import { ProgressiveBlur } from './ui/progressive-blur';

import Client1 from '../assets/Client_1.jpeg';
import Client2 from '../assets/Client_2.jpeg';
import Client3 from '../assets/Client_3.jpeg';
import Client4 from '../assets/Client_4.jpeg';
import Client5 from '../assets/Client_5.jpeg';
import Client6 from '../assets/Client_6.jpeg';

const customers = [
  { id: "c1", src: Client1 },
  { id: "c2", src: Client2 },
  { id: "c3", src: Client3 },
  { id: "c4", src: Client4 },
  { id: "c5", src: Client5 },
  { id: "c6", src: Client6 },
];

export default function CustomersSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#060f05] py-32 border-t border-white/5 flex flex-col items-center justify-center">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#10b98110,transparent_60%)]" />
      </div>

      {/* Headline - Centered Vertically and Horizontally */}
      <div className="relative z-10 w-full max-w-6xl px-4 text-center mb-20">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-7xl mb-6">
          <span className="bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Trusted by the best.
          </span>
          <br />
          <span className="text-zinc-400 font-semibold text-2xl sm:text-4xl mt-4 block tracking-wide opacity-90">
            Powering industrial growth across the nation.
          </span>
        </h2>
      </div>

      {/* Slider container */}
      <div className="relative h-[180px] w-full z-10">
        <InfiniteSlider 
          className='flex h-full w-full items-center' 
          duration={35}
          gap={50}
        >
          {customers.map(({ id, src }) => (
            <div 
              key={id} 
              className="group relative flex h-28 w-56 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-6 shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500 hover:scale-105 hover:border-emerald-500/50"
            >
              <img 
                src={src} 
                alt="Customer Logo" 
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </InfiniteSlider>
        
        {/* Cinematic Blur edges */}
        <ProgressiveBlur
          className='pointer-events-none absolute top-0 left-0 h-full w-[35vw] z-20'
          direction='left'
          blurIntensity={2}
        />
        <ProgressiveBlur
          className='pointer-events-none absolute top-0 right-0 h-full w-[35vw] z-20'
          direction='right'
          blurIntensity={2}
        />
      </div>

      {/* Bottom Sparkle & Curve effect */}
      <div className="relative -mt-32 h-[450px] w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] z-0 pointer-events-none">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#10b981,transparent_75%)] before:opacity-15" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.6] z-10 w-[200%] rounded-[100%] border-t border-emerald-500/30 bg-[#060f05]" />
        <Sparkles
          density={800}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_80%)]"
          color="#10b981"
          opacity={0.3}
          speed={0.4}
        />
      </div>
    </div>
  );
}
