'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useInView } from '@/hooks/use-in-view';

// Placeholder client logos using company initials
const clients = [
  { name: 'Aramco', initials: 'AR' },
  { name: 'SABIC', initials: 'SB' },
  { name: 'STC', initials: 'STC' },
  { name: 'Al Rajhi Bank', initials: 'ARB' },
  { name: 'Saudi Airlines', initials: 'SA' },
  { name: 'NEOM', initials: 'NM' },
  { name: 'Red Sea Global', initials: 'RS' },
  { name: 'Ministry of Health', initials: 'MH' },
];

export function ClientsSection() {
  const t = useTranslations('clients');
  const locale = useLocale();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#F4F7F9]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#6CC0E1] font-semibold text-sm uppercase tracking-wider mb-4 block">
            {locale === 'ar' ? 'شركاء النجاح' : 'Success Partners'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002D54] mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-[#5A6A7A] text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group bg-white rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-20 h-20 bg-[#002D54]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#002D54] transition-colors">
                  <span className="text-2xl font-bold text-[#002D54] group-hover:text-white transition-colors">
                    {client.initials}
                  </span>
                </div>
                <p className="text-sm text-[#5A6A7A] font-medium">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
