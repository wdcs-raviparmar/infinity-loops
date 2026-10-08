export const plans = [
  { name: 'Launch', label: 'BUILD YOUR FOUNDATION', description: 'For brands ready to show up.', price: '₹6,000', features: ['4–5 professional posts', '3–4 reels', 'Hashtags & captions', '1 platform: Instagram'] },
  { name: 'Grow', label: 'BUILD YOUR MOMENTUM', description: 'For brands finding their stride.', price: '₹10,000', featured: true, features: ['5–6 premium posts / carousels', '6–8 trending reels', 'SEO-optimised captions', 'Instagram & Facebook', 'Market trend research', '1 cinematic shoot or 2 extra reels'] },
  { name: 'Scale', label: 'EXPAND YOUR IMPACT', description: 'For brands thinking bigger.', price: '₹15,000', features: ['7–8 posts: carousels & infographics', '10–12 high-production reels', 'Instagram, Facebook & Google', 'Ads management', 'Business consulting', 'Competitor analysis', 'Market trends & growth strategy'] },
  { name: 'Premium', label: 'MAKE IT YOUR OWN', description: 'For a bigger brand vision.', price: '₹20,000–30,000', features: ['Custom webpage', 'Influencer collaborations', 'Enquiry-generation strategy', 'Blue-tick verification assistance', 'Model shoot', 'A scope tailored to your brand'] },
];
export const planNames = ['Not sure yet', ...plans.map(plan => plan.name)];
