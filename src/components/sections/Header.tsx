"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-white font-display text-xl">I</div>
            <div className="hidden sm:block">
              <span className="block font-display text-xl leading-tight">Iaboni</span>
              <span className="block text-xs text-text-muted tracking-wide uppercase">Real Estate</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link text-sm font-medium text-text-secondary hover:text-primary">Home</Link>
            <Link href="/about" className="nav-link text-sm font-medium text-text-secondary hover:text-primary">About</Link>
            <Link href="/services" className="nav-link text-sm font-medium text-text-secondary hover:text-primary">Services</Link>
            <Link href="/contact" className="nav-link text-sm font-medium text-text-secondary hover:text-primary">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:941-981-5335" className="hidden lg:flex items-center gap-2 text-sm font-medium text-accent">941-981-5335</a>
            <Link href="/contact" className="hidden sm:block btn-primary text-sm py-2 px-4">Get in Touch</Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Services</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contact</Link>
            <a href="tel:941-981-5335" className="text-lg font-medium text-accent">941-981-5335</a>
          </div>
        )}
      </nav>
    </header>
  );
}
