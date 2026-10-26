import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import { SERVICES } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';
import HomeDentists from '@/components/sections/home/HomeDentists';

export const metadata: Metadata = createMetadata({ title: 'Our team', description: 'Meet Ben at The Rockin’ Roofer LTD. Call +44 7570 354661 to discuss your project.', pathname: '/team/' });

export default function TeamPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Our team', path: '/team/' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-brand">The Rockin’ Roofer LTD</span>
            <WordRevealH1 text="Meet Ben at The Rockin’ Roofer LTD." />
            <p className="mt-6 font-body text-17 leading-relaxed text-forest-ink/85 md:text-21">The team handles roof repairs and replacements, tile repairs, re-pointing, lead flashing, fascia, soffits and guttering.</p>
          </div>
        </div>
      </section>
      <HomeDentists />
      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Our services</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Explore our services</h2>
          </AnimateOnScroll>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => <Link key={service.slug} href={`/${service.slug}/`} className="border border-mist bg-paper p-6 transition-colors hover:border-brand">
              <h3 className="font-display text-21 text-forest-ink">{service.name}</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-forest-ink/75">{service.shortDescription}</p>
              <span className="mt-5 inline-flex font-body text-13 font-semibold text-brand">View service →</span>
            </Link>)}
          </div>
        </div>
      </section>
    </div>
  );
}
