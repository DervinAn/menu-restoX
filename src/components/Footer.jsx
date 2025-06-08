import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer"className='relative bg-gradient-to-br from-orange-50 via-white/40 to-orange-100 border-t-8 border-orange-200 py-12 sm:py-16 md:py-20'>
      <div className='container mx-auto px-4 sm:px-6 md:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 sm:mb-12'>

          {/* Brand/About */}
          <div>
           <h3 className='text-xl font-semibold text-orange-600 mb-4'>Garden Food</h3>
            <p className='text-gray-700 text-sm'>
              Savor the finest tastes and celebrate every bite. Join us on a flavorful journey filled with joy and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold text-orange-600 mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-gray-700'>
              <li><a href="#" className='hover:text-orange-500 transition'>Home</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Menu</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>About</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold text-orange-600 mb-4'>Contact</h4>
            <ul className='space-y-2 text-sm text-gray-700'>
              <li>123 Flavor Street</li>
              <li>Gourmet City, GC 45678</li>
              <li>Email: contact@epicuraan.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='text-lg font-semibold text-orange-600 mb-4'>Follow Us</h4>
            <div className='flex space-x-4'>
              <a href="#" className='text-orange-500 hover:text-orange-700 transition'><FaFacebookF /></a>
              <a href="#" className='text-orange-500 hover:text-orange-700 transition'><FaTwitter /></a>
              <a href="#" className='text-orange-500 hover:text-orange-700 transition'><FaInstagram /></a>
              <a href="#" className='text-orange-500 hover:text-orange-700 transition'><FaEnvelope /></a>
            </div>
          </div>
        </div>

        {/* Footer bottom note */}
        <div className='text-center text-sm text-gray-600 mt-10'>
          &copy; {new Date().getFullYear()} Epicuraan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
