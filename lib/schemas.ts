import { COMPANY_INFO } from './constants';

/**
 * LocalBusiness Schema for Top Rated Chimney Services
 * Used on homepage and key pages for local SEO
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_INFO.name,
  image: 'https://topratedchimney.com/og-image.jpg',
  description: 'Expert chimney services including sweeping, inspection, repair, and installation in the Atlanta and Marietta area.',
  telephone: `+1-${COMPANY_INFO.phoneTel}`,
  email: COMPANY_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address,
    addressLocality: 'Marietta',
    addressRegion: 'GA',
    postalCode: '30067',
    addressCountry: 'US',
  },
  priceRange: '$',
  areaServed: [
    {
      '@type': 'City',
      name: 'Marietta',
      '@id': 'https://en.wikipedia.org/wiki/Marietta,_Georgia',
    },
    {
      '@type': 'City',
      name: 'Atlanta',
      '@id': 'https://en.wikipedia.org/wiki/Atlanta',
    },
    {
      '@type': 'City',
      name: 'Alpharetta',
      '@id': 'https://en.wikipedia.org/wiki/Alpharetta,_Georgia',
    },
    {
      '@type': 'City',
      name: 'Roswell',
      '@id': 'https://en.wikipedia.org/wiki/Roswell,_Georgia',
    },
    {
      '@type': 'City',
      name: 'Smyrna',
      '@id': 'https://en.wikipedia.org/wiki/Smyrna,_Georgia',
    },
    {
      '@type': 'City',
      name: 'Dunwoody',
      '@id': 'https://en.wikipedia.org/wiki/Dunwoody,_Georgia',
    },
  ],
  sameAs: [
    'https://www.facebook.com/topratedchimney',
    'https://www.google.com/maps/place/Top+Rated+Chimney+Services',
  ],
};

/**
 * Service Schema for individual service pages
 * @param serviceName - Name of the service
 * @param description - Detailed description
 * @param price - Price range if applicable
 */
export const serviceSchema = (
  serviceName: string,
  description: string,
  price: string = '$'
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description,
  provider: {
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    telephone: `+1-${COMPANY_INFO.phoneTel}`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Greater Atlanta',
  },
  priceRange: price,
  url: 'https://topratedchimney.com',
});

/**
 * Organization Schema for footer/sitewide use
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  url: 'https://topratedchimney.com',
  logo: 'https://topratedchimney.com/logo.png',
  description: 'Professional chimney services in Atlanta, GA',
  sameAs: [
    'https://www.facebook.com/topratedchimney',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: `+1-${COMPANY_INFO.phoneTel}`,
    email: COMPANY_INFO.email,
  },
};

/**
 * FAQPage Schema - Can be used if FAQ content is added
 */
export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/**
 * BreadcrumbList Schema for service pages
 * @param breadcrumbs - Array of breadcrumb items with name and url
 */
export const breadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});
