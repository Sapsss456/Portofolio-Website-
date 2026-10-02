import React from 'react';

interface PhotoVisualProps {
  type: string;
  className?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export const PhotoVisual: React.FC<PhotoVisualProps> = ({ type, className = '', aspect = 'portrait' }) => {
  const getAspectClass = () => {
    switch (aspect) {
      case 'landscape':
        return 'aspect-[16/10]';
      case 'square':
        return 'aspect-square';
      case 'portrait':
      default:
        return 'aspect-[3/4]';
    }
  };

  switch (type) {
    case 'meiji-jingu':
      return (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#1E231C] ${className}`}>
          {/* Deep forest morning canopy with rays of light */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#182015] via-[#242E1F] to-[#12160F]"
          />
          {/* Vertical tree trunk silhouettes */}
          <div className="absolute inset-0 flex justify-between px-6 opacity-80">
            <div className="w-8 h-full bg-[#0F140D] transform -skew-x-1" />
            <div className="w-12 h-full bg-[#131910] ml-4" />
            <div className="w-6 h-full bg-[#0C100B] mr-8" />
            <div className="w-10 h-full bg-[#151D12]" />
          </div>
          {/* Torii Gate silhouette in the middle ground */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-44 h-48 opacity-70">
            {/* Top curved lintel */}
            <div className="w-full h-3 bg-[#0A0D08] rounded-t-sm" />
            <div className="w-40 h-2 bg-[#0A0D08] mx-auto mt-2" />
            {/* Pillars */}
            <div className="flex justify-between px-4 h-full mt-1">
              <div className="w-4 h-full bg-[#0A0D08]" />
              <div className="w-4 h-full bg-[#0A0D08]" />
            </div>
          </div>
          {/* Morning sunbeam rays filter */}
          <div
            className="absolute -top-10 right-0 w-80 h-96 opacity-30 transform rotate-25 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,245,210,0.5) 0%, rgba(255,240,190,0.1) 40%, transparent 70%)',
            }}
          />
          {/* Mist layer at ground */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#1E251B] to-transparent opacity-60" />
        </div>
      );

    case 'shibuya-rain':
      return (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#0A0D14] ${className}`}>
          {/* Rain on Shibuya pavement */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B12] via-[#0F1522] to-[#06080E]" />

          {/* Reflections of Shibuya neon signage */}
          <div className="absolute top-0 inset-x-0 h-1/3 flex justify-around opacity-40 blur-[1px]">
            <div className="w-12 h-24 bg-[#E2B714]/40" />
            <div className="w-8 h-32 bg-[#4FD1C5]/30" />
            <div className="w-16 h-28 bg-[#F56565]/40" />
            <div className="w-10 h-20 bg-[#63B3ED]/30" />
          </div>

          {/* Pedestrian crossing zebra lines on wet asphalt */}
          <div className="absolute inset-x-0 bottom-0 h-3/5 flex flex-col justify-end gap-3 px-8 opacity-25">
            <div className="w-full h-3 bg-[#CAD1DE] transform -skew-x-12" />
            <div className="w-full h-4 bg-[#CAD1DE] transform -skew-x-12" />
            <div className="w-full h-5 bg-[#CAD1DE] transform -skew-x-12" />
            <div className="w-full h-6 bg-[#CAD1DE] transform -skew-x-12" />
          </div>

          {/* Reflections on wet ground */}
          <div className="absolute inset-x-0 bottom-4 h-28 flex justify-around opacity-30 blur-[6px]">
            <div className="w-16 h-full bg-[#E2B714]" />
            <div className="w-10 h-full bg-[#4FD1C5]" />
            <div className="w-20 h-full bg-[#F56565]" />
          </div>

          {/* Silhouette of lone commuter with transparent vinyl umbrella */}
          <div className="absolute bottom-12 left-1/3 w-16 h-36 opacity-75">
            {/* Umbrella dome */}
            <div className="w-16 h-8 rounded-t-full border border-white/50 bg-white/10 backdrop-blur-[1px]" />
            {/* Commuter coat */}
            <div className="w-6 h-28 bg-[#040608] mx-auto -mt-1 rounded-sm" />
          </div>

          {/* Fine diagonal rain streaks */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(110deg, transparent, transparent 18px, rgba(255,255,255,0.4) 19px, transparent 20px)',
            }}
          />
        </div>
      );

    case 'omotesando-arch':
      return (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#242628] ${className}`}>
          {/* Architectural Concrete and Shadow Geometry */}
          <div className="absolute inset-0 bg-[#2C2E33]" />

          {/* Dramatic diagonal architectural cast shadow */}
          <div
            className="absolute inset-0 bg-[#161719]"
            style={{
              clipPath: 'polygon(0 0, 75% 0, 25% 100%, 0% 100%)',
            }}
          />

          {/* Glass facade grid with subtle blue-sky bounce */}
          <div
            className="absolute right-0 top-0 w-1/2 h-full opacity-30"
            style={{
              backgroundImage: `linear-gradient(#8BA3B8 1px, transparent 1px), linear-gradient(90deg, #8BA3B8 1px, transparent 1px)`,
              backgroundSize: '28px 48px',
            }}
          />

          {/* Concrete form-tie hole impressions (Ando Tadao style) */}
          <div className="absolute left-8 top-16 flex flex-col gap-16 opacity-40">
            <div className="w-2 h-2 rounded-full bg-[#0E0F10] shadow-inner" />
            <div className="w-2 h-2 rounded-full bg-[#0E0F10] shadow-inner" />
            <div className="w-2 h-2 rounded-full bg-[#0E0F10] shadow-inner" />
            <div className="w-2 h-2 rounded-full bg-[#0E0F10] shadow-inner" />
          </div>

          {/* Clean minimal line detail */}
          <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/40 tracking-wider">
            35°39&apos;58&quot;N 139°42&apos;38&quot;E · OMOTESANDO
          </div>
        </div>
      );

    case 'awa-odori':
      return (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#1A1820] ${className}`}>
          {/* Traditional festival night ambiance */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121017] via-[#1D1B26] to-[#0E0D12]" />

          {/* Motion blur arcs representing indigo yukata sleeve movements */}
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 300" fill="none">
            {/* Indigo yukata wave */}
            <path d="M 50 240 Q 150 80 320 160" stroke="#314B77" strokeWidth="24" strokeLinecap="round" opacity="0.7" />
            <path d="M 80 260 Q 180 110 350 180" stroke="#48689E" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
            {/* Red sash / obi accent line */}
            <path d="M 120 220 Q 200 130 290 190" stroke="#B83A3A" strokeWidth="4" strokeLinecap="round" />
            {/* Woven bamboo amigasa hat silhouette */}
            <path d="M 180 70 Q 240 50 300 85 Q 240 95 180 70 Z" fill="#D4AF77" opacity="0.8" />
          </svg>

          {/* Festival lantern warm ambient haze in the distance */}
          <div className="absolute top-6 right-8 w-20 h-20 rounded-full bg-[#FF8A3D]/20 blur-xl" />
        </div>
      );

    case 'studio-portrait':
      return (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#0D0D0E] ${className}`}>
          {/* Studio Portrait Light & Shadow Study */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#080809] via-[#141416] to-[#252529]" />

          {/* Directional Key Light Silhouette */}
          <div
            className="absolute top-1/4 left-1/3 w-40 h-56 rounded-[48%_52%_40%_60%] opacity-85"
            style={{
              background: 'radial-gradient(ellipse at 40% 30%, rgba(200,200,205,0.25) 0%, rgba(20,20,22,0.85) 60%, #0A0A0C 100%)',
            }}
          />

          {/* Rim light along silhouette edge */}
          <div className="absolute top-1/4 left-1/2 w-[2px] h-48 bg-white/20 blur-[1px] transform rotate-12" />

          {/* Camera Frame ratio markers */}
          <div className="absolute inset-4 border border-white/5 pointer-events-none" />
        </div>
      );

    case 'concert-stage':
      return (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#08090C] ${className}`}>
          {/* Concert stage lighting shaft */}
          <div className="absolute inset-0 bg-[#060709]" />

          {/* Dramatic conical light beam */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-full opacity-45 pointer-events-none"
            style={{
              background: 'polygon(45% 0, 55% 0, 95% 100%, 5% 100%)',
              clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0% 100%)',
              backgroundColor: '#A0AEC0',
            }}
          />

          {/* Center spotlight glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-white/10 blur-2xl" />

          {/* Performer silhouette on stage */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-32 bg-[#020304] rounded-t-lg" />
          {/* Microphone stand */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[2px] h-36 bg-black" />

          {/* Audience hand silhouettes at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black to-transparent" />
        </div>
      );

    case 'kamakura-coast':
      return (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#2D2A26] ${className}`}>
          {/* Kamakura Pacific coast dusk gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#7A6958] via-[#BFA48A] to-[#423C35]" />

          {/* Setting sun low on horizon */}
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#FFF0DB] opacity-80 blur-[2px]" />

          {/* Ocean horizon waterline */}
          <div className="absolute top-3/5 inset-x-0 h-1 bg-[#4A4239] opacity-70" />
          <div className="absolute top-3/5 inset-x-0 h-1/4 bg-gradient-to-b from-[#4A4239] to-[#2E2822] opacity-85" />

          {/* Coastal sand silhouette in foreground */}
          <div className="absolute bottom-0 inset-x-0 h-1/4 bg-[#1E1A17] rounded-t-[50%]" />
        </div>
      );

    case 'shinjuku-alley':
    default:
      return (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#141210] ${className}`}>
          {/* Yokocho evening lantern mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0C0A] via-[#1A1612] to-[#0A0907]" />

          {/* Red paper lantern glow */}
          <div className="absolute top-12 left-10 w-14 h-20 rounded-md bg-[#99281C] shadow-[0_0_40px_rgba(235,60,30,0.4)] flex flex-col justify-between py-1 items-center">
            <div className="w-8 h-1 bg-black/40" />
            <div className="w-1 h-8 bg-black/30" />
            <div className="w-8 h-1 bg-black/40" />
          </div>

          <div className="absolute top-16 right-12 w-12 h-16 rounded-md bg-[#B85D1B] shadow-[0_0_35px_rgba(240,110,30,0.3)] opacity-85" />

          {/* Rising steam / haze from izakaya grill */}
          <div className="absolute bottom-10 left-16 w-24 h-40 bg-white/5 blur-xl rounded-full" />

          {/* Wooden lattice silhouette */}
          <div
            className="absolute bottom-0 inset-x-0 h-1/3 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(90deg, #0A0907 8px, transparent 8px)',
              backgroundSize: '16px 100%',
            }}
          />
        </div>
      );
  }
};
