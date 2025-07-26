import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | PlayIO Today',
  description: 'Terms of Service for PlayIO Today - Read our terms and conditions for using our gaming platform.',
  robots: 'index, follow',
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <div className="text-sm text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using PlayIO Today (&quot;the Service&quot;), you accept and agree to be bound by
            the terms and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            PlayIO Today is a web-based platform that provides access to HTML5 games and related content. 
            The service is provided free of charge and is supported by advertising revenue.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>As a user of our service, you agree to:</p>
          <ul>
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>Not interfere with or disrupt the service or servers</li>
            <li>Not use automated systems to access the service without permission</li>
            <li>Respect intellectual property rights of game developers and content creators</li>
          </ul>

          <h2>4. Content and Intellectual Property</h2>
          <p>
            The games available on our platform are provided by third-party developers and publishers. 
            We do not claim ownership of the games themselves, but we do own the website design, 
            layout, and original content we create.
          </p>

          <h2>5. Third-Party Content</h2>
          <p>
            Our service includes games and content from third-party providers. We are not responsible 
            for the content, accuracy, or availability of third-party games. Each game may have its 
            own terms of use and privacy policy.
          </p>

          <h2>6. Advertising</h2>
          <p>
            Our service is supported by advertising. By using our service, you agree to the display 
            of advertisements. We work with third-party advertising networks that may collect data 
            for targeted advertising purposes.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The service is provided &quot;as is&quot; without any warranties, expressed or implied. We do not
            warrant that the service will be uninterrupted, error-free, or completely secure.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            In no event shall PlayIO Today be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including without limitation, loss of profits, 
            data, use, goodwill, or other intangible losses.
          </p>

          <h2>9. Age Restrictions</h2>
          <p>
            Our service is intended for users aged 13 and older. Users under 13 should not use our 
            service without parental supervision and consent.
          </p>

          <h2>10. Prohibited Uses</h2>
          <p>You may not use our service:</p>
          <ul>
            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
          </ul>

          <h2>11. Termination</h2>
          <p>
            We may terminate or suspend your access to our service immediately, without prior notice 
            or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material, we will try to provide at least 30 days notice prior to any new 
            terms taking effect.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be interpreted and governed by the laws of the jurisdiction in which 
            our company is registered, without regard to its conflict of law provisions.
          </p>

          <h2>14. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li>Email: legal@playiotoday.com</li>
            <li>Website: <Link href="/" className="text-primary-600 hover:text-primary-700">PlayIO Today</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
