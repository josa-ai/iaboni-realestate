import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Iaboni Real Estate, Inc. Call 941-981-5335 or email us to discuss your commercial real estate needs.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative py-24 bg-primary text-white grid-overlay">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-accent-light font-medium tracking-wide uppercase text-sm">Get in Touch</span>
            <h1 className="mt-4 text-white">Let\'s Discuss Your<br/><em>Real Estate Goals</em></h1>
            <div className="w-24 h-0.5 bg-accent mt-8" />
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <span className="text-accent font-medium tracking-wide uppercase text-sm">Contact Information</span>
                  <h2 className="mt-4">Reach Out to Us</h2>
                  <div className="w-16 h-0.5 bg-accent mt-6" />
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-text-secondary">Iaboni Real Estate, Inc.<br/>1510 17th Street West<br/>Palmetto, FL 34221</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:941-981-5335" className="text-text-secondary hover:text-accent">941-981-5335</a>
                    <p className="text-text-muted text-sm">Fax: 941-981-5334</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:randy@iabonirealestate.com" className="block text-text-secondary hover:text-accent">randy@iabonirealestate.com</a>
                    <a href="mailto:deborah@iabonirealestate.com" className="block text-text-secondary hover:text-accent">deborah@iabonirealestate.com</a>
                  </div>
                </div>
                <div className="bg-surface p-8">
                  <h3 className="font-semibold mb-4">Service Areas</h3>
                  <p className="text-text-secondary">We provide commercial real estate services throughout the <strong>United States</strong> and <strong>Canada</strong>.</p>
                </div>
              </div>

              <div className="bg-surface-elevated p-8 lg:p-12 shadow-lg">
                <h3 className="text-2xl font-display mb-2">Send Us a Message</h3>
                <p className="text-text-secondary mb-8">Fill out the form and we\'ll get back to you soon.</p>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input type="text" required className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input type="text" required className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Inquiry *</label>
                    <select required className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none">
                      <option value="">Select an option</option>
                      <option value="landlord">Landlord Representation</option>
                      <option value="tenant">Tenant Representation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea required rows={5} className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">Send Message →</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
