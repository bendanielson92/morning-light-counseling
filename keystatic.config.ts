import { config, fields, collection, singleton } from '@keystatic/core';

// Local mode on your machine; GitHub mode wherever the build has
// PUBLIC_KEYSTATIC_GITHUB_REPO=owner/name set (i.e. on Vercel).
// This config also runs in the browser, so only PUBLIC_ env vars are usable.
const repo = import.meta.env.PUBLIC_KEYSTATIC_GITHUB_REPO as `${string}/${string}` | undefined;

const storage = repo?.includes('/')
  ? ({ kind: 'github', repo } as const)
  : ({ kind: 'local' } as const);

const faqArray = fields.array(
  fields.object({
    question: fields.text({ label: 'Question' }),
    answer: fields.text({ label: 'Answer', multiline: true }),
  }),
  {
    label: 'FAQs',
    itemLabel: (props) => props.fields.question.value || 'FAQ',
  }
);

export default config({
  storage,
  ui: {
    brand: { name: 'Morning Light Counseling' },
  },
  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/singletons/settings',
      format: { data: 'json' },
      schema: {
        phone: fields.text({ label: 'Phone number' }),
        email: fields.text({ label: 'Email address' }),
        addressStreet: fields.text({ label: 'Street address' }),
        addressCity: fields.text({ label: 'City, State ZIP' }),
        officeHours: fields.text({
          label: 'Office hours',
          description: 'Shown on the Contact page. Leave blank to hide.',
        }),
        carepatronUrl: fields.url({
          label: 'Client portal link (CarePatron)',
          description: 'Where the "Client Portal" button for current clients goes.',
        }),
        selfPayRate: fields.text({
          label: 'Self-pay rate',
          description: 'e.g. $125 per session',
        }),
        sessionLength: fields.text({
          label: 'Session length',
          description: 'e.g. 50 minutes. Leave blank to hide.',
        }),
        insurances: fields.array(fields.text({ label: 'Insurance' }), {
          label: 'Insurance plans accepted',
          itemLabel: (props) => props.value || 'Insurance',
        }),
        telehealthNote: fields.text({
          label: 'Telehealth note',
          description: 'e.g. In-person in Manheim, PA and online across Pennsylvania.',
        }),
        licenseLine: fields.text({
          label: 'License line (shown in footer)',
          description: 'e.g. William ____, LPC — PA License #PC012345',
        }),
      },
    }),
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/singletons/homepage',
      format: { data: 'json' },
      schema: {
        heroTitle: fields.text({ label: 'Hero headline' }),
        heroSubtitle: fields.text({ label: 'Hero subheadline', multiline: true }),
        heroCtaLabel: fields.text({ label: 'Hero button label' }),
        welcomeHeading: fields.text({ label: 'Welcome heading' }),
        welcomeBody: fields.text({ label: 'Welcome paragraphs', multiline: true }),
        counselingHeading: fields.text({ label: '"What counseling is" heading' }),
        counselingBody: fields.text({ label: '"What counseling is" paragraphs', multiline: true }),
        servicesHeading: fields.text({ label: 'Services section heading' }),
        servicesIntro: fields.text({ label: 'Services section intro', multiline: true }),
        isolationHeading: fields.text({ label: 'Isolation section heading' }),
        isolationBody: fields.text({ label: 'Isolation section paragraphs', multiline: true }),
        isolationCtaLabel: fields.text({ label: 'Isolation section link label' }),
      },
    }),
    about: singleton({
      label: 'About Page',
      path: 'src/content/singletons/about',
      format: { data: 'json' },
      schema: {
        pageTitle: fields.text({ label: 'Page title' }),
        intro: fields.text({ label: 'Intro line', multiline: true }),
        headshot: fields.image({
          label: 'Headshot',
          directory: 'public/images/uploads',
          publicPath: '/images/uploads/',
        }),
        bio: fields.text({ label: 'Bio paragraphs', multiline: true }),
        approachHeading: fields.text({ label: 'Approach heading' }),
        approachBody: fields.text({ label: 'Approach paragraphs', multiline: true }),
        credentials: fields.array(fields.text({ label: 'Credential' }), {
          label: 'Credentials',
          itemLabel: (props) => props.value || 'Credential',
        }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        quoteAttribution: fields.text({ label: 'Quote attribution' }),
      },
    }),
    mensCounseling: singleton({
      label: "Men's Counseling Page",
      path: 'src/content/singletons/mens-counseling',
      format: { data: 'json' },
      schema: {
        pageTitle: fields.text({ label: 'Page title' }),
        heroTagline: fields.text({ label: 'Hero tagline', multiline: true }),
        sections: fields.array(
          fields.object({
            heading: fields.text({ label: 'Section heading' }),
            body: fields.text({ label: 'Section paragraphs', multiline: true }),
          }),
          {
            label: 'Page sections',
            itemLabel: (props) => props.fields.heading.value || 'Section',
          }
        ),
        faqs: faqArray,
      },
    }),
    whatToExpect: singleton({
      label: 'What to Expect Page',
      path: 'src/content/singletons/what-to-expect',
      format: { data: 'json' },
      schema: {
        pageTitle: fields.text({ label: 'Page title' }),
        intro: fields.text({ label: 'Intro paragraphs', multiline: true }),
        steps: fields.array(
          fields.object({
            title: fields.text({ label: 'Step title' }),
            description: fields.text({ label: 'Step description', multiline: true }),
          }),
          {
            label: 'Steps to get started',
            itemLabel: (props) => props.fields.title.value || 'Step',
          }
        ),
        closing: fields.text({ label: 'Closing paragraphs', multiline: true }),
        faqs: faqArray,
      },
    }),
  },
  collections: {
    services: collection({
      label: 'Counseling Pages',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            description: 'Shown as the page headline, e.g. "Anxiety Counseling for Men"',
          },
        }),
        navTitle: fields.text({
          label: 'Short title',
          description: 'Used on cards and in the footer, e.g. "Anxiety"',
        }),
        summary: fields.text({
          label: 'Card summary',
          description: 'One or two sentences shown on the homepage card.',
          multiline: true,
        }),
        metaDescription: fields.text({
          label: 'Search description',
          description: 'Shown in Google results (~155 characters).',
          multiline: true,
        }),
        order: fields.integer({ label: 'Display order', defaultValue: 10 }),
        faqs: faqArray,
        body: fields.markdoc({ label: 'Page content' }),
      },
    }),
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Publish date' }),
        description: fields.text({
          label: 'Description',
          description: 'A sentence or two shown in the blog list and search results.',
          multiline: true,
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Drafts are not shown on the site.',
          defaultValue: false,
        }),
        body: fields.markdoc({ label: 'Post content' }),
      },
    }),
  },
});
