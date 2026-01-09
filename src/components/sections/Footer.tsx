import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent flex items-center justify-center text-white font-display text-2xl">I</div>
              <div>
                <span className="block font-display text-2xl leading-tight">Iaboni</span>
                <span className="block text-sm text-white/60 tracking-wide uppercase">Real Estate, Inc.</span>
              </div>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">A full-service commercial real estate firm providing landlord and tenant representation throughout the United States and Canada.</p>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/60 hover:text-accent-light">Home</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-accent-light">About Us</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-accent-light">Services</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-accent-light">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>1510 17th Street West<br/>Palmetto, FL 34221</li>
              <li><a href="tel:941-981-5335" className="hover:text-accent-light">941-981-5335</a></li>
              <li><a href="mailto:randy@iabonirealestate.com" className="hover:text-accent-light">Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Iaboni Real Estate, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
