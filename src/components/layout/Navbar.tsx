import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

const navigationItems = [
  { path: '/', label: 'Startseite' },
  { path: '/cyber-grooming', label: 'Cyber-Grooming' },
  { path: '/protection', label: 'Schutz & Prävention' },
  { path: '/learning-area', label: 'Lernumgebung' },
  { path: '/get-help', label: 'Hilfe bekommen' },
  { path: '/contact', label: 'Kontakt' }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Brand - Centered */}
          <Link to="/" className="flex items-center gap-3 text-[#1A1A1A] font-semibold text-lg">
            <img 
              src="/logo.png" 
              alt="Cyber-Schutz Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="hidden sm:block">Cyber-Schutz</span>
          </Link>
          
          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex gap-8 items-center">
            {navigationItems.slice(1, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#1A1A1A] font-medium'
                    : 'text-[#6B6B6B] hover:text-[#1A1A1A]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Right Side - CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/learning-area">
              <Button variant="primary" size="small" className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white">
                Lernumgebung
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1A1A1A]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-2xl font-light">{isOpen ? '×' : '☰'}</span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm ${
                  location.pathname === item.path
                    ? 'text-[#1A1A1A] font-medium'
                    : 'text-[#6B6B6B]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
