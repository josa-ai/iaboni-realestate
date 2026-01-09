import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Services",
  description: "Commercial real estate services including landlord representation, tenant representation, site selection, and lease negotiations.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative py-24 bg-primary text-white grid-overlay">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-accent-light font-medium tracking-wide uppercase text-sm">Our Services</span>
            <h1 className="mt-4 text-white">Full-Service Commercial<br/><em>Real Estate Solutions</em></h1>
            <div className="w-24 h-0.5 bg-accent mt-8" />
            <p className="mt-6 text-white/70 text-lg max-w-2xl">From concept through Letter of Intent to Grand Opening — we guide every step.</p>
          </div>
        </section>

        <section id="landlord" className="relative py-24 overflow-hidden scroll-mt-24">
          <span className="section-number">01</span>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <span className="text-accent font-medium tracking-wide uppercase text-sm">For Property Owners</span>
                <h2>Landlord Representation</h2>
                <div className="w-16 h-0.5 bg-accent" />
                <p className="text-text-secondary text-lg">We work with developers and property owners to maximize property value through strategic leasing and tenant identification.</p>
                <p className="text-text-secondary">In many cases, we become the "in-house" leasing team—working as your advocate to identify and negotiate with potential tenants.</p>
              </div>
              <div className="bg-surface-elevated p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Our Landlord Services:</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li>✓ Tenant identification and outreach</li>
                  <li>✓ Lease negotiations</li>
                  <li>✓ Strategic tenant mix planning</li>
                  <li>✓ Market analysis and rent optimization</li>
                  <li>✓ Joint-venture opportunities</li>
                </ul>
                <Link href="/contact" className="btn-primary mt-8 w-full justify-center">Discuss Your Property</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="tenant" className="relative py-24 bg-surface overflow-hidden scroll-mt-24">
          <span className="section-number">02</span>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-surface-elevated p-8 shadow-lg order-2 lg:order-1">
                <h3 className="text-xl font-semibold mb-6">Our Tenant Services:</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li>✓ Market and demographic analysis</li>
                  <li>✓ Site selection and evaluation</li>
                  <li>✓ RFP coordination</li>
                  <li>✓ Lease and legal negotiations</li>
                  <li>✓ Move-in assistance</li>
                </ul>
                <Link href="/contact" className="btn-primary mt-8 w-full justify-center">Find Your Location</Link>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <span className="text-accent font-medium tracking-wide uppercase text-sm">For Retailers</span>
                <h2>Tenant Representation</h2>
                <div className="w-16 h-0.5 bg-accent" />
                <p className="text-text-secondary text-lg">We assist retailers in identifying and opening store opportunities throughout the US and Canada for over 20 years.</p>
                <div className="bg-accent/5 border-l-4 border-accent p-6">
                  <p className="font-display text-xl text-primary italic">"Why this particular site?"</p>
                  <p className="font-display text-xl text-primary italic mt-2">And: "Why not this site?"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Contact Us</Link>
              <a href="tel:941-981-5335" className="btn-primary bg-accent">Call 941-981-5335</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
