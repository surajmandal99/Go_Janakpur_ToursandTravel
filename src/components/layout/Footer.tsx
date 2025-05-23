import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press Center', path: '/press' },
        { name: 'Partner Network', path: '/partners' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    {
      title: 'Help',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Safety Information', path: '/safety' },
        { name: 'Cancellation Options', path: '/cancellation' },
        { name: 'Report Concern', path: '/report' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Destinations',
      links: [
        { name: 'Janakpur', path: '/destinations/janakpur' },
        { name: 'Kathmandu', path: '/destinations/kathmandu' },
        { name: 'Pokhara', path: '/destinations/pokhara' },
        { name: 'Lumbini', path: '/destinations/lumbini' },
        { name: 'Chitwan', path: '/destinations/chitwan' }
      ]
    },
    {
      title: 'For Travelers',
      links: [
        { name: 'Travel Deals', path: '/deals' },
        { name: 'Vacation Packages', path: '/packages' },
        { name: 'Group Tours', path: '/groups' },
        { name: 'Gift Cards', path: '/gift-cards' },
        { name: 'Travel Insurance', path: '/insurance' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, name: 'Facebook', url: 'https://facebook.com' },
    { icon: <Twitter size={20} />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: 'https://instagram.com' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <Youtube size={20} />, name: 'YouTube', url: 'https://youtube.com' }
  ];

  const contactInfo = [
    { icon: <Phone size={16} />, text: '+977 1234567890' },
    { icon: <Mail size={16} />, text: 'info@gojanakpurtours.com' },
    { icon: <MapPin size={16} />, text: 'Janakpur, Nepal' }
  ];

  return (
    <footer className="bg-[#0D3B69] text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Newsletter */}
        <div className="mb-10 p-6 bg-[#1A4F8A] rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-white/80">Get the latest deals and travel inspiration right in your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md text-gray-800 min-w-[240px] dark:bg-gray-700 dark:text-white"
              />
              <button className="bg-[#FCAF3D] text-[#1A4F8A] font-medium px-4 py-2 rounded-md hover:bg-[#F99D1C] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center text-white/80">
                <span className="mr-2">{info.icon}</span>
                <span>{info.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <img 
              src="https://i.ibb.co/VxKJ8Xm/logo.png"
              alt="GoJanakpurTours&Travels"
              className="h-16 w-auto object-contain mb-2"
            />
            <p className="text-white/70 text-sm mt-2">
              &copy; {new Date().getFullYear()} GoJanakpurTours&Travels. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom Links */}
        <div className="mt-8 text-center text-white/60 text-xs">
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Statement</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;