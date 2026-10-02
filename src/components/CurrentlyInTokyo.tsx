import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Compass, Clock } from 'lucide-react';

interface CurrentlyInTokyoProps {
  language: Language;
  isDark: boolean;
}

export const CurrentlyInTokyo: React.FC<CurrentlyInTokyoProps> = ({ language, isDark }) => {
  const [tokyoTime, setTokyoTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTokyoTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-24 border-t max-w-7xl mx-auto px-6 md:px-12 ${
        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
      }`}
    >
      <div
        className={`border rounded-sm p-8 sm:p-12 md:p-16 ${
          isDark ? 'border-[#2A2A2E] bg-[#141417]' : 'border-[#E8E6E0] bg-[#F7F6F1]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Coordinates & Headline */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-[#8C8880]">
              <Compass
                size={14}
                style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
              />
              <span>CURRENT LOCATION</span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-light tracking-tight ${
                isDark ? 'text-white' : 'text-[#141413]'
              }`}
            >
              {language === 'ja' ? '東京在住 — 現在の活動' : 'CURRENTLY IN TOKYO'}
            </h2>

            <p
              className={`text-sm sm:text-base font-light max-w-xl leading-relaxed ${
                isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
              }`}
            >
              {language === 'ja'
                ? '九段日本語学院にて日本語運用能力を高めながら、東京の建築空間、家具工房、展示会をフィールドワーク。日本とインドネシアの文化とデザイン架け橋となるプロジェクトを模索しています。'
                : 'Studying Japanese at Kudan Institute in Chiyoda-ku, exploring Tokyo’s architectural rhythms, material culture, and seeking collaborative design and photography commissions across Japan.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs text-[#8C8880]">
              <span>LAT: 35.6762° N</span>
              <span>·</span>
              <span>LONG: 139.6503° E</span>
              <span>·</span>
              <span>CHIYODA / SHINJUKU</span>
            </div>
          </div>

          {/* Right Live JST Clock & Ambient Card */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
            <div
              className={`p-6 border rounded-sm w-full max-w-xs space-y-3 ${
                isDark
                  ? 'bg-[#18181D] border-[#2A2A2E]'
                  : 'bg-[#FBFBF9] border-[#E8E6E0]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#8C8880]">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>JAPAN STANDARD TIME</span>
                </div>
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
                />
              </div>

              <div
                className={`text-3xl font-mono tracking-tight tabular-nums font-light ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {tokyoTime || '09:00:00'} <span className="text-xs text-[#8C8880]">JST</span>
              </div>

              <div
                className={`pt-2 border-t text-[11px] font-mono flex justify-between ${
                  isDark ? 'border-[#2A2A2E] text-[#8C8880]' : 'border-[#E8E6E0] text-[#78756E]'
                }`}
              >
                <span>STATUS</span>
                <span
                  className="font-medium"
                  style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
                >
                  OPEN FOR WORK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
