import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Introduction', path: '/introduction' },
    { name: 'Studies', path: '/studies' },
    { name: 'Bookshop', path: '/bookshop' },
    { name: 'Medical Missionary', path: '/medical-missionary' },
    { name: 'School', path: '/school' },
  ];

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@11THHOUR-et9fg' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    // { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'Phone', icon: Phone, url: 'tel:+254712376198' },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ministry Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span>SDA</span>
              </div>
              <div>
                <div className="text-white">Warning of last Days</div>
                <div className="text-blue-300">Ministry</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Spreading the truth through prophecy studies, natural remedies,
              and true education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>vincentmoriancho@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+254 705 982 280</span>
              </li>
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300 text-sm">
          <p>
            © {new Date().getFullYear()} Warning of Last Days Ministry. All
            rights reserved.
          </p>
          <p className="mt-2">
            Built with faith and dedication to spreading truth and health.
          </p>
        </div>
      </div>
    </footer>
  );
}
