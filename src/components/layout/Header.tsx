import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Heart, Bell, Globe, HelpCircle, Bed, Car, Briefcase, Search, LogOut } from 'lucide-react';
import Button from '../common/Button';
import ThemeToggle from '../common/ThemeToggle';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stays', icon: <Bed size={16} />, path: '/' },
    { name: 'Flights', icon: <Briefcase size={16} />, path: '/flights' },
    { name: 'Car Rentals', icon: <Car size={16} />, path: '/car-rentals' },
    { name: 'Attractions', icon: <Search size={16} />, path: '/attractions' }
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 w-full 
        ${isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-gradient-to-b from-primary-light/90 to-primary-light/70 dark:from-gray-900/90 dark:to-gray-900/70 backdrop-blur-sm py-4'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-6">
              <img 
                src="https://i.ibb.co/VxKJ8Xm/logo.png"
                alt="GoJanakpurTours&Travels"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center text-sm font-medium hover:opacity-80 transition-opacity
                    ${isScrolled 
                      ? `${location.pathname === link.path ? 'text-primary-light dark:text-white' : 'text-gray-600 dark:text-gray-300'}` 
                      : `${location.pathname === link.path ? 'text-white' : 'text-white/80'}`
                    }
                    ${location.pathname === link.path ? 'border-b-2 border-secondary-light dark:border-secondary-dark pb-1' : ''}
                  `}
                >
                  {link.icon}
                  <span className="ml-1">{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a 
              href="#" 
              className={`text-sm flex items-center ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}
            >
              <Globe size={16} className="mr-1" />
              EN
            </a>
            <a 
              href="#" 
              className={`text-sm ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}
            >
              <HelpCircle size={16} />
            </a>
            {user ? (
              <>
                <a 
                  href="#" 
                  className={`text-sm relative ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}
                >
                  <Bell size={16} />
                  <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
                </a>
                <a 
                  href="#" 
                  className={`text-sm ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}
                >
                  <Heart size={16} />
                </a>
                <div className="relative group">
                  <Button 
                    variant={isScrolled ? 'primary' : 'secondary'} 
                    size="sm"
                    icon={<User size={16} />}
                  >
                    Profile
                  </Button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block">
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Button 
                variant={isScrolled ? 'primary' : 'secondary'} 
                size="sm"
                icon={<User size={16} />}
                onClick={() => setIsAuthModalOpen(true)}
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="text-2xl" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={isScrolled ? 'text-primary-light dark:text-white' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-primary-light dark:text-white' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center text-sm font-medium
                    ${isScrolled 
                      ? `${location.pathname === link.path ? 'text-primary-light dark:text-white' : 'text-gray-600 dark:text-gray-300'}` 
                      : `${location.pathname === link.path ? 'text-white' : 'text-white/80'}`
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span className="ml-1">{link.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200/30 flex flex-col space-y-4">
                <a 
                  href="#" 
                  className={`flex items-center text-sm ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}
                >
                  <Globe size={16} className="mr-2" />
                  English
                </a>
                <a 
                  href="#" 
                  className={`flex items-center text-sm ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}
                >
                  <HelpCircle size={16} className="mr-2" />
                  Help Center
                </a>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className={`flex items-center text-sm ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center text-sm ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}
                  >
                    <User size={16} className="mr-2" />
                    Sign In
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header;