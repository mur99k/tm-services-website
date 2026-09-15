'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { TmLogoMark } from '@/components/brand/tm-logo-mark';

const content = {
  ar: {
    badge: 'قريباً',
    headline:
      'ننتظر استلام المبلغ حتى يتاح الموقع، بعد سداد المبالغ المستحقة. شكراً لكم.',
    title: 'نعمل على شيء مميز',
    subtitle:
      'موقع TM Services قيد التطوير حالياً. نبني لكم تجربة رقمية تليق بخدماتنا في التنظيف والصيانة.',
    progress: 'جاري العمل على الموقع',
    rights: 'جميع الحقوق محفوظة',
    credit: 'إنشاء MUR99K',
  },
  en: {
    badge: 'Coming Soon',
    headline:
      'We await receipt of payment for the site to be made available, upon settlement of outstanding amounts. Thank you.',
    title: 'Something Great is Coming',
    subtitle:
      'TM Services website is under development. We are building a digital experience worthy of our cleaning and maintenance services.',
    progress: 'Website in progress',
    rights: 'All rights reserved',
    credit: 'Created by MUR99K',
  },
} as const;

type Locale = keyof typeof content;

export function MaintenanceContent() {
  const [locale, setLocale] = useState<Locale>('ar');
  const [progress, setProgress] = useState(0);
  const t = content[locale];
  const isRTL = locale === 'ar';

  useEffect(() => {
    const timer = setTimeout(() => setProgress(72), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative min-h-screen overflow-hidden bg-[#001A33]"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cleaning.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#002D54] via-[#001A33] to-[#000d1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(108,192,225,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(108,192,225,0.08)_0%,_transparent_50%)]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 -start-20 w-72 h-72 rounded-full bg-[#6CC0E1]/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -end-16 w-96 h-96 rounded-full bg-[#6CC0E1]/8 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(108,192,225,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,192,225,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Language toggle */}
      <div className="absolute top-6 end-6 z-20 flex gap-1 p-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
        {(['ar', 'en'] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => setLocale(lang)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              locale === lang
                ? 'bg-[#6CC0E1] text-[#001A33]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {lang === 'ar' ? 'عربي' : 'EN'}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <TmLogoMark variant="light" className="h-12 sm:h-14" priority />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6CC0E1]/15 border border-[#6CC0E1]/30 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#6CC0E1]" />
            <span className="text-[#6CC0E1] text-sm font-semibold tracking-wide">
              {t.badge}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#6CC0E1] animate-pulse" />
          </motion.div>

          {/* Main headline — payment notice */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed text-balance"
          >
            {t.headline}
          </motion.h1>

          {/* Secondary title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-[#6CC0E1] mb-4"
          >
            {t.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            {t.subtitle}
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12 max-w-md mx-auto"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-white/50 text-sm">{t.progress}</span>
              <span className="text-[#6CC0E1] text-sm font-semibold">{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#6CC0E1] to-[#4da8cc]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
              />
            </div>
          </motion.div>

        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-6 text-center text-white/30 text-sm space-y-1"
        >
          <p>
            &copy; {new Date().getFullYear()} TM Services. {t.rights}
          </p>
          <p className="text-white/40">{t.credit}</p>
        </motion.footer>
      </div>
    </div>
  );
}
