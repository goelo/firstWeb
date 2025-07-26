import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | PlayIO Today',
  description: 'Privacy Policy for PlayIO Today - Learn how we collect, use, and protect your personal information.',
  robots: 'index, follow',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="text-sm text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            At PlayIO Today, we are committed to protecting your privacy. We collect minimal information 
            necessary to provide our gaming services:
          </p>
          <ul>
            <li><strong>Usage Data:</strong> We collect anonymous analytics data about how you use our website, including pages visited, games played, and time spent on our site.</li>
            <li><strong>Device Information:</strong> We may collect information about your device, browser type, and operating system to optimize your gaming experience.</li>
            <li><strong>Cookies:</strong> We use cookies to remember your preferences and improve site functionality.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain our gaming services</li>
            <li>Improve user experience and site performance</li>
            <li>Analyze usage patterns to enhance our game selection</li>
            <li>Display relevant advertisements (through third-party partners)</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties, except:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>With trusted service providers who assist in operating our website (under strict confidentiality agreements)</li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <p>
            Our website integrates with third-party services for analytics and advertising:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
            <li><strong>Game Platforms:</strong> Games are provided by third-party platforms with their own privacy policies</li>
            <li><strong>Advertising Partners:</strong> We work with advertising networks that may collect data for targeted advertising</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information against unauthorized 
            access, alteration, disclosure, or destruction. However, no method of transmission over the 
            internet is 100% secure.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our service is not directed to children under 13. We do not knowingly collect personal 
            information from children under 13. If you are a parent or guardian and believe your child
            has provided us with personal information, please contact us.
          </p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of certain data collection practices</li>
          </ul>

          <h2>8. Cookies Policy</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience. You can 
            control cookie settings through your browser preferences. Disabling cookies may affect 
            site functionality.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@playiotoday.com</li>
            <li>Website: <Link href="/" className="text-primary-600 hover:text-primary-700">PlayIO Today</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
