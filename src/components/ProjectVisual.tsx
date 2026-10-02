import React from 'react';

interface ProjectVisualProps {
  id: string;
  className?: string;
  showOverlay?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ id, className = '', showOverlay = true }) => {
  switch (id) {
    case 'moduble':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#EFECE6] flex items-center justify-center ${className}`}>
          {/* Subtle architectural grid background */}
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `linear-gradient(#B8B3A8 1px, transparent 1px), linear-gradient(90deg, #B8B3A8 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* SVG CAD / Studio Render of MODUBLE modular furniture */}
          <svg className="w-full h-full max-w-[900px] max-h-[500px] p-6 z-10 transition-transform duration-700 hover:scale-[1.02]" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="birchWood" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E4D5BC" />
                <stop offset="50%" stopColor="#DFCEB2" />
                <stop offset="100%" stopColor="#D4C1A3" />
              </linearGradient>
              <linearGradient id="birchWoodShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C4B090" />
                <stop offset="100%" stopColor="#AD997B" />
              </linearGradient>
              <linearGradient id="feltAcoustic" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#55585E" />
                <stop offset="100%" stopColor="#3C3E43" />
              </linearGradient>
              <filter id="softStudioShadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="24" stdDeviation="28" floodColor="#2B2824" floodOpacity="0.16" />
              </filter>
            </defs>

            {/* Floor Contact Ground Plane Shadow */}
            <ellipse cx="400" cy="425" rx="320" ry="24" fill="#2B2824" fillOpacity="0.08" />
            <ellipse cx="400" cy="425" rx="220" ry="12" fill="#2B2824" fillOpacity="0.12" />

            {/* MODUBLE Primary Stool / Table Module (Isometric Geometry) */}
            <g filter="url(#softStudioShadow)">
              {/* Back support upright */}
              <path d="M 280 210 L 370 160 L 370 330 L 280 380 Z" fill="url(#birchWoodShadow)" />
              {/* Main horizontal table plane */}
              <polygon points="280,210 490,90 600,150 390,270" fill="url(#birchWood)" />
              {/* Table thickness edge */}
              <polygon points="390,270 600,150 600,166 390,286" fill="url(#birchWoodShadow)" />
              <polygon points="280,210 390,270 390,286 280,226" fill="#D4C1A3" />

              {/* Interlocking Mortise / Tenon Locking Key (Signature Detail) */}
              <g transform="translate(480, 160)">
                <polygon points="0,10 40,-12 65,2 25,24" fill="#8C7A5E" />
                <polygon points="0,10 25,24 25,32 0,18" fill="#695A44" />
                <polygon points="25,24 65,2 65,10 25,32" fill="#5A4D3B" />
                {/* Arrow indicator */}
                <line x1="12" y1="-8" x2="35" y2="5" stroke="#1A1918" strokeWidth="1.5" strokeDasharray="2 2" />
                <circle cx="35" cy="5" r="2.5" fill="#1A1918" />
              </g>

              {/* Sub-module Interlocking Seat with Acoustic Felt */}
              <polygon points="190,300 310,230 400,280 280,350" fill="url(#feltAcoustic)" />
              <polygon points="280,350 400,280 400,296 280,366" fill="#2D2F33" />
              <polygon points="190,300 280,350 280,366 190,316" fill="#222428" />

              {/* Front Leg Upright */}
              <path d="M 390,286 L 410,275 L 410,420 L 390,430 Z" fill="url(#birchWood)" />
              <path d="M 410,275 L 450,252 L 450,398 L 410,420 Z" fill="url(#birchWoodShadow)" />

              {/* Left Leg Upright */}
              <path d="M 280,226 L 300,215 L 300,370 L 280,380 Z" fill="url(#birchWood)" />

              {/* Right Rear Leg */}
              <path d="M 600,166 L 616,157 L 616,330 L 600,340 Z" fill="url(#birchWoodShadow)" />
            </g>

            {/* Technical Dimension Callouts & Drafting Ticks */}
            <g opacity="0.65" className="font-mono text-[11px]" fill="#3C3A36">
              {/* Width dimension */}
              <line x1="280" y1="80" x2="600" y2="80" stroke="#7A756D" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="280" y1="74" x2="280" y2="86" stroke="#7A756D" strokeWidth="1" />
              <line x1="600" y1="74" x2="600" y2="86" stroke="#7A756D" strokeWidth="1" />
              <text x="440" y="74" textAnchor="middle" fill="#504C44">600 mm [MODULE]</text>

              {/* Height callout */}
              <line x1="640" y1="150" x2="640" y2="425" stroke="#7A756D" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="634" y1="150" x2="646" y2="150" stroke="#7A756D" strokeWidth="1" />
              <line x1="634" y1="425" x2="646" y2="425" stroke="#7A756D" strokeWidth="1" />
              <text x="655" y="290" textAnchor="start" fill="#504C44">H: 460 mm</text>

              {/* Joint radius tag */}
              <circle cx="390" cy="270" r="14" stroke="#8C6339" strokeWidth="1" strokeDasharray="2 2" fill="none" />
              <line x1="400" y1="260" x2="430" y2="235" stroke="#8C6339" strokeWidth="1" />
              <text x="435" y="233" fill="#8C6339" fontWeight="500">R12 SAFETY CHAMFER</text>

              {/* Dovetail note */}
              <line x1="535" y1="175" x2="570" y2="195" stroke="#3C3A36" strokeWidth="1" />
              <text x="575" y="200" fill="#3C3A36">TOOLLESS SLIDE-LOCK</text>
            </g>

            {/* Subtle Title Badge */}
            <text x="40" y="60" fill="#8C8880" className="font-mono text-[12px] tracking-widest uppercase">
              FIG. 01 — ISOMETRIC ASSEMBLY PROTOTYPE
            </text>
          </svg>

          {showOverlay && (
            <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3 text-xs font-mono text-[#6E6A63]">
              <span>MAT: 18mm BIRCH PLYWOOD</span>
              <span>/</span>
              <span>FINISH: PLANT-BASED WAX</span>
              <span>/</span>
              <span>AUTODESK FUSION 360</span>
            </div>
          )}
        </div>
      );

    case 'l-work-desk':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#18181A] flex items-center justify-center text-white ${className}`}>
          {/* Subtle dark engineering grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: `linear-gradient(#404044 1px, transparent 1px), linear-gradient(90deg, #404044 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
            }}
          />

          <svg className="w-full h-full max-w-[850px] max-h-[460px] p-6 z-10 transition-transform duration-700 hover:scale-[1.02]" viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ashHardwood" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8C8275" />
                <stop offset="100%" stopColor="#6E6457" />
              </linearGradient>
              <linearGradient id="blackSteelChassis" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2D2E32" />
                <stop offset="100%" stopColor="#18181B" />
              </linearGradient>
              <linearGradient id="screenCadGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0E2338" />
                <stop offset="100%" stopColor="#081420" />
              </linearGradient>
            </defs>

            {/* Shadow */}
            <ellipse cx="400" cy="410" rx="340" ry="20" fill="#000000" fillOpacity="0.5" />

            {/* Steel Frame (Under-structure) */}
            <path d="M 160 360 L 260 210 L 260 230 L 160 380 Z" fill="#232427" />
            <path d="M 640 360 L 540 210 L 540 230 L 640 380 Z" fill="#1C1D20" />
            <rect x="250" y="210" width="300" height="12" fill="#2A2B30" />

            {/* Main Desk Top: Bi-Zone Split Surface */}
            {/* Left: Solid Ash Hardwood Digital Realm */}
            <polygon points="120,220 340,110 500,110 280,220" fill="url(#ashHardwood)" />
            {/* Right: Matte Phenolic Prototyping Work Zone */}
            <polygon points="280,220 500,110 680,200 460,310" fill="#2A2C30" stroke="#3D4046" strokeWidth="1" />

            {/* Magnetic Tool Ledge with Precision Calipers & Knife */}
            <polygon points="460,310 680,200 680,208 460,318" fill="#161719" />
            <line x1="475" y1="298" x2="620" y2="225" stroke="#7A808C" strokeWidth="3" strokeLinecap="round" />
            {/* Calipers silhouette */}
            <path d="M 500 280 L 550 255 M 505 285 L 515 280" stroke="#C4CBD4" strokeWidth="1.5" />

            {/* Digital CAD Tablet on Stand with Wireframe Mesh */}
            <g transform="translate(230, 95)">
              {/* Stand */}
              <polygon points="60,60 80,60 70,85 50,85" fill="#1B1C1F" />
              {/* Tablet screen */}
              <polygon points="10,40 100,-5 125,50 35,95" fill="url(#screenCadGlow)" stroke="#4A5568" strokeWidth="1.5" />
              {/* Wireframe 3D sphere on screen */}
              <ellipse cx="65" cy="45" rx="24" ry="16" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.8" />
              <ellipse cx="65" cy="45" rx="16" ry="24" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.8" />
              <line x1="40" y1="45" x2="90" y2="45" stroke="#63B3ED" strokeWidth="1" opacity="0.9" />
            </g>

            {/* Physical Clay Model Block on Right Pad */}
            <g transform="translate(420, 190)">
              <polygon points="30,40 70,20 100,35 60,55" fill="#C2A88A" />
              <polygon points="60,55 100,35 100,50 60,70" fill="#A88E70" />
              <polygon points="30,40 60,55 60,70 30,55" fill="#8C7456" />
            </g>

            {/* Desk Legs (Laser-cut Steel Sheet) */}
            <path d="M 120 220 L 140 220 L 170 395 L 140 395 Z" fill="#202124" />
            <path d="M 460 310 L 480 310 L 490 415 L 465 415 Z" fill="#292A2E" />
            <path d="M 680 200 L 670 200 L 630 380 L 645 380 Z" fill="#1C1D1F" />

            {/* Technical Annotations */}
            <g opacity="0.75" className="font-mono text-[10px]" fill="#A0A5AF">
              <text x="50" y="60" fill="#828894" className="tracking-widest uppercase">
                SPEC. 02 — ASYMMETRIC DUAL-REALM WORKSTATION
              </text>
              <line x1="280" y1="220" x2="330" y2="270" stroke="#718096" strokeWidth="1" />
              <text x="335" y="275" fill="#CBD5E0">SEPARATION PLANE: DIGITAL / PHYSICAL</text>

              <line x1="580" y1="220" x2="630" y2="160" stroke="#718096" strokeWidth="1" />
              <text x="635" y="158" fill="#CBD5E0">MAGNETIC TOOL RAIL</text>
            </g>
          </svg>

          {showOverlay && (
            <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3 text-xs font-mono text-[#8C9099]">
              <span>SOLID ASH</span>
              <span>/</span>
              <span>MATTE BLACK STEEL</span>
              <span>/</span>
              <span>1600 × 780 × 740 MM</span>
            </div>
          )}
        </div>
      );

    case 'renewa':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#ECE8E1] flex items-center justify-center ${className}`}>
          {/* Subtle terrazzo particulate texture simulation */}
          <div className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(#9E9689 1px, transparent 1px), radial-gradient(#6B6358 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px'
            }}
          />

          <svg className="w-full h-full max-w-[800px] max-h-[460px] p-6 z-10 transition-transform duration-700 hover:scale-[1.02]" viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="trayShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#38322A" floodOpacity="0.14" />
              </filter>
            </defs>

            {/* Circular Tray Cast from 100% Recycled HDPE */}
            <g filter="url(#trayShadow)" transform="translate(240, 120)">
              {/* Outer rim */}
              <ellipse cx="160" cy="110" rx="150" ry="85" fill="#DCD5C9" stroke="#BEB5A5" strokeWidth="2" />
              {/* Inner bowl depression */}
              <ellipse cx="160" cy="115" rx="125" ry="65" fill="#EAE5DC" />

              {/* Terrazzo aggregate specks (monochrome black/grey/cream) */}
              <ellipse cx="120" cy="100" rx="6" ry="3" fill="#2B2824" transform="rotate(-15 120 100)" />
              <polygon points="170,125 180,120 178,130" fill="#4A443B" />
              <ellipse cx="210" cy="105" rx="8" ry="4" fill="#6E675C" transform="rotate(30 210 105)" />
              <circle cx="140" cy="130" r="3" fill="#302C26" />
              <polygon points="195,85 202,82 198,92" fill="#22201D" />
              <ellipse cx="110" cy="120" rx="5" ry="2" fill="#524B40" />
              <ellipse cx="230" cy="125" rx="4" ry="2" fill="#3A352D" />
              <circle cx="165" cy="95" r="2.5" fill="#1C1A17" />
              <ellipse cx="175" cy="140" rx="7" ry="3" fill="#4B443B" transform="rotate(-25 175 140)" />
            </g>

            {/* Secondary Rectangular Pen Rest / Vessel */}
            <g filter="url(#trayShadow)" transform="translate(110, 240)">
              <polygon points="0,50 160,-20 220,10 60,80" fill="#E4DED4" stroke="#C4BDB0" strokeWidth="1.5" />
              <polygon points="60,80 220,10 220,25 60,95" fill="#B3AAA0" />
              <polygon points="0,50 60,80 60,95 0,65" fill="#9C9388" />
              {/* Precision machined groove for fountain pen */}
              <line x1="40" y1="52" x2="160" y2="0" stroke="#8A8175" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
            </g>

            {/* Material Lifecycle Flow Diagram & Coordinate Tag */}
            <g className="font-mono text-[10px]" fill="#615B52">
              <text x="50" y="55" className="tracking-widest uppercase">
                RENEWA — CIRCULAR MOLDING STUDY #08
              </text>
              <text x="50" y="75" fill="#8A8275">
                SOURCE: POST-CONSUMER HDPE / NO CHEMICAL BINDERS
              </text>

              {/* Coordinate Stamp */}
              <g transform="translate(560, 340)">
                <rect x="0" y="0" width="180" height="42" fill="#E2DDD5" stroke="#BFB8AD" strokeWidth="1" />
                <text x="12" y="18" fill="#454038" fontWeight="600">STAMP: DEPO BNDG-04</text>
                <text x="12" y="32" fill="#696257">GEO: -6.9175° S, 107.6191° E</text>
              </g>

              {/* Compression Tooling Diagram */}
              <g transform="translate(580, 80)" opacity="0.7">
                <rect x="0" y="0" width="140" height="90" fill="none" stroke="#9C9487" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="20" y1="45" x2="120" y2="45" stroke="#9C9487" strokeWidth="1" />
                <text x="70" y="35" textAnchor="middle" fill="#756E63">HEAT: 185°C</text>
                <text x="70" y="65" textAnchor="middle" fill="#756E63">PRESS: 14.2 MPa</text>
              </g>
            </g>
          </svg>

          {showOverlay && (
            <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3 text-xs font-mono text-[#6B645A]">
              <span>100% RECYCLED HDPE</span>
              <span>/</span>
              <span>CLOSED-LOOP CIRCULAR DESIGN</span>
              <span>/</span>
              <span>EXHIBITED 2024</span>
            </div>
          )}
        </div>
      );

    case 'lens-and-lines':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#121214] flex items-center justify-center text-white ${className}`}>
          {/* Minimal 35mm optical viewfinder overlay */}
          <div className="absolute inset-8 border border-white/10 pointer-events-none">
            {/* Viewfinder crosshairs */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
              <div className="w-full h-[1px] bg-white/30 absolute top-1/2" />
              <div className="h-full w-[1px] bg-white/30 absolute left-1/2" />
            </div>
          </div>

          <div className="z-10 text-center px-6 max-w-lg">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
              VISUAL IDENTITY & CINEMA DIRECTION
            </span>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-3">
              LENS<span className="font-serif italic text-white/50">&</span>LINES
            </h3>
            <div className="w-16 h-[1px] bg-white/30 mx-auto my-4" />
            <p className="text-xs font-mono text-white/60 tracking-wider">
              BANDUNG / TOKYO · EST. 2024
            </p>
          </div>

          {showOverlay && (
            <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3 text-xs font-mono text-white/40">
              <span>35mm OPTICAL LOGIC</span>
              <span>/</span>
              <span>EDITORIAL TYPOGRAPHY</span>
            </div>
          )}
        </div>
      );

    default:
      return (
        <div className={`w-full h-full bg-[#EFECE6] flex items-center justify-center p-8 ${className}`}>
          <span className="font-mono text-xs text-[#8C8880] uppercase tracking-wider">ARI SAPUTRA ARCHIVE</span>
        </div>
      );
  }
};
