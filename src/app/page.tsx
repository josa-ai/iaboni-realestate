"use client";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/seo/Schema";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center grid-overlay overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-surface/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-2xl space-y-8">
              <span className="text-text-muted text-lg font-medium tracking-wide uppercase">Est. 2009</span>
              <h1 className="text-primary">Iaboni<br/>Real Estate</h1>
              <div className="w-24 h-0.5 bg-accent" />
              <p className="text-xl text-text-secondary">Integrity, Experience, Creativity — A full-service commercial real estate firm with over 45 years of combined industry expertise.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get in Touch →</Link>
                <Link href="/services" className="btn-outline">Our Services</Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-primary text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-white/10">
              <Link href="/services#landlord" className="py-6 px-4 text-center hover:bg-white/5 group">
                <span className="block text-sm text-white/60 mb-1">For Landlords</span>
                <span className="font-medium group-hover:text-accent-light">Landlord Rep</span>
              </Link>
              <Link href="/services#tenant" className="py-6 px-4 text-center hover:bg-white/5 group">
                <span className="block text-sm text-white/60 mb-1">For Tenants</span>
                <span className="font-medium group-hover:text-accent-light">Tenant Rep</span>
              </Link>
              <Link href="/contact" className="py-6 px-4 text-center hover:bg-white/5 group">
                <span className="block text-sm text-white/60 mb-1">Get Started</span>
                <span className="font-medium group-hover:text-accent-light">Contact Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="relative py-24 overflow-hidden">
          <span className="section-number">01</span>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-reveal className="space-y-6">
                <span className="text-accent font-medium tracking-wide uppercase text-sm">Company Profile</span>
                <h2>We Get the<br/><em>Deals Done</em></h2>
                <div className="w-16 h-0.5 bg-accent" />
                <p className="text-text-secondary text-lg">Our real estate team specializes in providing strategic solutions for development, redevelopment, leasing, site selection, lease negotiations, market research, and property management throughout the United States and Canada.</p>
                <p className="text-text-secondary">Principals Randy and Deborah Iaboni have over 45 years of combined industry experience.</p>
                <Link href="/about" className="btn-outline inline-flex mt-4">Learn More About Us</Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary text-white p-8"><span className="block text-4xl font-display mb-2">45+</span><span className="text-white/70 text-sm">Years Combined Experience</span></div>
                  <div className="bg-surface-elevated p-8 shadow-md"><span className="block text-4xl font-display text-accent mb-2">US & CA</span><span className="text-text-secondary text-sm">Service Area</span></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-surface-elevated p-8 shadow-md"><span className="block text-4xl font-display mb-2">20+</span><span className="text-text-secondary text-sm">Years Helping Retailers</span></div>
                  <div className="bg-accent text-white p-8"><span className="block text-4xl font-display mb-2">100%</span><span className="text-white/80 text-sm">Client-Focused</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative py-24 bg-primary text-white overflow-hidden">
          <span className="section-number !text-white/5">02</span>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-accent-light font-medium tracking-wide uppercase text-sm">What We Do</span>
              <h2 className="mt-4 text-white">Our Services</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/services#landlord" className="group">
                <div className="card bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">Landlord Representation</h3>
                  <p className="text-white/60">We work with developers and property owners to maximize property value. We become your in-house leasing team.</p>
                </div>
              </Link>
              <Link href="/services#tenant" className="group">
                <div className="card bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">Tenant Representation</h3>
                  <p className="text-white/60">We assist retailers in identifying and opening store opportunities. We help answer: "Why this site?" and "Why not?"</p>
                </div>
              </Link>
            </div>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary">View All Services</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden">
          <span className="section-number">03</span>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">Let\'s Work Together</span>
            <h2 className="mt-4 mb-6">Ready to Discuss<br/>Your Project?</h2>
            <p className="text-text-secondary text-lg mb-8">Whether you\'re a property owner or retailer looking for the perfect location, we\'re here to help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us Today</Link>
              <a href="tel:941-981-5335" className="btn-outline">Call 941-981-5335</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a href="tel:941-981-5335" className="mobile-cta-float lg:hidden" aria-label="Call us">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </>
  );
}
