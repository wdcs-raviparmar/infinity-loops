// All visible site text in English, Gujarati and Hindi. Plan names (Launch, Grow, Scale, Premium) stay in English everywhere:
// they are brand names and the server validates them. Everything else is translated.
const media = {
  en: {
    social: 'A hand scrolling a social media feed on a smartphone',
    content: 'A creator filming with a camera on a tripod in a green studio',
    ads: 'A phone screen showing a social app with ads and content',
    strategy: 'A team gathered around a laptop planning a strategy',
    web: 'A designer working on a website layout on a laptop',
  },
};

export const languages = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'gu', short: 'ગુ', name: 'ગુજરાતી' },
  { code: 'hi', short: 'हि', name: 'हिन्दी' },
];

export const copy = {
  en: {
    meta: { title: 'Infinity Loops — Creativity in motion. Growth on repeat.', description: 'Infinity Loops is a digital marketing agency connecting content, creativity and strategy. Explore social media packages from ₹6,000 per month.' },
    nav: { skip: 'Skip to content', home: 'Infinity Loops home', main: 'Main navigation', services: 'What we do', approach: 'Our approach', plans: 'Our plans', talk: 'Let’s talk', menuOpen: 'Open menu', menuClose: 'Close menu', toLight: 'Switch to light mode', toDark: 'Switch to dark mode', language: 'Language' },
    hero: { eyebrow: 'SOCIAL MEDIA & DIGITAL GROWTH AGENCY', line1: 'We make brands', line2: 'impossible to', words: ['ignore.', 'forget.', 'resist.', 'scroll past.'], aria: 'We make brands impossible to ignore.', description: 'Scroll-stopping reels, content and campaigns — planned, produced and managed for you every month.', cta: 'See our packages', more: 'What we do' },
    capabilities: ['Social Media', 'Content Creation', 'Brand Strategy', 'Performance Marketing', 'Digital Experiences'],
    services: {
      eyebrow: 'WHAT WE DO', a: 'Everything your brand', b: 'needs to', em: 'get noticed.', intro1: 'Five services, one connected team.', intro2: 'Pick what you need now, or let us build the full loop around your brand.', scroll: 'SCROLL TO EXPLORE', footerQ: 'Not sure which service you need?', footerLink: 'Tell us about your business',
      items: {
        social: { title: 'Social Media Management', label: 'SHOW UP CONSISTENTLY', copy: 'Give your Instagram and Facebook a clear plan. We organise your content, write the captions, and keep your brand showing up.', list: ['Content calendars', 'Captions & hashtags', 'Scheduling & publishing'], action: 'Plan my social media', media: media.en.social },
        content: { title: 'Content Creation', label: 'MAKE SOMETHING WORTH WATCHING', copy: 'From the first idea to the final edit, we create posts, carousels, and reels that tell your story in your own voice.', list: ['Posts & carousels', 'Reels & video editing', 'Brand shoots'], action: 'Plan my content', media: media.en.content },
        ads: { title: 'Paid Ads Management', label: 'REACH YOUR NEXT CUSTOMER', copy: 'Put your offer in front of the right people. We plan audiences, develop ad creatives, and refine campaigns as we learn what works.', list: ['Campaign setup', 'Audience targeting', 'Creative testing & optimisation'], action: 'Discuss my campaigns', media: media.en.ads },
        strategy: { title: 'Brand Strategy', label: 'START WITH A CLEAR DIRECTION', copy: 'Understand your audience, your competitors, and where your brand fits. Turn that research into a practical marketing plan.', list: ['Market & competitor research', 'Brand positioning', 'Campaign planning'], action: 'Build my strategy', media: media.en.strategy },
        web: { title: 'Website Design', label: 'GIVE YOUR BRAND A HOME', copy: 'A website that explains your business clearly and makes the next step easy. Designed around your brand, your visitors, and your goals.', list: ['Business websites', 'Landing pages', 'Responsive design'], action: 'Discuss my website', media: media.en.web },
      },
    },
    approach: {
      eyebrow: 'THE INFINITY APPROACH', pre: 'Good growth is a', em: 'loop.', lede: 'We keep listening, creating, and refining. Because your brand’s next chapter should build on the last.', again: 'And then we go again, every month.',
      steps: [
        { title: 'Find your direction', text: 'Understand your business, your audience, and what you want to achieve.' },
        { title: 'Create something worth noticing', text: 'Turn that direction into thoughtful visuals, compelling stories, and engaging content.' },
        { title: 'Put it in front of the right people', text: 'Bring your brand to life across the platforms that matter to your audience.' },
        { title: 'Learn. Refine. Repeat.', text: 'Use audience response and market insights to shape what comes next.' },
      ],
    },
    plans: {
      eyebrow: 'YOUR AMBITION. YOUR PLAN.', a: 'Small beginnings.', b: 'Infinite', em: 'potential.', sub1: 'A clear starting point for your next big move.', sub2: 'Choose the support your brand needs.', billing: 'Monthly packages · Prices in INR', featured: 'THE GROWTH SWEET SPOT', month: '/ month', custom: ' · custom scope', choose: 'Choose {name}', premiumCta: 'Let’s build your plan',
      note: 'Let’s align on deliverables, ad spend, shoot requirements, and any platform fees before we begin. Verification is subject to platform eligibility; enquiries and results vary.',
      byName: {
        Launch: { label: 'BUILD YOUR FOUNDATION', description: 'For brands ready to show up.', features: ['4–5 professional posts', '3–4 reels', 'Hashtags & captions', '1 platform: Instagram'] },
        Grow: { label: 'BUILD YOUR MOMENTUM', description: 'For brands finding their stride.', features: ['5–6 premium posts / carousels', '6–8 trending reels', 'SEO-optimised captions', 'Instagram & Facebook', 'Market trend research', '1 cinematic shoot or 2 extra reels'] },
        Scale: { label: 'EXPAND YOUR IMPACT', description: 'For brands thinking bigger.', features: ['7–8 posts: carousels & infographics', '10–12 high-production reels', 'Instagram, Facebook & Google', 'Ads management', 'Business consulting', 'Competitor analysis', 'Market trends & growth strategy'] },
        Premium: { label: 'MAKE IT YOUR OWN', description: 'For a bigger brand vision.', features: ['Custom webpage', 'Influencer collaborations', 'Enquiry-generation strategy', 'Blue-tick verification assistance', 'Model shoot', 'A scope tailored to your brand'] },
      },
    },
    faq: {
      eyebrow: 'A LITTLE MORE CLARITY', a: 'Good questions.', b: 'Clear', em: 'answers.', help: 'Can’t see yours here? Tell us about your brand and we’ll help you choose the right place to start.', ask: 'Ask us anything',
      items: [
        { q: 'Which package should I start with?', a: 'Launch gives you a consistent Instagram presence. Grow adds more content and a second platform. Scale brings ads management and business strategy into the mix. Premium is for custom web, creator, and production needs.' },
        { q: 'Can we tailor a package to my business?', a: 'Yes. Start with the closest package and tell us your priorities. We can discuss the platforms, content formats, and production support that suit your brand.' },
        { q: 'Is advertising spend included?', a: 'Scale includes ads management. Advertising budgets and any additional production or platform fees should be agreed separately before work starts.' },
        { q: 'What does verification assistance include?', a: 'Premium can include guidance through a platform’s verification process. The platform makes the final decision, and eligibility requirements and subscription fees may apply.' },
      ],
    },
    contact: {
      eyebrow: 'LET’S START SOMETHING GOOD', a: 'Your next chapter?', em: 'Let’s create it.', lede: 'Tell us a little about your brand. We’ll find the right way to move it forward.',
      steps: ['Tell us about your brand and what you want to achieve.', 'We recommend the package and plan that fits.', 'We get to work, and keep the loop going.'],
      preferEmail: 'PREFER EMAIL?', sample: 'Sample email · Replace with your business contact.', formTitle: 'Get into the loop.',
      name: 'Your name', email: 'Work email', business: 'Brand / business name', interested: 'I’m interested in', goals: 'A little about your goals', notSure: 'Not sure yet',
      pName: 'Alex Morgan', pEmail: 'alex@yourbrand.com', pBusiness: 'Your next big thing', pGoals: 'What would you love to achieve?',
      preview: 'Preview my enquiry', noteLive: 'Review your enquiry before sending. Your details will be saved so we can respond.', noteDemo: 'Demo form. Preview and download your brief; no enquiry is sent.',
      errBlank: 'Please complete every field with more than blank spaces.', errTimeout: 'The request timed out. We could not confirm whether your enquiry was saved.', errNetwork: 'We couldn’t reach the enquiry service. Please try again later.', errSave: 'Your enquiry could not be saved. Please try again.', errConfirm: 'We could not confirm your enquiry. Please try again.',
      dialogCloseAria: 'Close enquiry preview', close: 'Close', dialogEyebrow: 'YOUR NEXT CHAPTER', titleSent: 'You’re in the loop.', titleReady: 'Your brief is ready.',
      statusSent: 'Your enquiry has been saved successfully.', statusDemo: 'This is a demo preview. Nothing has been sent.', statusReview: 'Review your details, then send your enquiry.', send: 'Send my enquiry', sending: 'Sending…', download: 'Download my brief',
    },
    footer: { tagline: 'Creativity in motion. Growth on repeat.', blurb: 'A digital marketing agency for brands that want to be seen, remembered and chosen.', start: 'Start a project', explore: 'Explore', faq: 'FAQ', contact: 'Contact', services: 'Services', touch: 'Get in touch', note: 'Sample email · replace with your business contact.', bottom: 'Made for brands that refuse to blend in.', top: 'Top', topAria: 'Back to top' },
  },

  gu: {
    meta: { title: 'ઇન્ફિનિટી લૂપ્સ — ગતિમાં સર્જનાત્મકતા. વારંવાર વિકાસ.', description: 'Infinity Loops એક ડિજિટલ માર્કેટિંગ એજન્સી છે જે કન્ટેન્ટ, સર્જનાત્મકતા અને વ્યૂહરચનાને જોડે છે. દર મહિને ₹6,000 થી સોશિયલ મીડિયા પેકેજ જુઓ.' },
    nav: { skip: 'સામગ્રી પર જાઓ', home: 'Infinity Loops હોમ', main: 'મુખ્ય નેવિગેશન', services: 'અમે શું કરીએ', approach: 'અમારો અભિગમ', plans: 'અમારા પ્લાન', talk: 'ચાલો વાત કરીએ', menuOpen: 'મેનુ ખોલો', menuClose: 'મેનુ બંધ કરો', toLight: 'લાઇટ મોડ પર જાઓ', toDark: 'ડાર્ક મોડ પર જાઓ', language: 'ભાષા' },
    hero: { eyebrow: 'સોશિયલ મીડિયા અને ડિજિટલ ગ્રોથ એજન્સી', line1: 'અમે બ્રાન્ડ્સને બનાવીએ', line2: 'એવી કે જે', words: ['અવગણી ન શકાય.', 'ભુલાય નહીં.', 'યાદ રહી જાય.', 'બધાથી અલગ તરી આવે.'], aria: 'અમે બ્રાન્ડ્સને એવી બનાવીએ કે જે અવગણી ન શકાય.', description: 'સ્ક્રોલ અટકાવી દે તેવી રીલ્સ, કન્ટેન્ટ અને કેમ્પેઇન — દર મહિને તમારા માટે આયોજન, નિર્માણ અને સંચાલન સાથે.', cta: 'અમારા પેકેજ જુઓ', more: 'અમે શું કરીએ' },
    capabilities: ['સોશિયલ મીડિયા', 'કન્ટેન્ટ ક્રિએશન', 'બ્રાન્ડ સ્ટ્રેટેજી', 'પરફોર્મન્સ માર્કેટિંગ', 'ડિજિટલ અનુભવો'],
    services: {
      eyebrow: 'અમે શું કરીએ છીએ', a: 'તમારી બ્રાન્ડને', b: 'ધ્યાને આવવા માટે જે જોઈએ', em: 'બધું જ.', intro1: 'પાંચ સેવાઓ, એક જોડાયેલી ટીમ.', intro2: 'અત્યારે જે જોઈએ તે પસંદ કરો, અથવા તમારી બ્રાન્ડ માટે પૂરું લૂપ અમને બનાવવા દો.', scroll: 'સ્ક્રોલ કરીને જુઓ', footerQ: 'કઈ સેવા જોઈએ એ ખબર નથી?', footerLink: 'તમારા બિઝનેસ વિશે જણાવો',
      items: {
        social: { title: 'સોશિયલ મીડિયા મેનેજમેન્ટ', label: 'સતત દેખાતા રહો', copy: 'તમારા Instagram અને Facebook માટે સ્પષ્ટ યોજના. અમે કન્ટેન્ટ ગોઠવીએ છીએ, કેપ્શન લખીએ છીએ અને તમારી બ્રાન્ડને સતત દેખાતી રાખીએ છીએ.', list: ['કન્ટેન્ટ કેલેન્ડર', 'કેપ્શન અને હેશટેગ', 'શેડ્યૂલિંગ અને પબ્લિશિંગ'], action: 'મારું સોશિયલ મીડિયા પ્લાન કરો', media: 'સ્માર્ટફોન પર સોશિયલ મીડિયા ફીડ સ્ક્રોલ કરતો હાથ' },
        content: { title: 'કન્ટેન્ટ ક્રિએશન', label: 'જોવા લાયક કંઈક બનાવો', copy: 'પહેલા વિચારથી અંતિમ એડિટ સુધી, અમે પોસ્ટ, કેરોયુસેલ અને રીલ્સ બનાવીએ છીએ જે તમારી વાત તમારા જ અવાજમાં કહે.', list: ['પોસ્ટ અને કેરોયુસેલ', 'રીલ્સ અને વિડિયો એડિટિંગ', 'બ્રાન્ડ શૂટ'], action: 'મારું કન્ટેન્ટ પ્લાન કરો', media: 'ગ્રીન સ્ટુડિયોમાં ટ્રાઇપોડ પર કેમેરાથી શૂટ કરતો ક્રિએટર' },
        ads: { title: 'પેઇડ એડ્સ મેનેજમેન્ટ', label: 'તમારા આગલા ગ્રાહક સુધી પહોંચો', copy: 'તમારી ઑફર યોગ્ય લોકો સુધી પહોંચાડો. અમે ઑડિયન્સ નક્કી કરીએ છીએ, એડ ક્રિએટિવ બનાવીએ છીએ અને શું કામ કરે છે તે શીખતાં કેમ્પેઇન સુધારીએ છીએ.', list: ['કેમ્પેઇન સેટઅપ', 'ઑડિયન્સ ટાર્ગેટિંગ', 'ક્રિએટિવ ટેસ્ટિંગ અને ઑપ્ટિમાઇઝેશન'], action: 'મારા કેમ્પેઇન વિશે ચર્ચા કરો', media: 'સોશિયલ એપ અને જાહેરાતો બતાવતી ફોન સ્ક્રીન' },
        strategy: { title: 'બ્રાન્ડ સ્ટ્રેટેજી', label: 'સ્પષ્ટ દિશાથી શરૂઆત કરો', copy: 'તમારા ઑડિયન્સ, હરીફો અને તમારી બ્રાન્ડ ક્યાં બંધબેસે છે તે સમજો. એ સંશોધનને વ્યવહારુ માર્કેટિંગ યોજનામાં ફેરવો.', list: ['માર્કેટ અને હરીફ સંશોધન', 'બ્રાન્ડ પોઝિશનિંગ', 'કેમ્પેઇન પ્લાનિંગ'], action: 'મારી સ્ટ્રેટેજી બનાવો', media: 'લેપટોપ ફરતે ભેગી થઈ સ્ટ્રેટેજી બનાવતી ટીમ' },
        web: { title: 'વેબસાઇટ ડિઝાઇન', label: 'તમારી બ્રાન્ડને ઘર આપો', copy: 'એવી વેબસાઇટ જે તમારો બિઝનેસ સ્પષ્ટ સમજાવે અને આગળનું પગલું સરળ બનાવે. તમારી બ્રાન્ડ, મુલાકાતીઓ અને લક્ષ્યો આસપાસ ડિઝાઇન કરેલી.', list: ['બિઝનેસ વેબસાઇટ', 'લેન્ડિંગ પેજ', 'રિસ્પોન્સિવ ડિઝાઇન'], action: 'મારી વેબસાઇટ વિશે ચર્ચા કરો', media: 'લેપટોપ પર વેબસાઇટ લેઆઉટ પર કામ કરતો ડિઝાઇનર' },
      },
    },
    approach: {
      eyebrow: 'ઇન્ફિનિટી અભિગમ', pre: 'સારો વિકાસ એક', em: 'લૂપ છે.', lede: 'અમે સાંભળતા, બનાવતા અને સુધારતા રહીએ છીએ. કારણ કે તમારી બ્રાન્ડનું આગલું પ્રકરણ છેલ્લા પર જ બનવું જોઈએ.', again: 'અને પછી આપણે ફરી શરૂ કરીએ છીએ, દર મહિને.',
      steps: [
        { title: 'તમારી દિશા શોધો', text: 'તમારો બિઝનેસ, તમારા ઑડિયન્સ અને તમે શું હાંસલ કરવા માંગો છો તે સમજીએ.' },
        { title: 'ધ્યાન ખેંચે એવું કંઈક બનાવો', text: 'એ દિશાને વિચારશીલ વિઝ્યુઅલ, રસપ્રદ વાર્તાઓ અને આકર્ષક કન્ટેન્ટમાં ફેરવીએ.' },
        { title: 'યોગ્ય લોકો સામે મૂકો', text: 'તમારા ઑડિયન્સ માટે મહત્વના પ્લેટફોર્મ પર તમારી બ્રાન્ડને જીવંત બનાવીએ.' },
        { title: 'શીખો. સુધારો. ફરી કરો.', text: 'ઑડિયન્સના પ્રતિભાવ અને માર્કેટ ઇનસાઇટ્સથી આગળનું નક્કી કરીએ.' },
      ],
    },
    plans: {
      eyebrow: 'તમારી મહત્વાકાંક્ષા. તમારો પ્લાન.', a: 'નાની શરૂઆત.', b: 'અનંત', em: 'સંભાવના.', sub1: 'તમારા આગલા મોટા પગલાં માટે સ્પષ્ટ શરૂઆત.', sub2: 'તમારી બ્રાન્ડને જે સપોર્ટ જોઈએ તે પસંદ કરો.', billing: 'માસિક પેકેજ · કિંમતો INR માં', featured: 'ગ્રોથનું શ્રેષ્ઠ સ્થાન', month: '/ મહિને', custom: ' · કસ્ટમ સ્કોપ', choose: '{name} પસંદ કરો', premiumCta: 'ચાલો તમારો પ્લાન બનાવીએ',
      note: 'શરૂ કરતા પહેલાં ડિલિવરેબલ્સ, એડ ખર્ચ, શૂટની જરૂરિયાતો અને પ્લેટફોર્મ ફી અંગે સહમત થઈએ. વેરિફિકેશન પ્લેટફોર્મની પાત્રતા પર આધારિત છે; પૂછપરછ અને પરિણામો અલગ-અલગ હોઈ શકે.',
      byName: {
        Launch: { label: 'તમારો પાયો બનાવો', description: 'દેખાવા તૈયાર બ્રાન્ડ્સ માટે.', features: ['4–5 પ્રોફેશનલ પોસ્ટ', '3–4 રીલ્સ', 'હેશટેગ અને કેપ્શન', '1 પ્લેટફોર્મ: Instagram'] },
        Grow: { label: 'તમારી ગતિ બનાવો', description: 'પોતાની લય શોધતી બ્રાન્ડ્સ માટે.', features: ['5–6 પ્રીમિયમ પોસ્ટ / કેરોયુસેલ', '6–8 ટ્રેન્ડિંગ રીલ્સ', 'SEO-ઑપ્ટિમાઇઝ્ડ કેપ્શન', 'Instagram અને Facebook', 'માર્કેટ ટ્રેન્ડ રિસર્ચ', '1 સિનેમેટિક શૂટ અથવા 2 વધારાની રીલ્સ'] },
        Scale: { label: 'તમારો પ્રભાવ વધારો', description: 'મોટું વિચારતી બ્રાન્ડ્સ માટે.', features: ['7–8 પોસ્ટ: કેરોયુસેલ અને ઇન્ફોગ્રાફિક', '10–12 હાઈ-પ્રોડક્શન રીલ્સ', 'Instagram, Facebook અને Google', 'એડ્સ મેનેજમેન્ટ', 'બિઝનેસ કન્સલ્ટિંગ', 'હરીફોનું વિશ્લેષણ', 'માર્કેટ ટ્રેન્ડ અને ગ્રોથ સ્ટ્રેટેજી'] },
        Premium: { label: 'તેને તમારું પોતાનું બનાવો', description: 'મોટા બ્રાન્ડ વિઝન માટે.', features: ['કસ્ટમ વેબપેજ', 'ઇન્ફ્લુએન્સર કોલાબોરેશન', 'પૂછપરછ મેળવવાની સ્ટ્રેટેજી', 'બ્લુ-ટિક વેરિફિકેશન સહાય', 'મોડેલ શૂટ', 'તમારી બ્રાન્ડ મુજબનો સ્કોપ'] },
      },
    },
    faq: {
      eyebrow: 'થોડી વધુ સ્પષ્ટતા', a: 'સારા પ્રશ્નો.', b: 'સ્પષ્ટ', em: 'જવાબો.', help: 'તમારો પ્રશ્ન અહીં નથી? તમારી બ્રાન્ડ વિશે જણાવો, અમે શરૂઆત કરવાની સાચી જગ્યા પસંદ કરવામાં મદદ કરીશું.', ask: 'અમને કંઈપણ પૂછો',
      items: [
        { q: 'મારે કયા પેકેજથી શરૂ કરવું જોઈએ?', a: 'Launch તમને Instagram પર સતત હાજરી આપે છે. Grow વધુ કન્ટેન્ટ અને બીજું પ્લેટફોર્મ ઉમેરે છે. Scale માં એડ્સ મેનેજમેન્ટ અને બિઝનેસ સ્ટ્રેટેજી પણ આવે છે. Premium કસ્ટમ વેબ, ક્રિએટર અને પ્રોડક્શનની જરૂરિયાતો માટે છે.' },
        { q: 'શું અમારા બિઝનેસ મુજબ પેકેજમાં ફેરફાર થઈ શકે?', a: 'હા. સૌથી નજીકના પેકેજથી શરૂ કરો અને તમારી પ્રાથમિકતાઓ જણાવો. તમારી બ્રાન્ડને અનુરૂપ પ્લેટફોર્મ, કન્ટેન્ટ ફોર્મેટ અને પ્રોડક્શન સપોર્ટ વિશે અમે ચર્ચા કરી શકીએ.' },
        { q: 'શું જાહેરાતનો ખર્ચ સામેલ છે?', a: 'Scale માં એડ્સ મેનેજમેન્ટ સામેલ છે. જાહેરાતનું બજેટ અને વધારાનો પ્રોડક્શન કે પ્લેટફોર્મ ખર્ચ કામ શરૂ કરતા પહેલાં અલગથી નક્કી થવો જોઈએ.' },
        { q: 'વેરિફિકેશન સહાયમાં શું આવે છે?', a: 'Premium માં પ્લેટફોર્મની વેરિફિકેશન પ્રક્રિયામાં માર્ગદર્શન સામેલ હોઈ શકે. અંતિમ નિર્ણય પ્લેટફોર્મનો હોય છે, અને પાત્રતા શરતો તથા સબ્સ્ક્રિપ્શન ફી લાગુ પડી શકે.' },
      ],
    },
    contact: {
      eyebrow: 'ચાલો કંઈક સારું શરૂ કરીએ', a: 'તમારું આગલું પ્રકરણ?', em: 'ચાલો બનાવીએ.', lede: 'તમારી બ્રાન્ડ વિશે થોડું જણાવો. આગળ વધવાનો સાચો રસ્તો અમે શોધી કાઢીશું.',
      steps: ['તમારી બ્રાન્ડ અને લક્ષ્ય વિશે જણાવો.', 'અમે યોગ્ય પેકેજ અને પ્લાન સૂચવીએ.', 'અમે કામ શરૂ કરીએ અને લૂપ ચાલુ રાખીએ.'],
      preferEmail: 'ઇમેઇલ પસંદ છે?', sample: 'નમૂના ઇમેઇલ · તમારા બિઝનેસના સંપર્કથી બદલો.', formTitle: 'લૂપમાં જોડાઓ.',
      name: 'તમારું નામ', email: 'વર્ક ઇમેઇલ', business: 'બ્રાન્ડ / બિઝનેસનું નામ', interested: 'મને રસ છે', goals: 'તમારા લક્ષ્યો વિશે થોડું', notSure: 'હજી નક્કી નથી',
      pName: 'રાહુલ શાહ', pEmail: 'rahul@yourbrand.com', pBusiness: 'તમારું આગલું મોટું સ્વપ્ન', pGoals: 'તમે શું હાંસલ કરવા માંગો છો?',
      preview: 'મારી પૂછપરછ જુઓ', noteLive: 'મોકલતા પહેલાં તમારી પૂછપરછ તપાસો. અમે જવાબ આપી શકીએ તે માટે તમારી વિગતો સાચવવામાં આવશે.', noteDemo: 'ડેમો ફોર્મ. તમારી બ્રીફ જુઓ અને ડાઉનલોડ કરો; કોઈ પૂછપરછ મોકલાતી નથી.',
      errBlank: 'કૃપા કરીને દરેક ફીલ્ડ ખાલી જગ્યા સિવાય ભરો.', errTimeout: 'વિનંતીનો સમય પૂરો થયો. તમારી પૂછપરછ સચવાઈ કે નહીં તે અમે ખાતરીપૂર્વક કહી શકતા નથી.', errNetwork: 'અમે પૂછપરછ સેવા સુધી પહોંચી શક્યા નહીં. કૃપા કરીને પછી ફરી પ્રયાસ કરો.', errSave: 'તમારી પૂછપરછ સાચવી શકાઈ નહીં. કૃપા કરીને ફરી પ્રયાસ કરો.', errConfirm: 'અમે તમારી પૂછપરછની પુષ્ટિ કરી શક્યા નહીં. કૃપા કરીને ફરી પ્રયાસ કરો.',
      dialogCloseAria: 'પૂછપરછ પ્રીવ્યૂ બંધ કરો', close: 'બંધ કરો', dialogEyebrow: 'તમારું આગલું પ્રકરણ', titleSent: 'તમે લૂપમાં છો.', titleReady: 'તમારી બ્રીફ તૈયાર છે.',
      statusSent: 'તમારી પૂછપરછ સફળતાપૂર્વક સચવાઈ છે.', statusDemo: 'આ ડેમો પ્રીવ્યૂ છે. કંઈ મોકલાયું નથી.', statusReview: 'તમારી વિગતો તપાસો, પછી પૂછપરછ મોકલો.', send: 'મારી પૂછપરછ મોકલો', sending: 'મોકલી રહ્યા છીએ…', download: 'મારી બ્રીફ ડાઉનલોડ કરો',
    },
    footer: { tagline: 'ગતિમાં સર્જનાત્મકતા. વારંવાર વિકાસ.', blurb: 'એવી બ્રાન્ડ્સ માટે ડિજિટલ માર્કેટિંગ એજન્સી જે દેખાવા, યાદ રહેવા અને પસંદ થવા માંગે છે.', start: 'પ્રોજેક્ટ શરૂ કરો', explore: 'શોધો', faq: 'પ્રશ્નો', contact: 'સંપર્ક', services: 'સેવાઓ', touch: 'સંપર્કમાં રહો', note: 'નમૂના ઇમેઇલ · તમારા બિઝનેસના સંપર્કથી બદલો.', bottom: 'ભીડમાં ભળવાનો ઇનકાર કરતી બ્રાન્ડ્સ માટે.', top: 'ઉપર', topAria: 'ઉપર જાઓ' },
  },

  hi: {
    meta: { title: 'इन्फिनिटी लूप्स — गति में रचनात्मकता. बार-बार ग्रोथ.', description: 'Infinity Loops एक डिजिटल मार्केटिंग एजेंसी है जो कंटेंट, रचनात्मकता और रणनीति को जोड़ती है. हर महीने ₹6,000 से सोशल मीडिया पैकेज देखें.' },
    nav: { skip: 'सामग्री पर जाएँ', home: 'Infinity Loops होम', main: 'मुख्य नेविगेशन', services: 'हम क्या करते हैं', approach: 'हमारा तरीका', plans: 'हमारे प्लान', talk: 'बात करें', menuOpen: 'मेनू खोलें', menuClose: 'मेनू बंद करें', toLight: 'लाइट मोड पर जाएँ', toDark: 'डार्क मोड पर जाएँ', language: 'भाषा' },
    hero: { eyebrow: 'सोशल मीडिया और डिजिटल ग्रोथ एजेंसी', line1: 'हम ब्रांड्स को बनाते हैं', line2: 'ऐसे कि वे', words: ['अनदेखे न रहें.', 'भुलाए न जा सकें.', 'सबसे अलग दिखें.', 'हर किसी को याद रहें.'], aria: 'हम ब्रांड्स को ऐसे बनाते हैं कि वे अनदेखे न रहें.', description: 'स्क्रॉल रोक देने वाली रील्स, कंटेंट और कैंपेन — हर महीने आपके लिए प्लान, तैयार और मैनेज किए जाते हैं.', cta: 'हमारे पैकेज देखें', more: 'हम क्या करते हैं' },
    capabilities: ['सोशल मीडिया', 'कंटेंट क्रिएशन', 'ब्रांड स्ट्रैटेजी', 'परफॉर्मेंस मार्केटिंग', 'डिजिटल अनुभव'],
    services: {
      eyebrow: 'हम क्या करते हैं', a: 'आपके ब्रांड को', b: 'नज़र आने के लिए जो चाहिए', em: 'सब कुछ.', intro1: 'पाँच सेवाएँ, एक जुड़ी हुई टीम.', intro2: 'अभी जो चाहिए वह चुनें, या पूरा लूप हमें आपके ब्रांड के लिए बनाने दें.', scroll: 'स्क्रॉल करके देखें', footerQ: 'पता नहीं कौन-सी सेवा चाहिए?', footerLink: 'अपने बिज़नेस के बारे में बताएँ',
      items: {
        social: { title: 'सोशल मीडिया मैनेजमेंट', label: 'लगातार नज़र आते रहें', copy: 'आपके Instagram और Facebook के लिए साफ़ योजना. हम कंटेंट व्यवस्थित करते हैं, कैप्शन लिखते हैं और आपके ब्रांड को लगातार दिखाते रहते हैं.', list: ['कंटेंट कैलेंडर', 'कैप्शन और हैशटैग', 'शेड्यूलिंग और पब्लिशिंग'], action: 'मेरा सोशल मीडिया प्लान करें', media: 'स्मार्टफोन पर सोशल मीडिया फ़ीड स्क्रॉल करता हाथ' },
        content: { title: 'कंटेंट क्रिएशन', label: 'कुछ देखने लायक बनाएँ', copy: 'पहले आइडिया से अंतिम एडिट तक, हम पोस्ट, कैरोसेल और रील्स बनाते हैं जो आपकी कहानी आपकी ही आवाज़ में कहती हैं.', list: ['पोस्ट और कैरोसेल', 'रील्स और वीडियो एडिटिंग', 'ब्रांड शूट'], action: 'मेरा कंटेंट प्लान करें', media: 'ग्रीन स्टूडियो में ट्राइपॉड पर कैमरे से शूट करता क्रिएटर' },
        ads: { title: 'पेड एड्स मैनेजमेंट', label: 'अपने अगले ग्राहक तक पहुँचें', copy: 'अपना ऑफ़र सही लोगों तक पहुँचाएँ. हम ऑडियंस तय करते हैं, एड क्रिएटिव बनाते हैं और जो काम करता है उससे सीखकर कैंपेन सुधारते हैं.', list: ['कैंपेन सेटअप', 'ऑडियंस टार्गेटिंग', 'क्रिएटिव टेस्टिंग और ऑप्टिमाइज़ेशन'], action: 'मेरे कैंपेन पर चर्चा करें', media: 'सोशल ऐप और विज्ञापन दिखाती फ़ोन स्क्रीन' },
        strategy: { title: 'ब्रांड स्ट्रैटेजी', label: 'साफ़ दिशा से शुरुआत करें', copy: 'अपनी ऑडियंस, प्रतिस्पर्धियों और अपने ब्रांड की जगह को समझें. उस रिसर्च को व्यावहारिक मार्केटिंग योजना में बदलें.', list: ['मार्केट और प्रतिस्पर्धी रिसर्च', 'ब्रांड पोज़िशनिंग', 'कैंपेन प्लानिंग'], action: 'मेरी स्ट्रैटेजी बनाएँ', media: 'लैपटॉप के आसपास जुटकर रणनीति बनाती टीम' },
        web: { title: 'वेबसाइट डिज़ाइन', label: 'अपने ब्रांड को घर दें', copy: 'ऐसी वेबसाइट जो आपका बिज़नेस साफ़ समझाए और अगला कदम आसान बनाए. आपके ब्रांड, विज़िटर्स और लक्ष्यों के इर्द-गिर्द डिज़ाइन की गई.', list: ['बिज़नेस वेबसाइट', 'लैंडिंग पेज', 'रिस्पॉन्सिव डिज़ाइन'], action: 'मेरी वेबसाइट पर चर्चा करें', media: 'लैपटॉप पर वेबसाइट लेआउट पर काम करता डिज़ाइनर' },
      },
    },
    approach: {
      eyebrow: 'इन्फिनिटी तरीका', pre: 'अच्छी ग्रोथ एक', em: 'लूप है.', lede: 'हम सुनते, बनाते और सुधारते रहते हैं. क्योंकि आपके ब्रांड का अगला अध्याय पिछले पर ही बनना चाहिए.', again: 'और फिर हम दोबारा शुरू करते हैं, हर महीने.',
      steps: [
        { title: 'अपनी दिशा खोजें', text: 'आपका बिज़नेस, आपकी ऑडियंस और आप क्या हासिल करना चाहते हैं, यह समझते हैं.' },
        { title: 'ध्यान खींचने वाली चीज़ बनाएँ', text: 'उस दिशा को सोच-समझकर बनाए विज़ुअल, दमदार कहानियों और आकर्षक कंटेंट में बदलते हैं.' },
        { title: 'सही लोगों तक पहुँचाएँ', text: 'आपकी ऑडियंस के लिए ज़रूरी प्लेटफ़ॉर्म्स पर आपके ब्रांड को जीवंत करते हैं.' },
        { title: 'सीखें. सुधारें. दोहराएँ.', text: 'ऑडियंस की प्रतिक्रिया और मार्केट इनसाइट्स से तय करते हैं कि आगे क्या होगा.' },
      ],
    },
    plans: {
      eyebrow: 'आपकी महत्वाकांक्षा. आपका प्लान.', a: 'छोटी शुरुआत.', b: 'अनंत', em: 'संभावनाएँ.', sub1: 'आपके अगले बड़े कदम के लिए एक साफ़ शुरुआत.', sub2: 'अपने ब्रांड को जो सहयोग चाहिए वह चुनें.', billing: 'मासिक पैकेज · कीमतें INR में', featured: 'ग्रोथ का सही ठिकाना', month: '/ माह', custom: ' · कस्टम स्कोप', choose: '{name} चुनें', premiumCta: 'आइए आपका प्लान बनाएँ',
      note: 'शुरू करने से पहले डिलिवरेबल्स, एड खर्च, शूट की ज़रूरतों और प्लेटफ़ॉर्म शुल्क पर सहमत हो लें. वेरिफ़िकेशन प्लेटफ़ॉर्म की पात्रता पर निर्भर है; पूछताछ और नतीजे अलग-अलग हो सकते हैं.',
      byName: {
        Launch: { label: 'अपनी नींव बनाएँ', description: 'दिखने को तैयार ब्रांड्स के लिए.', features: ['4–5 प्रोफ़ेशनल पोस्ट', '3–4 रील्स', 'हैशटैग और कैप्शन', '1 प्लेटफ़ॉर्म: Instagram'] },
        Grow: { label: 'अपनी रफ़्तार बनाएँ', description: 'अपनी लय पकड़ रही ब्रांड्स के लिए.', features: ['5–6 प्रीमियम पोस्ट / कैरोसेल', '6–8 ट्रेंडिंग रील्स', 'SEO-ऑप्टिमाइज़्ड कैप्शन', 'Instagram और Facebook', 'मार्केट ट्रेंड रिसर्च', '1 सिनेमैटिक शूट या 2 अतिरिक्त रील्स'] },
        Scale: { label: 'अपना असर बढ़ाएँ', description: 'बड़ा सोचने वाली ब्रांड्स के लिए.', features: ['7–8 पोस्ट: कैरोसेल और इन्फ़ोग्राफ़िक', '10–12 हाई-प्रोडक्शन रील्स', 'Instagram, Facebook और Google', 'एड्स मैनेजमेंट', 'बिज़नेस कंसल्टिंग', 'प्रतिस्पर्धी विश्लेषण', 'मार्केट ट्रेंड और ग्रोथ स्ट्रैटेजी'] },
        Premium: { label: 'इसे अपना बनाएँ', description: 'बड़े ब्रांड विज़न के लिए.', features: ['कस्टम वेबपेज', 'इन्फ़्लुएंसर कोलैबोरेशन', 'पूछताछ जुटाने की रणनीति', 'ब्लू-टिक वेरिफ़िकेशन सहायता', 'मॉडल शूट', 'आपके ब्रांड के अनुसार दायरा'] },
      },
    },
    faq: {
      eyebrow: 'थोड़ी और स्पष्टता', a: 'अच्छे सवाल.', b: 'साफ़', em: 'जवाब.', help: 'आपका सवाल यहाँ नहीं है? अपने ब्रांड के बारे में बताएँ, हम शुरुआत की सही जगह चुनने में मदद करेंगे.', ask: 'हमसे कुछ भी पूछें',
      items: [
        { q: 'मुझे किस पैकेज से शुरुआत करनी चाहिए?', a: 'Launch आपको Instagram पर लगातार मौजूदगी देता है. Grow में ज़्यादा कंटेंट और दूसरा प्लेटफ़ॉर्म जुड़ता है. Scale में एड्स मैनेजमेंट और बिज़नेस स्ट्रैटेजी भी आती है. Premium कस्टम वेब, क्रिएटर और प्रोडक्शन की ज़रूरतों के लिए है.' },
        { q: 'क्या पैकेज को मेरे बिज़नेस के अनुसार बदला जा सकता है?', a: 'हाँ. सबसे नज़दीकी पैकेज से शुरू करें और अपनी प्राथमिकताएँ बताएँ. आपके ब्रांड के अनुकूल प्लेटफ़ॉर्म, कंटेंट फ़ॉर्मेट और प्रोडक्शन सपोर्ट पर हम चर्चा कर सकते हैं.' },
        { q: 'क्या विज्ञापन का खर्च शामिल है?', a: 'Scale में एड्स मैनेजमेंट शामिल है. विज्ञापन का बजट और अतिरिक्त प्रोडक्शन या प्लेटफ़ॉर्म शुल्क काम शुरू होने से पहले अलग से तय होने चाहिए.' },
        { q: 'वेरिफ़िकेशन सहायता में क्या शामिल है?', a: 'Premium में प्लेटफ़ॉर्म की वेरिफ़िकेशन प्रक्रिया में मार्गदर्शन शामिल हो सकता है. अंतिम निर्णय प्लेटफ़ॉर्म का होता है, और पात्रता शर्तें व सब्सक्रिप्शन शुल्क लागू हो सकते हैं.' },
      ],
    },
    contact: {
      eyebrow: 'चलिए कुछ अच्छा शुरू करें', a: 'आपका अगला अध्याय?', em: 'चलिए बनाते हैं.', lede: 'अपने ब्रांड के बारे में थोड़ा बताएँ. उसे आगे बढ़ाने का सही रास्ता हम खोज लेंगे.',
      steps: ['अपने ब्रांड और लक्ष्य के बारे में बताएँ.', 'हम सही पैकेज और प्लान सुझाते हैं.', 'हम काम शुरू करते हैं और लूप चलता रखते हैं.'],
      preferEmail: 'ईमेल पसंद है?', sample: 'नमूना ईमेल · अपने बिज़नेस के संपर्क से बदलें.', formTitle: 'लूप से जुड़ें.',
      name: 'आपका नाम', email: 'वर्क ईमेल', business: 'ब्रांड / बिज़नेस का नाम', interested: 'मेरी रुचि है', goals: 'अपने लक्ष्यों के बारे में थोड़ा', notSure: 'अभी तय नहीं',
      pName: 'राहुल शर्मा', pEmail: 'rahul@yourbrand.com', pBusiness: 'आपका अगला बड़ा सपना', pGoals: 'आप क्या हासिल करना चाहेंगे?',
      preview: 'मेरी पूछताछ देखें', noteLive: 'भेजने से पहले अपनी पूछताछ देखें. हम जवाब दे सकें, इसके लिए आपकी जानकारी सहेजी जाएगी.', noteDemo: 'डेमो फ़ॉर्म. अपनी ब्रीफ़ देखें और डाउनलोड करें; कोई पूछताछ भेजी नहीं जाती.',
      errBlank: 'कृपया हर फ़ील्ड खाली स्थान के अलावा कुछ भरकर पूरा करें.', errTimeout: 'अनुरोध का समय समाप्त हो गया. हम पुष्टि नहीं कर सकते कि आपकी पूछताछ सहेजी गई या नहीं.', errNetwork: 'हम पूछताछ सेवा तक नहीं पहुँच सके. कृपया बाद में पुनः प्रयास करें.', errSave: 'आपकी पूछताछ सहेजी नहीं जा सकी. कृपया पुनः प्रयास करें.', errConfirm: 'हम आपकी पूछताछ की पुष्टि नहीं कर सके. कृपया पुनः प्रयास करें.',
      dialogCloseAria: 'पूछताछ प्रीव्यू बंद करें', close: 'बंद करें', dialogEyebrow: 'आपका अगला अध्याय', titleSent: 'आप लूप में हैं.', titleReady: 'आपकी ब्रीफ़ तैयार है.',
      statusSent: 'आपकी पूछताछ सफलतापूर्वक सहेजी गई है.', statusDemo: 'यह डेमो प्रीव्यू है. कुछ भी भेजा नहीं गया है.', statusReview: 'अपनी जानकारी देखें, फिर पूछताछ भेजें.', send: 'मेरी पूछताछ भेजें', sending: 'भेज रहे हैं…', download: 'मेरी ब्रीफ़ डाउनलोड करें',
    },
    footer: { tagline: 'गति में रचनात्मकता. बार-बार ग्रोथ.', blurb: 'उन ब्रांड्स के लिए डिजिटल मार्केटिंग एजेंसी जो दिखना, याद रहना और चुना जाना चाहती हैं.', start: 'प्रोजेक्ट शुरू करें', explore: 'एक्सप्लोर करें', faq: 'सवाल', contact: 'संपर्क', services: 'सेवाएँ', touch: 'संपर्क करें', note: 'नमूना ईमेल · अपने बिज़नेस के संपर्क से बदलें.', bottom: 'भीड़ में घुलने से इनकार करने वाली ब्रांड्स के लिए.', top: 'ऊपर', topAria: 'ऊपर जाएँ' },
  },
};
