// // 'use client';

// // import { useState } from 'react';
// // import { Code2, Menu, X, ChevronDown } from 'lucide-react';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import Image from 'next/image';

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
// //   const pathname = usePathname();

// //   const navItems = [
// //     { label: 'Home', href: '/' },
// //     { 
// //       label: 'Courses', 
// //       href: '/courses',
// //       dropdown: [
// //         { label: 'Python Development', href: '/courses/python' },
// //         { label: 'DevOps Engineering', href: '/courses/devops' },
// //         { label: 'React Development', href: '/courses/react' },
// //         { label: 'All Courses', href: '/courses' },
// //       ]
// //     },
// //     { label: 'About', href: '/about' },
// //     { label: 'Contact', href: '/contact' },
// //   ];

// //   const isActive = (path: string) => {
// //     if (path === '/' && pathname === '/') return true;
// //     if (path !== '/' && pathname.startsWith(path)) return true;
// //     return false;
// //   };

// //   const handleCoursesMouseEnter = () => {
// //     if (window.innerWidth > 768) {
// //       setIsCoursesOpen(true);
// //     }
// //   };

// //   const handleCoursesMouseLeave = () => {
// //     if (window.innerWidth > 768) {
// //       setIsCoursesOpen(false);
// //     }
// //   };

// //   const toggleCoursesDropdown = () => {
// //     setIsCoursesOpen(!isCoursesOpen);
// //   };

// //   return (
// //     <header className="sticky top-0 z-50 bg-orange-400 backdrop-blur-md border-b border-gray-100">
// //       <div className="section-padding">
// //         <nav className="flex items-center justify-between py-1">
// //           {/* Logo */}
// //           <Link href="/" className="flex items-center gap-3">
// //             {/* <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-lg flex items-center justify-center">
// //               <Code2 className="w-6 h-6 text-white" />
// //             </div>
// //             <div className="text-xl font-bold">
// //               Code<span className="text-[#FF7A1E]">Masters</span>
// //             </div> */}

// //             <Image src='/assets/icons/logo.png' width={50} height={20} alt='logi' unoptimized quality={100} className='object-cover w-60 h-20'/>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="max-md:hidden md:flex items-center gap-8">
// //             <ul className="flex items-center gap-6">
// //               {navItems.map((item) => (
// //                 <li 
// //                   key={item.label} 
// //                   className="relative"
// //                   onMouseEnter={item.dropdown ? handleCoursesMouseEnter : undefined}
// //                   onMouseLeave={item.dropdown ? handleCoursesMouseLeave : undefined}
// //                 >
// //                   {item.dropdown ? (
// //                     <>
// //                       <button
// //                         onClick={toggleCoursesDropdown}
// //                         className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
// //                           isActive(item.href)
// //                             ? 'text-[#FF7A1E] font-semibold'
// //                             : 'text-white hover:text-[#FF7A1E]'
// //                         }`}
// //                       >
// //                         {item.label}
// //                         <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
// //                       </button>
                      
// //                       {/* Courses Dropdown */}
// //                       {isCoursesOpen && (
// //                         <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
// //                           {item.dropdown.map((dropdownItem) => (
// //                             <Link
// //                               key={dropdownItem.label}
// //                               href={dropdownItem.href}
// //                               className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FF7A1E] transition-colors"
// //                               onClick={() => setIsCoursesOpen(false)}
// //                             >
// //                               {dropdownItem.label}
// //                             </Link>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </>
// //                   ) : (
// //                     <Link 
// //                       href={item.href}
// //                       className={`font-medium transition-colors duration-300 ${
// //                         isActive(item.href)
// //                           ? 'text-[#FF7A1E] font-semibold'
// //                           : 'text-gray-600 hover:text-[#FF7A1E]'
// //                       }`}
// //                     >
// //                       {item.label}
// //                     </Link>
// //                   )}
// //                 </li>
// //               ))}
// //             </ul>
// //             <Link href="/contact" className="btn">
// //               Enroll Now
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button 
// //             className="md:hidden"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           >
// //             {isMenuOpen ? (
// //               <X className="w-6 h-6 text-gray-700" />
// //             ) : (
// //               <Menu className="w-6 h-6 text-gray-700" />
// //             )}
// //           </button>
// //         </nav>

// //         {/* Mobile Menu */}
// //         {isMenuOpen && (
// //           <div className="md:hidden py-4 border-t border-gray-100">
// //             <ul className="flex flex-col gap-4">
// //               {navItems.map((item) => (
// //                 <li key={item.label}>
// //                   {item.dropdown ? (
// //                     <div className="space-y-2">
// //                       <button
// //                         onClick={toggleCoursesDropdown}
// //                         className={`flex items-center justify-between w-full py-2 font-medium ${
// //                           isActive(item.href)
// //                             ? 'text-[#FF7A1E] font-semibold'
// //                             : 'text-gray-600'
// //                         }`}
// //                       >
// //                         {item.label}
// //                         <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
// //                       </button>
                      
// //                       {/* Mobile Courses Dropdown */}
// //                       {isCoursesOpen && (
// //                         <div className="pl-4 space-y-2 border-l-2 border-orange-100 ml-2">
// //                           {item.dropdown.map((dropdownItem) => (
// //                             <Link
// //                               key={dropdownItem.label}
// //                               href={dropdownItem.href}
// //                               className="block py-2 text-gray-600 hover:text-[#FF7A1E]"
// //                               onClick={() => {
// //                                 setIsCoursesOpen(false);
// //                                 setIsMenuOpen(false);
// //                               }}
// //                             >
// //                               {dropdownItem.label}
// //                             </Link>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </div>
// //                   ) : (
// //                     <Link 
// //                       href={item.href}
// //                       className={`block py-2 font-medium ${
// //                         isActive(item.href)
// //                           ? 'text-[#FF7A1E] font-semibold'
// //                           : 'text-gray-600 hover:text-[#FF7A1E]'
// //                       }`}
// //                       onClick={() => setIsMenuOpen(false)}
// //                     >
// //                       {item.label}
// //                     </Link>
// //                   )}
// //                 </li>
// //               ))}
// //               <li>
// //                 <Link 
// //                   href="/contact" 
// //                   className="btn block text-center"
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   Enroll Now
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;











// 'use client';

// import { useState, useEffect } from 'react';
// import { ChevronDown, Menu, X, GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { label: 'Home', href: '/', icon: null },
//     { 
//       label: 'Courses', 
//       href: '/courses',
//       icon: <BookOpen className="w-4 h-4" />,
//       dropdown: [
//         { label: 'Python Development', href: '/courses/python', badge: 'Popular' },
//         { label: 'DevOps Engineering', href: '/courses/devops', badge: 'Trending' },
//         { label: 'React Development', href: '/courses/react', badge: 'Hot' },
//         { label: 'View All Courses', href: '/courses', badge: null },
//       ]
//     },
//     { label: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
//     { label: 'Contact', href: '/contact', icon: <Calendar className="w-4 h-4" /> },
//   ];

//   const isActive = (path: string) => {
//     if (path === '/' && pathname === '/') return true;
//     if (path !== '/' && pathname.startsWith(path)) return true;
//     return false;
//   };

//   const handleCoursesMouseEnter = () => {
//     if (window.innerWidth > 1024) {
//       setIsCoursesOpen(true);
//     }
//   };

//   const handleCoursesMouseLeave = () => {
//     if (window.innerWidth > 1024) {
//       setIsCoursesOpen(false);
//     }
//   };

//   const toggleCoursesDropdown = () => {
//     setIsCoursesOpen(!isCoursesOpen);
//   };

//   return (
//     <header className={`sticky top-0 z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50' 
//         : 'bg-gradient-to-r from-white via-white to-orange-50/30 border-b border-gray-100'
//     }`}>
//       {/* Top Bar */}
//       <div className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white py-1.5">
//         <div className="section-padding">
//           <div className="flex items-center justify-between text-sm">
//             <div className="flex items-center gap-4">
//               <span className="max-sm:hidden sm:flex items-center gap-1.5">
//                 <GraduationCap className="w-4 h-4" />
//                 <span>Industry-Focused Training</span>
//               </span>
//               <span className="max-sm:hidden md:flex items-center gap-1.5">
//                 <Users className="w-4 h-4" />
//                 <span>5000+ Students Trained</span>
//               </span>
//             </div>
//             <div className="flex items-center gap-4">
//               <a href="tel:+919876543210" className="max-sm:hidden sm:flex items-center gap-1.5 hover:text-orange-100 transition-colors">
//                 <span>📞 +91 98765 43210</span>
//               </a>
//               <a href="mailto:hello@codemasters.institute" className="max-md:hidden md:flex items-center gap-1.5 hover:text-orange-100 transition-colors">
//                 <span>✉️ hello@codemasters.institute</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="section-padding">
//         <nav className="flex items-center justify-between py-4">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <div className="relative">
//               {/* Logo with gradient border effect */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
//               <div className="relative bg-white rounded-xl p-1.5">
//                 <Image 
//                   src='/assets/icons/logo.png' 
//                   width={160} 
//                   height={50} 
//                   alt='CodeMasters Institute' 
//                   className='object-cover w-40 h-12'
//                   priority
//                 />
//               </div>
//             </div>
//             <div className="max-lg:hidden lg:block">
//               <div className="text-sm font-medium text-gray-600">Software Training Institute</div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="max-lg:hidden xl:flex items-center gap-8">
//             <ul className="flex items-center gap-1">
//               {navItems.map((item) => (
//                 <li 
//                   key={item.label} 
//                   className="relative"
//                   onMouseEnter={item.dropdown ? handleCoursesMouseEnter : undefined}
//                   onMouseLeave={item.dropdown ? handleCoursesMouseLeave : undefined}
//                 >
//                   {item.dropdown ? (
//                     <>
//                       <button
//                         onClick={toggleCoursesDropdown}
//                         className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
//                           isActive(item.href)
//                             ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
//                             : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
//                         }`}
//                       >
//                         {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
//                         {item.label}
//                         <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} />
//                       </button>
                      
//                       {/* Courses Dropdown */}
//                       {isCoursesOpen && (
//                         <div className="absolute top-full left-0  w-80 bg-white rounded-2xl shadow-2xl border border-gray-200/80 backdrop-blur-xl py-3 animate-in fade-in slide-in-from-top-5 duration-200">
//                           <div className="px-4 py-2 border-b border-gray-100">
//                             <div className="text-sm font-semibold text-gray-900">Featured Programs</div>
//                             <div className="text-xs text-gray-500">Industry-leading curriculum</div>
//                           </div>
//                           {item.dropdown.map((dropdownItem) => (
//                             <Link
//                               key={dropdownItem.label}
//                               href={dropdownItem.href}
//                               className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FF7A1E] transition-all duration-200 group"
//                               onClick={() => setIsCoursesOpen(false)}
//                             >
//                               <div className="flex items-center gap-3">
//                                 <div className="w-2 h-2 rounded-full bg-orange-200 group-hover:bg-[#FF7A1E] transition-colors"></div>
//                                 <span className="font-medium">{dropdownItem.label}</span>
//                               </div>
//                               {dropdownItem.badge && (
//                                 <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
//                                   dropdownItem.badge === 'Popular' 
//                                     ? 'bg-orange-100 text-[#FF7A1E]' 
//                                     : dropdownItem.badge === 'Trending'
//                                     ? 'bg-blue-100 text-blue-600'
//                                     : 'bg-red-100 text-red-600'
//                                 }`}>
//                                   {dropdownItem.badge}
//                                 </span>
//                               )}
//                             </Link>
//                           ))}
//                           <div className="px-4 py-3 border-t border-gray-100">
//                             <Link 
//                               href="/contact" 
//                               className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
//                             >
//                               Book Free Demo
//                             </Link>
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link 
//                       href={item.href}
//                       className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
//                         isActive(item.href)
//                           ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
//                           : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
//                       }`}
//                     >
//                       {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
//                       {item.label}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
            
//             {/* CTA Buttons */}
//             <div className="flex items-center gap-3">
//               <Link 
//                 href="/contact" 
//                 className="px-6 py-2.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-0.5"
//               >
//                 Enroll Now
//               </Link>
//               <Link 
//                 href="/contact" 
//                 className="max-lg:hidden lg:flex items-center gap-2 px-4 py-2.5 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
//               >
//                 <Calendar className="w-4 h-4" />
//                 Free Demo
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="xl:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="xl:hidden fixed inset-0 top-24 z-40 bg-white">
//             <div className="h-[calc(100vh-6rem)] overflow-y-auto pb-8">
//               <div className="px-4 py-6 border-b border-gray-100">
//                 <div className="text-sm font-semibold text-gray-900 mb-2">Main Navigation</div>
//                 <ul className="space-y-2">
//                   {navItems.map((item) => (
//                     <li key={item.label}>
//                       {item.dropdown ? (
//                         <div className="space-y-2">
//                           <button
//                             onClick={toggleCoursesDropdown}
//                             className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium ${
//                               isActive(item.href)
//                                 ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
//                                 : 'text-gray-700'
//                             }`}
//                           >
//                             <div className="flex items-center gap-2">
//                               {item.icon}
//                               {item.label}
//                             </div>
//                             <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
//                           </button>
                          
//                           {/* Mobile Courses Dropdown */}
//                           {isCoursesOpen && (
//                             <div className="pl-8 space-y-2">
//                               {item.dropdown.map((dropdownItem) => (
//                                 <Link
//                                   key={dropdownItem.label}
//                                   href={dropdownItem.href}
//                                   className="flex items-center justify-between px-4 py-2.5 text-gray-600 hover:text-[#FF7A1E] rounded-lg hover:bg-orange-50"
//                                   onClick={() => {
//                                     setIsCoursesOpen(false);
//                                     setIsMenuOpen(false);
//                                   }}
//                                 >
//                                   <div className="flex items-center gap-3">
//                                     <div className="w-1.5 h-1.5 rounded-full bg-orange-200"></div>
//                                     <span>{dropdownItem.label}</span>
//                                   </div>
//                                   {dropdownItem.badge && (
//                                     <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
//                                       dropdownItem.badge === 'Popular' 
//                                         ? 'bg-orange-100 text-[#FF7A1E]' 
//                                         : 'bg-blue-100 text-blue-600'
//                                     }`}>
//                                       {dropdownItem.badge}
//                                     </span>
//                                   )}
//                                 </Link>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <Link 
//                           href={item.href}
//                           className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium ${
//                             isActive(item.href)
//                               ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
//                               : 'text-gray-700 hover:bg-gray-50'
//                           }`}
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {item.icon}
//                           {item.label}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Mobile CTA Section */}
//               <div className="px-4 py-8">
//                 <div className="text-center mb-6">
//                   <div className="text-lg font-bold text-gray-900 mb-2">Ready to Start Learning?</div>
//                   <div className="text-gray-600 text-sm">Get personalized guidance</div>
//                 </div>
                
//                 <div className="space-y-4">
//                   <Link 
//                     href="/contact" 
//                     className="block w-full py-3.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl text-center hover:shadow-lg transition-shadow"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Enroll Now
//                   </Link>
//                   <Link 
//                     href="/contact" 
//                     className="block w-full py-3.5 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl text-center hover:bg-orange-50 transition-colors"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Book Free Demo
//                   </Link>
//                 </div>
//               </div>

//               {/* Contact Info in Mobile */}
//               <div className="px-4">
//                 <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl">
//                   <div className="text-sm font-semibold text-gray-900 mb-3">Need Help?</div>
//                   <div className="space-y-3">
//                     <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-700">
//                       <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
//                         <span className="text-[#FF7A1E]">📞</span>
//                       </div>
//                       <div>
//                         <div className="text-xs text-gray-500">Call us at</div>
//                         <div className="font-semibold">+91 98765 43210</div>
//                       </div>
//                     </a>
//                     <a href="mailto:hello@codemasters.institute" className="flex items-center gap-3 text-gray-700">
//                       <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
//                         <span className="text-[#FF7A1E]">✉️</span>
//                       </div>
//                       <div>
//                         <div className="text-xs text-gray-500">Email us at</div>
//                         <div className="font-semibold">hello@codemasters.institute</div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, GraduationCap, BookOpen, Users, Calendar, Brain } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', icon: null },
    { 
      label: 'Courses', 
      href: '/courses',
      icon: <BookOpen className="w-4 h-4" />,
      dropdown: [
        { label: 'Python Development', href: '/courses/python', badge: 'Popular' },
        { label: 'DevOps Engineering', href: '/courses/devops', badge: 'High Demand' },
        { label: 'React Development', href: '/courses/react', badge: 'Trending' },
        { label: 'View All Courses', href: '/courses', badge: null },
      ]
    },
    { label: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Calendar className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const handleCoursesMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setIsCoursesOpen(true);
    }
  };

  const handleCoursesMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setIsCoursesOpen(false);
    }
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50' 
        : 'bg-gradient-to-r from-white via-white to-orange-50/30 border-b border-gray-100'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white py-1.5">
        <div className="section-padding">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span className="max-sm:hidden sm:flex items-center gap-1.5">
                <Brain className="w-4 h-4" />
                <span>Future-Ready Tech Education</span>
              </span>
              <span className="max-md:hidden md:flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>5000+ Career Transformations</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+919876543210" className="max-sm:hidden sm:flex items-center gap-1.5 hover:text-orange-100 transition-colors">
                <span>📞 +91 98765 43210</span>
              </a>
              <a href="mailto:admissions@viraacademy.com" className="max-md:hidden md:flex items-center gap-1.5 hover:text-orange-100 transition-colors">
                <span>✉️ admissions@viraacademy.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="section-padding">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Logo with gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-1.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900">
                      <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent">
                        Vira Academy
                      </span>
                    </div>
                    <div className="text-xs font-medium text-gray-600">Tech Training Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="max-xl:hidden xl:flex items-center gap-8">
            <ul className="flex items-center gap-1">
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
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                          isActive(item.href)
                            ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Courses Dropdown */}
                      {isCoursesOpen && (
                        <div className="absolute  left-0 top-7 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200/80 backdrop-blur-xl py-3 animate-in fade-in slide-in-from-top-5 duration-200">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <div className="text-sm font-semibold text-gray-900">Vira Academy Programs</div>
                            <div className="text-xs text-gray-500">Industry-focused curriculum</div>
                          </div>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FF7A1E] transition-all duration-200 group"
                              onClick={() => setIsCoursesOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-orange-200 group-hover:bg-[#FF7A1E] transition-colors"></div>
                                <span className="font-medium">{dropdownItem.label}</span>
                              </div>
                              {dropdownItem.badge && (
                                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                  dropdownItem.badge === 'Popular' 
                                    ? 'bg-orange-100 text-[#FF7A1E]' 
                                    : dropdownItem.badge === 'High Demand'
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'bg-purple-100 text-purple-600'
                                }`}>
                                  {dropdownItem.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                          <div className="px-4 py-3 border-t border-gray-100">
                            <Link 
                              href="/contact" 
                              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                              Book Free Demo
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.icon && <span className="text-[#FF7A1E]">{item.icon}</span>}
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link 
                href="/contact" 
                className="px-6 py-2.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Learning
              </Link>
              <Link 
                href="/contact" 
                className="max-lg:hidden lg:flex items-center gap-2 px-4 py-2.5 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Free Demo
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="xl:hidden fixed inset-0 top-24 z-40 bg-white">
            <div className="h-[calc(100vh-6rem)] overflow-y-auto pb-8">
              <div className="px-4 py-6 border-b border-gray-100">
                <div className="text-sm font-semibold text-gray-900 mb-2">Vira Academy Navigation</div>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <button
                            onClick={toggleCoursesDropdown}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium ${
                              isActive(item.href)
                                ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                                : 'text-gray-700'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {item.icon}
                              {item.label}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {/* Mobile Courses Dropdown */}
                          {isCoursesOpen && (
                            <div className="pl-8 space-y-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className="flex items-center justify-between px-4 py-2.5 text-gray-600 hover:text-[#FF7A1E] rounded-lg hover:bg-orange-50"
                                  onClick={() => {
                                    setIsCoursesOpen(false);
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-200"></div>
                                    <span>{dropdownItem.label}</span>
                                  </div>
                                  {dropdownItem.badge && (
                                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                      dropdownItem.badge === 'Popular' 
                                        ? 'bg-orange-100 text-[#FF7A1E]' 
                                        : 'bg-blue-100 text-blue-600'
                                    }`}>
                                      {dropdownItem.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link 
                          href={item.href}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium ${
                            isActive(item.href)
                              ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF7A1E]'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile CTA Section */}
              <div className="px-4 py-8">
                <div className="text-center mb-6">
                  <div className="text-lg font-bold text-gray-900 mb-2">Ready to Transform Your Career?</div>
                  <div className="text-gray-600 text-sm">Get personalized guidance at Vira Academy</div>
                </div>
                
                <div className="space-y-4">
                  <Link 
                    href="/contact" 
                    className="block w-full py-3.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl text-center hover:shadow-lg transition-shadow"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start Learning
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block w-full py-3.5 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl text-center hover:bg-orange-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Free Demo
                  </Link>
                </div>
              </div>

              {/* Contact Info in Mobile */}
              <div className="px-4">
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl">
                  <div className="text-sm font-semibold text-gray-900 mb-3">Vira Academy Support</div>
                  <div className="space-y-3">
                    <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                        <span className="text-[#FF7A1E]">📞</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Call us at</div>
                        <div className="font-semibold">+91 98765 43210</div>
                      </div>
                    </a>
                    <a href="mailto:admissions@viraacademy.com" className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                        <span className="text-[#FF7A1E]">✉️</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Email us at</div>
                        <div className="font-semibold">admissions@viraacademy.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;