import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ArrowRight, Shield, Leaf, Heart, Award, CheckCircle2 } from 'lucide-react';

const certificates = [
  {
    id: 'iso9001',
    icon: Shield,
    year: '2020',
    features: {
      ar: ['نظام إدارة الجودة المعتمد', 'تحسين مستمر للعمليات', 'رضا العملاء'],
      en: ['Certified Quality Management System', 'Continuous Process Improvement', 'Customer Satisfaction'],
    },
  },
  {
    id: 'iso14001',
    icon: Leaf,
    year: '2021',
    features: {
      ar: ['نظام الإدارة البيئية', 'ممارسات صديقة للبيئة', 'إدارة النفايات'],
      en: ['Environmental Management System', 'Eco-Friendly Practices', 'Waste Management'],
    },
  },
  {
    id: 'iso45001',
    icon: Heart,
    year: '2022',
    features: {
      ar: ['سلامة بيئة العمل', 'صحة العاملين', 'إدارة المخاطر'],
      en: ['Workplace Safety', 'Worker Health', 'Risk Management'],
    },
  },
  {
    id: 'saso',
    icon: Award,
    year: '2019',
    features: {
      ar: ['المواصفات السعودية', 'معايير الجودة المحلية', 'الامتثال التنظيمي'],
      en: ['Saudi Standards', 'Local Quality Standards', 'Regulatory Compliance'],
    },
  },
];

const additionalCertifications = {
  ar: [
    'شهادة تصنيف المقاولين من وزارة الشؤون البلدية',
    'عضوية الغرفة التجارية الصناعية بجدة',
    'شهادة السلامة المهنية من وزارة العمل',
    'اعتماد من الهيئة العامة للأرصاد وحماية البيئة',
    'شهادة مكافحة الحشرات من وزارة الزراعة',
  ],
  en: [
    'Contractor Classification Certificate from Ministry of Municipal Affairs',
    'Jeddah Chamber of Commerce and Industry Membership',
    'Occupational Safety Certificate from Ministry of Labor',
    'Accreditation from General Authority of Meteorology and Environmental Protection',
    'Pest Control Certificate from Ministry of Agriculture',
  ],
};

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('certificates');
  const isRTL = locale === 'ar';

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#002D54]">
        <div className="absolute inset-0 bg-[url('/images/hero-cleaning.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#6CC0E1] font-semibold text-sm uppercase tracking-wider mb-4 block">
              {locale === 'ar' ? 'الجودة والاعتماد' : 'Quality & Accreditation'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {t('title')}
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Certificates */}
      <section className="py-20 lg:py-32 bg-[#F4F7F9]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D54] mb-6 text-balance">
              {locale === 'ar' ? 'الشهادات الدولية' : 'International Certifications'}
            </h2>
            <p className="text-[#5A6A7A] text-lg leading-relaxed">
              {locale === 'ar'
                ? 'حاصلون على أهم الشهادات العالمية التي تضمن أعلى معايير الجودة والسلامة'
                : 'We hold the most important international certificates ensuring the highest quality and safety standards'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-[#6CC0E1]/10 rounded-2xl flex items-center justify-center shrink-0">
                    <cert.icon className="w-10 h-10 text-[#6CC0E1]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-[#002D54]">
                        {t(`list.${cert.id}.title`)}
                      </h3>
                      <span className="px-3 py-1 bg-[#6CC0E1]/10 text-[#6CC0E1] text-xs font-semibold rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-[#5A6A7A] mb-4">
                      {t(`list.${cert.id}.description`)}
                    </p>
                    <ul className="space-y-2">
                      {(isRTL ? cert.features.ar : cert.features.en).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-[#5A6A7A]">
                          <CheckCircle2 className="w-4 h-4 text-[#6CC0E1] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#6CC0E1] font-semibold text-sm uppercase tracking-wider mb-4 block">
                {locale === 'ar' ? 'اعتمادات إضافية' : 'Additional Accreditations'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002D54] mb-6 text-balance">
                {locale === 'ar'
                  ? 'اعتمادات محلية ورخص رسمية'
                  : 'Local Accreditations & Official Licenses'}
              </h2>
              <p className="text-[#5A6A7A] text-lg leading-relaxed mb-8">
                {locale === 'ar'
                  ? 'بالإضافة إلى الشهادات الدولية، نحمل جميع التراخيص والاعتمادات المحلية اللازمة للعمل في المملكة العربية السعودية'
                  : 'In addition to international certificates, we hold all necessary local licenses and accreditations to operate in Saudi Arabia'}
              </p>
              <ul className="space-y-4">
                {(isRTL ? additionalCertifications.ar : additionalCertifications.en).map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#6CC0E1]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-[#6CC0E1]" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#002D54] rounded-2xl p-10 text-center">
              <div className="w-24 h-24 bg-[#6CC0E1] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-[#001A33]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === 'ar' ? 'شركة معتمدة' : 'Certified Company'}
              </h3>
              <p className="text-white/70 mb-6">
                {locale === 'ar'
                  ? 'جميع شهاداتنا واعتماداتنا محدثة وسارية المفعول'
                  : 'All our certificates and accreditations are up-to-date and valid'}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-3xl font-bold text-[#6CC0E1]">4+</p>
                  <p className="text-white/60 text-sm">
                    {locale === 'ar' ? 'شهادات ISO' : 'ISO Certificates'}
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-3xl font-bold text-[#6CC0E1]">5+</p>
                  <p className="text-white/60 text-sm">
                    {locale === 'ar' ? 'تراخيص محلية' : 'Local Licenses'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-[#002D54] to-[#001A33] rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              {locale === 'ar' ? 'جودة موثوقة وخدمة معتمدة' : 'Reliable Quality & Certified Service'}
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              {locale === 'ar'
                ? 'تواصل معنا اليوم للحصول على خدمات تنظيف وصيانة معتمدة ومطابقة لأعلى المعايير'
                : 'Contact us today for certified cleaning and maintenance services that meet the highest standards'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6CC0E1] text-[#001A33] font-bold rounded-xl hover:bg-[#5AB0D1] transition-all hover:scale-105"
            >
              {locale === 'ar' ? 'احصل على عرض سعر' : 'Get a Quote'}
              {isRTL ? (
                <ArrowLeft className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
