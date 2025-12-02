import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [studiesOpen, setStudiesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Introduction', path: '/introduction' },
    {
      name: 'Studies',
      path: '/studies',
      hasDropdown: true,
      dropdownItems: [
        { name: 'State of Death', path: '/studies?topic=state-of-death' },
        { name: 'True Baptism', path: '/studies?topic=baptism' },
        { name: 'True Faith', path: '/studies?topic=faith' },
        { name: 'Prophecy', path: '/studies?topic=prophecy' },
      ],
    },
    { name: 'Bookshop', path: '/bookshop' },
    { name: 'Medical Missionary', path: '/medical-missionary' },
    { name: 'School', path: '/school' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white">SDA</span>
            </div>
            <div className="hidden md:block">
              <div className="text-blue-900">Warning of Last Days</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <div>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 transition-colors ${
                        isActive(link.path)
                          ? 'text-blue-600'
                          : 'text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {link.dropdownItems && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`transition-colors ${
                      isActive(link.path)
                        ? 'text-blue-600'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setStudiesOpen(!studiesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${studiesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {studiesOpen && link.dropdownItems && (
                      <div className="bg-slate-50">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-8 py-2 text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 transition-colors ${
                      isActive(link.path)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
