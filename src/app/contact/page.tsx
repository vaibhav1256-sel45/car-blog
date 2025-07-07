import ContactForm from "@/components/Contact/ContactForm";
import Layout from "@/Layout/Layout";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  return (
    <Layout>
      <main className="relative min-h-[90vh] flex flex-col items-center justify-start py-0 mt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question or want to share your thoughts? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-4 sm:mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FiMail className="h-5 w-5 text-[#E74C3C]" />
                    <span className="text-gray-700 text-sm sm:text-base">contact@carblog.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiPhone className="h-5 w-5 text-[#E74C3C]" />
                    <span className="text-gray-700 text-sm sm:text-base">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="h-5 w-5 text-[#E74C3C]" />
                    <span className="text-gray-700 text-sm sm:text-base">123 Car Street, Auto City, AC 12345</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] mb-3 sm:mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-4 sm:mb-6">Send us a Message</h2>
  <ContactForm />
</div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
