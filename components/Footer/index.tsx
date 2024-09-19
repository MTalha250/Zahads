// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/10  text-gray-700 py-10">
      <div className="container mx-auto px-6">
        <p className='text-secondary font-bold text-3xl text-center mx-auto mb-10 relative'>#BeYourOwnBoss<span className='absolute top-0 text-xs'>TM</span></p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="w-full px-6 mb-8 md:mb-0">
            <h2 className="text-secondary font-bold mb-4">MAIN OFFICE</h2>
            <p className="mb-2">Business Setup in Dubai</p>
            <p>Office 751, Tamani Arts Offices, Business Bay, Dubai </p>
            <a href="https://maps.google.com" className="text-blue-600 underline mt-2 inline-block">Click for Directions</a>
          </div>
          <div className="w-full px-6 mb-8 md:mb-0">
            <h2 className="text-secondary font-bold mb-4">FREE ZONES</h2>
            <ul>
              <li className="mb-2"><a href="/services/freezone-overview" className="hover:text-blue-600">Overview</a></li>
              <li className="mb-2"><a href="/services/business-activities" className="hover:text-blue-600">Business Activities</a></li>
              <li className="mb-2"><a href="/services/freezone-license" className="hover:text-blue-600">Free Zone License Locations and Pricing</a></li>
              <li className="mb-2"><a href="/services/uae-residence-visa" className="hover:text-blue-600">UAE Visas</a></li>
              <li className="mb-2"><a href="/services/registration-process" className="hover:text-blue-600">Registration Process</a></li>
              <li className="mb-2"><a href="/services/our-solution" className="hover:text-blue-600">Our solution</a></li>
            </ul>
          </div>
          <div className="w-full px-6 mb-8 md:mb-0">
            <h2 className="text-secondary font-bold mb-4">MAINLAND</h2>
            <ul>
              <li className="mb-2"><a href="/services/mainland-overview" className="hover:text-blue-600">Overview</a></li>
              <li className="mb-2"><a href="/services/sponsorship" className="hover:text-blue-600">Sponsorship</a></li>
              <li className="mb-2"><a href="/services/dubai-mainland-license" className="hover:text-blue-600">Dubai Mainland Licence</a></li>
              <li className="mb-2"><a href="/services/mainland-visas" className="hover:text-blue-600">Mainland Visas</a></li>
              <li className="mb-2"><a href="/services/business-activities" className="hover:text-blue-600">Mainland Activities</a></li>
              {/* <li className="mb-2"><a href="/services/" className="hover:text-blue-600">VirtuFit</a></li> */}
            </ul>
          </div>
          <div className="w-full px-6 mb-8 md:mb-0">
            <h2 className="text-secondary font-bold mb-4">SUPPORT</h2>
            <ul>
              <li className="mb-2"><a href="/contact" className="hover:text-blue-600">Support Services</a></li>
              <li className="mb-2"><a href="/faq" className="hover:text-blue-600">FAQs</a></li>
              <li className="mb-2"><a href="/guides" className="hover:text-blue-600">Setup Guides</a></li>
              <li className="mb-2"><a href="/partners" className="hover:text-blue-600">Our Partners</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-600">Citizenship & Residency</a></li>
              {/* <li className="mb-2"><a href="#" className="hover:text-blue-600">Stand Together UAE</a></li> */}
            </ul>
          </div>
          <div className="w-full px-6">
            <h2 className="text-secondary font-bold mb-4">RESOURCES</h2>
            <ul>
              <li className="mb-2"><a href="/about" className="hover:text-blue-600">About</a></li>
              <li className="mb-2"><a href="/faq" className="hover:text-blue-600">FAQs</a></li>
              <li className="mb-2"><a href="/partners" className="hover:text-blue-600">Our Partners</a></li>
              <li className="mb-2"><a href="/start-a-business" className="hover:text-blue-600">How to Start a Business in Dubai</a></li>
              <li className="mb-2"><a href="/get-a-trade-license" className="hover:text-blue-600">Trade License Dubai</a></li>
              <li className="mb-2"><a href="/guides" className="hover:text-blue-600">Free UAE Setup Guides</a></li>
              <li className="mb-2"><a href="/get-business-license-in-uae" className="hover:text-blue-600">Get Business License in UAE</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-wrap justify-between">
          <div className="text-center md:text-left">
            {/* <a href="#" className="text-gray-600 hover:text-blue-600 mr-4">ABOUT BIZVIBEZ</a> */}
            {/* <a href="#" className="text-gray-600 hover:text-blue-600 mr-4">SITEMAP</a> */}
            {/* <a href="" className="text-gray-600 hover:text-blue-600 mr-4">PRIVACY POLICY</a> */}
            <a href="/contact" className="text-gray-600 hover:text-blue-600 mr-4">CONTACT US</a>
            {/* <a href="" className="text-gray-600 hover:text-blue-600">PAYMENT GATEWAY</a> */}
          </div>
          <div className="mt-4 md:mt-0 flex justify-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mx-2">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
