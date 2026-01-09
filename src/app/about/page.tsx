import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Iaboni Real Estate, Inc. - Randy and Deborah Iaboni bring over 45 years of combined commercial real estate experience.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative py-24 bg-primary text-white grid-overlay">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-accent-light font-medium tracking-wide uppercase text-sm">About Us</span>
            <h1 className="mt-4 text-white">Integrity, Experience,<br/><em>Creativity</em></h1>
            <div className="w-24 h-0.5 bg-accent mt-8" />
          </div>
        </section>
        <section className="relative py-24 overflow-hidden">
          <span className="section-number">01</span>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <span className="text-accent font-medium tracking-wide uppercase text-sm">Our Story</span>
                <h2>Building Relationships,<br/>Closing Deals</h2>
                <div className="w-16 h-0.5 bg-accent" />
                <p className="text-text-secondary text-lg">Iaboni Real Estate, Inc. is a privately-held, full-service commercial real estate firm specializing in development, leasing, site selection, and property management throughout the United States and Canada.</p>
                <p className="text-text-secondary">We have a proven track record and provide a hands-on approach to every service we provide our clients.</p>
              </div>
              <div className="bg-surface-elevated p-8 shadow-lg">
                <blockquote className="font-display text-2xl text-primary italic">"We are comfortable working in any capacity—whether acting as a client\'s in-house real estate department or working closely with their existing staff."</blockquote>
                <div className="w-16 h-0.5 bg-accent mt-6 mb-4" />
                <p className="text-text-secondary font-medium">We get the deals done.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">Leadership</span>
            <h2 className="mt-4">Meet Our Principals</h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
            <p className="mt-6 text-text-secondary max-w-2xl mx-auto">Randy and Deborah Iaboni have over 45 years of combined experience and are respected for their integrity, relationships, and strong negotiating skills.</p>
            <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">Randy Iaboni</h3>
                <p className="text-accent font-medium mb-2">Principal</p>
                <a href="mailto:randy@iabonirealestate.com" className="text-text-secondary hover:text-accent">randy@iabonirealestate.com</a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">Deborah Iaboni</h3>
                <p className="text-accent font-medium mb-2">Principal</p>
                <a href="mailto:deborah@iabonirealestate.com" className="text-text-secondary hover:text-accent">deborah@iabonirealestate.com</a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-white mb-6">Ready to Work With Us?</h2>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Get in Touch</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
