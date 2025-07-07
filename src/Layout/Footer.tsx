import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#232536] text-gray-300 py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="space-y-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/043/213/057/non_2x/car-logo-against-red-and-blue-background-design-a-sleek-emblem-for-an-automotive-repair-business-minimalist-simple-modern-logo-design-free-vector.jpg"
            alt="CarBlog Logo"
            className="h-12 w-12 rounded-full shadow-lg"
          />
          <h2 className="text-white text-2xl font-bold tracking-wide">CarBlog</h2>
          <p className="text-gray-400 text-sm">
            Your ultimate source for car reviews, news, and automotive tips. Stay updated with the latest trends and insights.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
              <li>
              <Link href="/blogs" className="hover:text-indigo-400 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
          <address className="not-italic space-y-2 text-gray-400 text-sm">
            <p>1234 Auto Lane</p>
            <p>Car City, CA 90210</p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-indigo-400">+1 (234) 567-890</a></p>
            <p>Email: <a href="mailto:info@carblog.com" className="hover:text-indigo-400">info@carblog.com</a></p>
          </address>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get the latest car news and updates directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 rounded-full bg-[#1e2130] border border-gray-600 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-red-600 hover:bg-indigo-700 text-white font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} CarBlog. All rights reserved.
      </div>
    </footer>
  );
}
