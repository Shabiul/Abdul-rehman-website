import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Ariston Developers collects, uses and protects the personal information you share through our website, WhatsApp, phone and email.',
  alternates: {
    canonical: 'https://www.aristondevelopers.com/privacy-policy/',
  },
};

const contact = (
  <p>
    Ariston Developers, #1716/135, East End A Main Road, Jayanagar 9th Block, Bangalore 560069 · Phone{' '}
    <a href="tel:+919945726707">+91 99457 26707</a> · Email{' '}
    <a href="mailto:md@aristondevelopers.com">md@aristondevelopers.com</a>
  </p>
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="2 November 2026"
      intro={
        <p>
          Ariston Developers (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what
          personal information we collect when you use www.aristondevelopers.com or contact us, why we collect it, and the
          choices you have. We process personal data in line with the Digital Personal Data Protection Act, 2023 and the
          Information Technology Act, 2000.
        </p>
      }
      sections={[
        {
          heading: 'Information we collect',
          body: (
            <>
              <p>We only collect information you choose to give us, such as when you fill in our enquiry form, call, email or message us:</p>
              <ul>
                <li>Your name, phone number and email address</li>
                <li>Your property interest, budget, purpose (buy, sell or invest) and any message you write</li>
                <li>Details you share during consultations, site visits or negotiations</li>
              </ul>
              <p>
                Our website does not ask you to create an account and does not collect payment details. Our hosting provider
                may automatically record basic technical data (such as IP address, browser type and pages visited) to keep the
                site secure and working.
              </p>
            </>
          ),
        },
        {
          heading: 'How our enquiry form works',
          body: (
            <p>
              Our contact form does not store your details on our servers. When you press &ldquo;Send on WhatsApp&rdquo;, it
              prepares a message in WhatsApp with the details you entered. Nothing is sent until you press send inside
              WhatsApp. Once sent, your message is handled under WhatsApp&apos;s own privacy policy as well as this one.
            </p>
          ),
        },
        {
          heading: 'How we use your information',
          body: (
            <ul>
              <li>To respond to your enquiry and arrange consultations or site visits</li>
              <li>To share property details, project updates and offers that match what you asked about</li>
              <li>To carry out property transactions, documentation and legal due diligence on your behalf</li>
              <li>To meet our legal, tax and regulatory obligations</li>
            </ul>
          ),
        },
        {
          heading: 'Sharing your information',
          body: (
            <>
              <p>We do not sell or rent your personal information. We share it only when needed to serve you, with:</p>
              <ul>
                <li>Legal advisors, banks, lenders and registration authorities involved in your transaction</li>
                <li>Service providers who help us run our business, under confidentiality obligations</li>
                <li>Government or law enforcement authorities where required by law</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'How long we keep it',
          body: (
            <p>
              We keep your information only as long as needed for the purpose you shared it for, or as required by law (for
              example, records of completed property transactions). After that, we delete it or make it anonymous.
            </p>
          ),
        },
        {
          heading: 'Security',
          body: (
            <p>
              We take reasonable steps to protect your information from unauthorised access, loss or misuse. No method of
              transmission over the internet is completely secure, so we cannot guarantee absolute security.
            </p>
          ),
        },
        {
          heading: 'Your rights',
          body: (
            <>
              <p>You can ask us at any time to:</p>
              <ul>
                <li>Tell you what personal information we hold about you</li>
                <li>Correct or update inaccurate information</li>
                <li>Delete your information, where we are not legally required to keep it</li>
                <li>Stop sending you property updates or marketing messages</li>
              </ul>
              <p>To make a request or raise a grievance, contact us using the details below. We aim to respond within 30 days.</p>
            </>
          ),
        },
        {
          heading: 'Third-party links',
          body: (
            <p>
              Our website links to WhatsApp, Instagram, LinkedIn and Google Maps. These services have their own privacy
              policies, and we are not responsible for how they handle your data.
            </p>
          ),
        },
        {
          heading: 'Changes to this policy',
          body: (
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it was
              last changed.
            </p>
          ),
        },
        { heading: 'Contact us', body: contact },
      ]}
    />
  );
}
