import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for using the Ariston Developers website, including property information, project renders, pricing and enquiries.',
  alternates: {
    canonical: 'https://www.aristondevelopers.com/terms-and-conditions/',
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="2 November 2026"
      intro={
        <p>
          These terms govern your use of www.aristondevelopers.com, operated by Ariston Developers, Jayanagar 9th Block,
          Bangalore. By using this website you agree to these terms. If you do not agree, please do not use the site.
        </p>
      }
      sections={[
        {
          heading: 'Information on this website',
          body: (
            <p>
              The content on this website is for general information only. It does not constitute an offer, a contract, or
              legal, financial or investment advice. While we try to keep it accurate and up to date, we do not guarantee that
              all information is complete or current.
            </p>
          ),
        },
        {
          heading: 'Images, renders and specifications',
          body: (
            <p>
              Photographs, 3D renders, walkthroughs and videos are for illustration. Interior renders of upcoming projects,
              including Ariston Classic, show an indicative design. Furniture, décor, finishes, fittings and landscaping shown
              may not be part of the standard offering, and layouts, specifications and amenities may change during design
              approval and construction. The final specifications are those set out in the signed agreement.
            </p>
          ),
        },
        {
          heading: 'Prices, availability and launch dates',
          body: (
            <p>
              Prices are available on request and are subject to change without notice. Availability is not guaranteed until
              a booking is confirmed in writing. Launch and possession dates, such as the planned June 2027 launch of Ariston
              Classic, are estimates and may change due to approvals, regulations or circumstances beyond our control.
            </p>
          ),
        },
        {
          heading: 'Regulatory approvals',
          body: (
            <p>
              Where a project requires registration under the Real Estate (Regulation and Development) Act, 2016, bookings
              will be accepted only in line with that registration. Please ask us for the RERA registration details and
              approvals of any project before making a decision.
            </p>
          ),
        },
        {
          heading: 'Enquiries and agreements',
          body: (
            <p>
              Submitting an enquiry, contacting us on WhatsApp or visiting a property does not create any binding
              commitment for you or for us. Any purchase, sale, construction or joint venture is governed solely by the
              written agreement signed by both parties. We recommend you carry out your own due diligence and take
              independent legal advice.
            </p>
          ),
        },
        {
          heading: 'Intellectual property',
          body: (
            <p>
              The Ariston Developers name, logo, text, photographs, renders and videos on this website belong to Ariston
              Developers or its licensors. You may not copy, reproduce or use them commercially without our written
              permission.
            </p>
          ),
        },
        {
          heading: 'Acceptable use',
          body: (
            <p>
              You agree not to misuse this website, including by attempting to gain unauthorised access, disrupting its
              operation, or submitting false or misleading information.
            </p>
          ),
        },
        {
          heading: 'Third-party links',
          body: (
            <p>
              This website links to third-party services such as WhatsApp, Instagram, LinkedIn and Google Maps. We are not
              responsible for their content, availability or practices.
            </p>
          ),
        },
        {
          heading: 'Limitation of liability',
          body: (
            <p>
              To the extent permitted by law, Ariston Developers is not liable for any loss or damage arising from your use
              of this website or reliance on its content.
            </p>
          ),
        },
        {
          heading: 'Privacy',
          body: (
            <p>
              Your use of this website is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          ),
        },
        {
          heading: 'Governing law',
          body: (
            <p>
              These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the
              courts in Bangalore, Karnataka.
            </p>
          ),
        },
        {
          heading: 'Contact us',
          body: (
            <p>
              Questions about these terms? Call <a href="tel:+919945726707">+91 99457 26707</a> or email{' '}
              <a href="mailto:md@aristondevelopers.com">md@aristondevelopers.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
