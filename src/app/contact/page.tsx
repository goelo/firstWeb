import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - PlayIO Today',
  description: 'Get in touch with PlayIO Today for support, feedback, or business inquiries.',
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you. Get in touch with us for any questions or feedback.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:contact@playio-today.com" className="text-primary-600 hover:text-primary-700">
                    contact@playio-today.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Support</h3>
                <p className="text-gray-600">
                  For technical issues or game-related questions, please email us with details about your issue.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Business Inquiries</h3>
                <p className="text-gray-600">
                  For partnerships, advertising, or business opportunities, please reach out via email.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Message</h2>
            <p className="text-gray-600 mb-4">
              Send us a quick message and we'll get back to you as soon as possible.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 text-center">
                Contact form coming soon. For now, please use the email address above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
