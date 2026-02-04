'use client';

import { useState } from 'react';
import { Code2, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Courses', 
      href: '/courses',
      dropdown: [
        { label: 'Python Development', href: '/courses/python' },
        { label: 'DevOps Engineering', href: '/courses/devops' },
        { label: 'React Development', href: '/courses/react' },
        { label: 'All Courses', href: '/courses' },
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const handleCoursesMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsCoursesOpen(true);
    }
  };

  const handleCoursesMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsCoursesOpen(false);
    }
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-orange-400 backdrop-blur-md border-b border-gray-100">
      <div className="section-padding">
        <nav className="flex items-center justify-between py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold">
              Code<span className="text-[#FF7A1E]">Masters</span>
            </div> */}

            <Image src='/assets/icons/logo.png' width={50} height={20} alt='logi' unoptimized quality={100} className='object-cover w-60 h-20'/>
          </Link>

          {/* Desktop Navigation */}
          <div className="max-md:hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={item.dropdown ? handleCoursesMouseEnter : undefined}
                  onMouseLeave={item.dropdown ? handleCoursesMouseLeave : undefined}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={toggleCoursesDropdown}
                        className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                          isActive(item.href)
                            ? 'text-[#FF7A1E] font-semibold'
                            : 'text-white hover:text-[#FF7A1E]'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Courses Dropdown */}
                      {isCoursesOpen && (
                        <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FF7A1E] transition-colors"
                              onClick={() => setIsCoursesOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={item.href}
                      className={`font-medium transition-colors duration-300 ${
                        isActive(item.href)
                          ? 'text-[#FF7A1E] font-semibold'
                          : 'text-gray-600 hover:text-[#FF7A1E]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn">
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={toggleCoursesDropdown}
                        className={`flex items-center justify-between w-full py-2 font-medium ${
                          isActive(item.href)
                            ? 'text-[#FF7A1E] font-semibold'
                            : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Courses Dropdown */}
                      {isCoursesOpen && (
                        <div className="pl-4 space-y-2 border-l-2 border-orange-100 ml-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block py-2 text-gray-600 hover:text-[#FF7A1E]"
                              onClick={() => {
                                setIsCoursesOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      className={`block py-2 font-medium ${
                        isActive(item.href)
                          ? 'text-[#FF7A1E] font-semibold'
                          : 'text-gray-600 hover:text-[#FF7A1E]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link 
                  href="/contact" 
                  className="btn block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;