export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org", "@type": "Organization",
    name: "Iaboni Real Estate, Inc.", url: "https://iabonirealestate.com",
    description: "Full-service commercial real estate firm specializing in landlord and tenant representation.",
    address: { "@type": "PostalAddress", streetAddress: "1510 17th Street West", addressLocality: "Palmetto", addressRegion: "FL", postalCode: "34221", addressCountry: "US" },
    contactPoint: { "@type": "ContactPoint", telephone: "+1-941-981-5335", contactType: "customer service" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org", "@type": "RealEstateAgent",
    name: "Iaboni Real Estate, Inc.", telephone: "+1-941-981-5335",
    address: { "@type": "PostalAddress", streetAddress: "1510 17th Street West", addressLocality: "Palmetto", addressRegion: "FL", postalCode: "34221", addressCountry: "US" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
