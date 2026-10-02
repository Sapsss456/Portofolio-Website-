import React, { useState } from 'react';
import { Language } from '../types';
import { ArrowUpRight, Copy, Check, Mail, MessageCircle, Instagram } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, isDark }) => {
  const [copied, setCopied] = useState(false);
  const email = 'sapssari456@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`py-24 md:py-36 border-t max-w-7xl mx-auto px-6 md:px-12 ${
        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
      }`}
    >
      <div className="space-y-16">
        {/* Section Label */}
        <div
          className={`flex items-center justify-between border-b pb-6 ${
            isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
            />
            07 / INQUIRY & COLLABORATION
          </span>
          <span className="font-mono text-xs text-[#8C8880]">
            TOKYO & WORLDWIDE
          </span>
        </div>

        {/* Large Typography Callout */}
        <div className="space-y-4">
          <h2
            className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-[-0.03em] leading-[0.95] ${
              isDark ? 'text-white' : 'text-[#141413]'
            }`}
          >
            {language === 'ja' ? '共に創る。' : "LET'S MAKE SOMETHING."}
          </h2>

          <p
            className={`text-lg sm:text-xl md:text-2xl font-light max-w-2xl pt-4 ${
              isDark ? 'text-[#B4B1A7]' : 'text-[#696761]'
            }`}
          >
            {language === 'ja'
              ? '家具設計、3Dモデリング、写真撮影、映像ディレクションのご相談、またはスタジオ協業のご連絡をお待ちしております。'
              : 'Available for industrial product design, 3D modeling commissions, architectural photography, and creative studio direction.'}
          </p>
        </div>

        {/* Contact Links & Copy Action */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t ${
            isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
          }`}
        >
          {/* Email Direct Action */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-mono text-xs text-[#8C8880] block uppercase">
              DIRECT EMAIL
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={`mailto:${email}`}
                className={`text-xl sm:text-2xl font-light border-b pb-0.5 transition-colors ${
                  isDark
                    ? 'text-white border-white hover:text-[#D9383A] hover:border-[#D9383A]'
                    : 'text-[#141413] border-[#141413] hover:text-[#C73E3A] hover:border-[#C73E3A]'
                }`}
              >
                {email}
              </a>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className={`flex items-center gap-1.5 py-1 px-2.5 text-xs font-mono rounded-sm border transition-colors ${
                  isDark
                    ? 'border-[#2A2A2E] text-white/70 hover:border-[#D9383A] hover:text-white bg-white/5'
                    : 'border-[#E0DED7] text-[#696761] hover:border-[#C73E3A] hover:text-[#141413] bg-black/5'
                }`}
              >
                {copied ? (
                  <Check size={12} style={{ color: isDark ? '#D9383A' : '#C73E3A' }} />
                ) : (
                  <Copy size={12} />
                )}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
            <p className="text-xs font-mono text-[#8C8880]">
              Typically responds within 24 hours (JST)
            </p>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-6 grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#8C8880] block uppercase">
                SOCIAL & MEDIA
              </span>
              <ul
                className={`space-y-2.5 text-sm font-medium ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity group"
                  >
                    <Instagram size={14} className="text-[#8C8880]" />
                    <span>Instagram</span>
                    <ArrowUpRight
                      size={13}
                      style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity group"
                  >
                    <MessageCircle size={14} className="text-[#8C8880]" />
                    <span>WhatsApp</span>
                    <ArrowUpRight
                      size={13}
                      style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sapssari456@gmail.com"
                    className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity group"
                  >
                    <Mail size={14} className="text-[#8C8880]" />
                    <span>Inquiry Form</span>
                    <ArrowUpRight
                      size={13}
                      style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-[#8C8880] block uppercase">
                STUDIO LOCATION
              </span>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#4A4742]'
                }`}
              >
                Kudan / Chiyoda-ku
                <br />
                Tokyo, Japan
                <br />
                <span className="font-mono text-xs text-[#8C8880]">Postal Code 102-0073</span>
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Closing Statement */}
        <div
          className={`pt-20 border-t text-center space-y-3 ${
            isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
          }`}
        >
          <p
            className={`text-2xl sm:text-3xl md:text-4xl font-light tracking-tight ${
              isDark ? 'text-white' : 'text-[#141413]'
            }`}
          >
            “Always Keep Learning and Evolving.”
          </p>
          <p
            className="font-serif italic text-sm sm:text-base"
            style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
          >
            常に学び、進化し続ける。
          </p>
        </div>
      </div>
    </section>
  );
};
