'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useInView } from '@/hooks/use-in-view';
import { Shield, Leaf, Heart, Award } from 'lucide-react';

const certificateIcons = {
  iso9001: Shield,
  iso14001: Leaf,
  iso45001: Heart,
  saso: Award,
};

export function CertificatesSection() {
  const t = useTranslations('certificates');
  const locale = useLocale();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const certificates = ['iso9001', 'iso14001', 'iso45001', 'saso'] as const;

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#6CC0E1] font-semibold text-sm uppercase tracking-wider mb-4 block">
            {locale === 'ar' ? 'الجودة والاعتماد' : 'Quality & Accreditation'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002D54] mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-[#5A6A7A] text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => {
            const Icon = certificateIcons[cert];
            return (
              <div
                key={cert}
                className={`group bg-[#F4F7F9] rounded-2xl p-8 text-center hover:bg-[#002D54] transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-[#6CC0E1]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#6CC0E1] transition-colors">
                  <Icon className="w-10 h-10 text-[#6CC0E1] group-hover:text-[#001A33] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#002D54] mb-3 group-hover:text-white transition-colors">
                  {t(`list.${cert}.title`)}
                </h3>

                {/* Description */}
                <p className="text-[#5A6A7A] text-sm group-hover:text-white/70 transition-colors">
                  {t(`list.${cert}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
